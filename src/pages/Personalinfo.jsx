import Grid from '@mui/material/Unstable_Grid2'

import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {  setuser, loadingSelector, setloading} from '../slices/userSlice.js'
import {useNavigate} from 'react-router-dom'
import { getUserinfo} from '../services/service.js'
import {toast} from "react-toastify";
import {Spinner, PersonalInfoForm} from '../components/index.js'
import CryptoJS from "crypto-js";


const Personalinfo = () => {

    const dispatch = useDispatch()

    const reduxloading = useSelector(loadingSelector)
    const nav = useNavigate()





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
                    nav('/ats/personal')
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


    let content

    if (reduxloading === true) {
        content = <Spinner/>
    } else {

        content = <PersonalInfoForm/>


    }


    return (
        <>
            <Grid container className='margins'>
                <Grid xs={12}>
                    {content}


                </Grid>


            </Grid>


        </>
    )
}
export default Personalinfo;