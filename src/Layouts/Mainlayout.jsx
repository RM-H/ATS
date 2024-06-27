import {Outlet, useNavigate} from 'react-router-dom'
import {Nav,Step} from '../components/index.js'
import {toast, ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react";
import CryptoJS from 'crypto-js'
import {getUserinfo} from '../services/service.js'
import {useDispatch} from "react-redux";
import {setuser,setloading} from '../slices/userSlice.js'
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

  return(
      <div className='main-cantainer' >

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