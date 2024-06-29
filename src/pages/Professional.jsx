import * as yup from "yup";
import {Field, Form, Formik, useFormik} from "formik";
import Grid from "@mui/material/Unstable_Grid2";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Button, Checkbox,
    FormControl,
    FormControlLabel,
    TextField,
    Typography
} from "@mui/material";

import {useEffect, useState} from "react";
import {Workitem, Spinner} from '../components/index.js'
import {useDispatch, useSelector} from "react-redux";
import {
    workselector,
    userselector,
    setuser,
    setstep,
    setwork,
    resetWorkdraft,
    setloading, loadingSelector
} from "../slices/userSlice.js";
import {getUserinfo, saveWorks} from '../services/service.js'
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import CryptoJS from "crypto-js";


const Professional = () => {
    const nav = useNavigate()
    // controlling loading

    const [loading, setLoading] = useState(false)

    // work items in redux
    const works = useSelector(workselector)
    const dispatch = useDispatch()
    // user info
    const user = useSelector(userselector)
    const reduxloading = useSelector(loadingSelector)

    // checking to see if user had already logged in before
    useEffect(() => {
        let user = localStorage.getItem('user')

        if (user) {
            let decrypt = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('user'), 'ats').toString(CryptoJS.enc.Utf8));


            const getuser = async () => {
                dispatch(setloading(true))

                const formdata = new FormData()
                formdata.append('token', decrypt)
                const response = await getUserinfo(formdata)
                if (response.data.code == 1) {
                    dispatch(setuser(response.data))
                    nav('/ats/professional')


                    dispatch(setloading(false))

                } else {
                    dispatch(setloading(false))

                    toast.warning(response.data.error)
                    nav('/')
                }
            }
            getuser().then()


        } else {
            toast.warning('لطفا ابتدا وارد سیستم شوید.')
            nav('/')
        }


    }, []);


    // adding work items to fields

    useEffect(() => {
        if (reduxloading === false && user.works) {


            let items = []
            user.works.map((item) => {
                items.push(item.company);
                dispatch(setwork(item))

            })
            setFileds(items)
        }
    }, [user]);


    const handleNext = async () => {
        const formdata = new FormData()
        formdata.append("token", user.user.token)
        formdata.append('data', JSON.stringify(works))


        setLoading(true)

        const response = await saveWorks(formdata)
        if (response.data.code == 1) {
            toast.success('سوابق شغلی با موفقیت اضافه شد.')
            dispatch(setstep(4))
            dispatch(setuser(response.data))
            dispatch(resetWorkdraft())
            setLoading(false)
            nav('/ats/evaluation')


        } else {
            setLoading(false)
            toast.warning(response.data.error)
        }


    }


    // adding a new form for professional history
    const [fields, setFileds] = useState([])


    const addnewfield = useFormik({
        initialValues: {
            title: '',

        },
        validationSchema: yup.object({

            title: yup.string().max(70, 'نام بصورت صحیح وارد نشده').required('ضروری'),


        }),
        onSubmit: (values, actions) => {
            handleadd(values);
            actions.resetForm()

        },
    });
    const handleadd = (val) => {


        let copy = [...fields, val.title];

        setFileds(copy)


    }

    let content


    if (fields !== false) {

        content = fields.map((item, index) => {


                return (
                    <Workitem item={item} key={index} fields={fields} setfields={setFileds}/>

                )
            }
        )
    } else {
        content = <Spinner/>
    }


    return (
        <>


            <Grid container className='margins' sx={{'& .MuiInputBase-root': {fontFamily: 'yekan-reg'}}}>
                <button onClick={() => console.log(fields)}>
                    test
                </button>


                {
                    reduxloading ? <Spinner/> : content
                }


                <Grid xs={12} sx={{textAlign: 'center'}}>

                    {
                        loading ? <Spinner/> :
                            <Button className='yekan-regular' onClick={handleNext} variant="contained">ادامه</Button>
                    }

                </Grid>


                <Grid xs={12}>
                    <form onSubmit={addnewfield.handleSubmit}>


                        <FormControl className='w100' variant="outlined">

                            <span className='yekan-regular'> عنوان شرکت یا محل کار  :  </span>
                            <TextField
                                id="title"
                                name='title'

                                value={addnewfield.values.title}
                                onChange={addnewfield.handleChange}
                                onBlur={addnewfield.handleBlur}

                                error={addnewfield.touched.title && Boolean(addnewfield.errors.title)}


                                helperText={addnewfield.touched.title && addnewfield.errors.title}

                            />


                        </FormControl>
                        <Button className='yekan-regular' type='submit' variant="contained" sx={{my: 2}}>+</Button>

                    </form>
                </Grid>


            </Grid>


        </>
    )
}
export default Professional;