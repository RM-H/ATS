import {Outlet, useNavigate} from 'react-router-dom'
import {Nav, Step} from '../components/index.js'
import {toast, ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react";
import CryptoJS from 'crypto-js'
import {getUserinfo} from '../services/service.js'
import {useDispatch} from "react-redux";
import {setuser, setloading, setstep} from '../slices/userSlice.js'

const Mainlayout = () => {

    const dispatch = useDispatch()
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

                    if (response.data.questions !== false) {
                        dispatch(setstep(5))
                    } else if (response.data.works !== false) {
                        dispatch(setstep(4))

                    } else if (response.data.education1 !== false || response.data.education2 !== false || response.data.education3 !== false || response.data.education4 !== false) {
                        dispatch(setstep(3))

                    } else if (response.data.user.name !=null) {
                        dispatch(setstep(2))
                    } else if (response.data.departemant) {
                        dispatch(setstep(1))
                    }



                    console.log(response.data)
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


    return (
        <div className='main-cantainer'>

            <Nav/>
            <Step/>

            <Outlet/>
            <ToastContainer position="top-center"
                            autoClose={3690}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            rtl={true}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"

                            transition: Bounce/>


        </div>
    )
}
export default Mainlayout;