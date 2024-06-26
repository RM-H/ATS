import Grid from '@mui/material/Unstable_Grid2'
import {FormControl, InputLabel, MenuItem, Typography, Select, Paper, Button} from "@mui/material";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setstep, userselector, setuser, loadingSelector, setloading} from '../slices/userSlice.js'
import {toast} from 'react-toastify'
import {Spinner} from '../components/index.js'

import {getSplash, getUserinfo, selectDepartment} from '../services/service.js'
import CryptoJS from "crypto-js";

const Departement = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()


    const user = useSelector(userselector)
    const reduxloading = useSelector(loadingSelector)

    // storing splash data in state
    const [data, setData] = useState(false)


    // loading animation
    const [loading, setLoading] = useState(false)



    // checking to see if user had already logged in before
    useEffect(() => {
        let user = localStorage.getItem('user')

        if (user) {
            let decrypt = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('user'), 'ats').toString(CryptoJS.enc.Utf8));



            const getuser = async () => {
                dispatch(setloading(true))
                const formdata = new FormData()
                formdata.append('token' , decrypt)
                const response = await getUserinfo(formdata)
                if (response.data.code==1) {
                    dispatch(setuser(response.data))
                    nav('/ats')
                    dispatch(setloading(false))
                } else {
                    dispatch(setloading(false))
                    toast.warning(response.data.error)
                    nav('/')
                }
            }
            getuser()


        } else {
            toast.warning('لطفا ابتدا وارد سیستم شوید.')
            nav('/')
        }



    }, []);


    const getDepartments = async () => {
        const response = await getSplash()
        if (response) {
            setData(response.data)
        }
    }

    useEffect(() => {

        getDepartments()
        // adding users depatment if it has alreadybeen chosen before
        if ( reduxloading===false && user.user.departemant) {
            setDep(user.user.departemant)
        }



    }, [reduxloading]);


    const [dep, setDep] = useState(false)


    const handleChange = (e) => {

        setDep(e.target.value)
    }

    const handleNexty = async () => {
        if (dep !== false) {
            let formdata = new FormData()
            formdata.append('token', user.user.token)
            formdata.append('departemant', dep)

            setLoading(true)

            let resp = await selectDepartment(formdata)
            if (resp.data.code == 1) {
                setLoading(false)
                toast.success('دپارتمان با موفقیت انتخاب شد')
                dispatch(setuser(resp.data))
                dispatch(setstep(1))
                nav('/ats/personal')

            } else {
                setLoading(false)
                toast.warning(resp.data.error)
            }

        } else {
            toast.error('ابتدا دپارتمان را انتخاب کنید.')

        }

    }


    let options
    if (data !== false) {
        options = data.departemans.map((item) => (
            <MenuItem key={item.code} className='yekan-regular'  value={item.code}>{item.name}</MenuItem>
        ))
    }


    let content
    if (dep !== false && data !==false) {
        let filtered = data.departemans.filter((item) => {
            return item.code == dep
        })

        content = filtered[0].des
    } else {
        content= <Spinner/>
    }


    return (
        <>
            <Grid className='margins' container sx={{justifyContent: 'center'}}>

                <Grid xs={12} sx={{my: 2}}>
                    <Paper elevation={3} sx={{p: 3}}>

                        <Typography className='yekan-regular' component='article'>
                            {
                                content
                            }
                        </Typography>


                    </Paper>
                </Grid>


                <Grid xs={12} sx={{my: 3}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" className='yekan-regular'>دپارتمان</InputLabel>
                        <Select

                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className='yekan-regular'
                            value={dep}
                            label="Age"
                            onChange={handleChange}
                        >
                            <em style={{marginRight: '1rem'}} className='yekan-regular'>انتخاب کنید</em>
                            {
                                options
                            }
                        </Select>
                    </FormControl>
                </Grid>


                <Grid xs={12} sx={{textAlign: 'center'}}>
                    {
                        loading ? <Spinner/> :   <Button className='yekan-regular' variant='contained' onClick={handleNexty}>ادامه</Button>
                    }

                </Grid>

            </Grid>


        </>
    )
}
export default Departement;