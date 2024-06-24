import Grid from "@mui/material/Unstable_Grid2";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Checkbox,
    FormControl,
    FormControlLabel,
    Button,
    Typography
} from "@mui/material";
import {ArrowDownward,DoneOutline} from "@mui/icons-material";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Spinner} from "../index.js";
import {useEffect, useState} from "react";
import {saveKardani} from '../../services/service.js'
import {useDispatch, useSelector} from "react-redux";
import {userselector,setuser} from "../../slices/userSlice.js";
import {toast} from "react-toastify";

const Kardani = () => {
    const dispatch = useDispatch()
    const user = useSelector(userselector)
    const [startdate, setstartDate] = useState('')
    const [enddate, setendDate] = useState('')


    useEffect(() => {
        if (user.education1 && user.education1 !==false){
            setstartDate(user.education1.start)
            setendDate(user.education1.end)
            setStudying(user.education1.studying)


        }


    }, []);



    // currently studying
    const [studying, setStudying] = useState(false)


    // animation control
    const [loading, setLoading] = useState(false)


    const handleKardani = async (val, start, end) => {

        let data = {
            major: val.major,
            university: val.university,
            average: val.average,
            start: start,
            end: end,
            studying: studying
        }

        const formdata = new FormData()
        formdata.append('token', user.user.token)
        formdata.append('data', JSON.stringify(data))
        setLoading(true)
        let response = await saveKardani(formdata)
        if (response.data.code==1) {
            toast.success('با موفقیت ثبت شد')
            setLoading(false)
            dispatch(setuser(response.data))


        } else {
            setLoading(false)
            toast.warning(response.data.error)
        }


    }





    return (
        <>

            <Grid xs={12} sx={{my: 2}}>

                {/*dynamically setting initail values*/}

                <Formik initialValues={{major: user.education1 !==false ? user.education1.major:'', university: user.education1 !==false ? user.education1.university:'', average: user.education1 !==false ? user.education1.average:''}}
                        validationSchema={Yup.object().shape({

                            major: Yup.string().max(100, 'به درستی وارد نشده').required('ضروری'),
                            university: Yup.string().max(100, 'به درستی وارد نشده').required('ضروری'),
                            average: Yup.number().max(20, 'معدلت بیشتر از بیسته ؟').min(0, 'معدل کمتر از صفر که نمیشه').required('ضروری'),


                        })}
                        onSubmit={(values) => handleKardani(values, startdate, enddate)}>
                    {({errors, touched}) => (
                        <Form className='has-text-centered'>


                            <Accordion elevation={3}>
                                <AccordionSummary
                                    expandIcon={<ArrowDownward/>}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography variant='h5' className='yekan-regular'>
                                        مقطع کاردانی
                                    </Typography>

                                    {
                                        user.education1 !==false &&   <DoneOutline className='clrtwotext' sx={{ mr:3}}/>
                                    }



                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={4}>
                                        <Grid xs={12}  md={4}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan-regular'> رشته - گرایش  :  </span>
                                                <Field className="input is-info" name='major'/>
                                                <ErrorMessage className='yekan-regular clrsixtext' component='span'
                                                              name='major'/>


                                            </FormControl>
                                        </Grid>


                                        <Grid xs={12}  md={4}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan-regular'> دانشگاه  :  </span>
                                                <Field

                                                    name='university'
                                                    className="input is-info"


                                                />
                                                <ErrorMessage className='yekan-regular clrsixtext ' component='span'
                                                              name='university'/>


                                            </FormControl>
                                        </Grid>

                                        <Grid xs={12}  md={4} sx={{
                                            display: 'flex',
                                            flexDirection:'column',
                                            alignItems: 'center',
                                            justifyContent: 'space-around'
                                        }}>
                                            <span className='yekan-regular'> تاریخ شروع:</span>


                                            <DatePicker style={{
                                                fontFamily: 'yekan-reg',
                                                fontSize: '1rem',
                                                padding: '1rem',
                                                textAlign: 'center'
                                            }} className='yekan-regular' onChange={setstartDate} calendar={persian}
                                                        locale={persian_fa}
                                                        value={startdate}/>
                                        </Grid>

                                        <Grid xs={12}  md={4} sx={{
                                            display: 'flex',
                                            flexDirection:'column',
                                            alignItems: 'center',
                                            justifyContent: 'space-around'
                                        }}>
                                            <span className='yekan-regular'> تاریخ پایان:  </span>


                                            <DatePicker disabled={studying} style={{
                                                fontFamily: 'yekan-reg',
                                                fontSize: '1rem',
                                                padding: '1rem',
                                                textAlign: 'center'
                                            }} className='yekan-regular' onChange={setendDate} calendar={persian}
                                                        locale={persian_fa} value={enddate}
                                            />

                                        </Grid>
                                        <Grid xs={12} md={4}>
                                            <FormControlLabel
                                                control={<Checkbox checked={studying} onChange={() => setStudying((prev) => !prev)}/>}
                                                label={<span className='yekan-regular '>مشغول به تحصیل </span>}/>
                                        </Grid>

                                        <Grid xs={12}  md={4}>
                                            <FormControl className='w100' variant="outlined">

                                                <span className='yekan-regular'> معدل  :  </span>
                                                <Field
                                                    name='average'
                                                    type='number'

                                                    className="input is-info"


                                                />
                                                <ErrorMessage className='yekan-regular clrsixtext' component='span'
                                                              name='average'/>


                                            </FormControl>
                                        </Grid>

                                        <Grid xs={12}  md={12}>

                                            {
                                                loading ? <Spinner/> :
                                                    <Button variant='outlined' className='w100 yekan-regular'
                                                            type='submit'
                                                            sx={{my: 3}}>
                                                        ثبت
                                                    </Button>
                                            }

                                        </Grid>


                                    </Grid>


                                </AccordionDetails>
                            </Accordion>


                        </Form>


                    )}


                </Formik>


            </Grid>


        </>
    )
}
export default Kardani