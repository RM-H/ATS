import Grid from "@mui/material/Unstable_Grid2";
import {Button} from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Kardani, Karshenasi, KarshenasiArshad, Phd, Spinner} from '../components/index.js'
import {loadingSelector, setloading, setstep, setuser, userselector} from "../slices/userSlice.js";
import {toast} from "react-toastify";
import {useEffect} from "react";
import CryptoJS from "crypto-js";
import {getUserinfo} from "../services/service.js";


const Education = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
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
                    nav('/ats/education')
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


    const handleNext = () => {
        if (user.education1 !== false || user.education2 !== false || user.education3 !== false || user.education4 !== false) {
            dispatch(setstep(3))
            nav('/ats/professional')
        } else {
            toast.warning('وارد کردن حداقل یکی از مقاطع تحصیلی اجباری میباشد.')
        }
    }


    return (
        <>
            <Grid container className='margins' sx={{'& .MuiInputBase-root': {fontFamily: 'yekan-reg'}}}>

                {
                    reduxloading ?
                        <Grid xs={12} sx={{my:5}}>
                            <Spinner/>
                        </Grid>



                        :
                        <>
                            <Kardani/>

                            <Karshenasi/>
                            <KarshenasiArshad/>
                            <Phd/>
                        </>

                }


                <Grid xs={12} sx={{textAlign: 'center'}}>

                    <Button variant="contained" className='yekan-regular' onClick={handleNext}>
                        ادامه
                    </Button>

                </Grid>


            </Grid>


        </>
    )
}
export default Education;