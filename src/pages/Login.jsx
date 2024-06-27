import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import  {useState} from 'react'
import {Spinner} from '../components/index.js'

import CryptoJS from 'crypto-js'

import {useNavigate} from "react-router-dom";
import {getSms,verifySmsCode,getUserinfo} from '../services/service.js'
import {toast, ToastContainer} from "react-toastify";
import {useDispatch} from "react-redux";
import {setuser,setstep} from '../slices/userSlice.js'



const Login = () => {

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [phoneentered, setphoneentered] = useState(false)


    const nav = useNavigate()


    const HandleLogin =async (v) => {


        if (phoneentered===false) {
            const form = new FormData
            form.append('phone',v.phone)
            setLoading(true)
            const res = await getSms(form)
            if (res.data.code==1){
                setphoneentered(true)
                setLoading(false)
                toast.success('کد ارسال شد')
            } else {
                toast.warning(res.data.error)
            }



        } else {
            const form = new FormData
            form.append('phone',v.phone)
            form.append('code',v.code);
            setLoading(true)
            let resp = await verifySmsCode(form)


          if (resp.data.code===1){
              const hashed =CryptoJS.AES.encrypt(JSON.stringify(resp.data.user.token),'ats' , toString())
              localStorage.setItem('user', hashed)


              // user continues his steps
              if (resp.data.user.departemant) {
                  dispatch(setstep(1))
              }
              if (resp.data.user.name) {
                  dispatch(setstep(2))
              }

              localStorage.setItem('user' ,crypto.AES.encrypt(resp.data.user.token,'ats'))

              dispatch(setuser(resp.data))
              setLoading(false)


              nav('/ats')
              toast.success('با موفقیت وارد شدید')
          } else {
              setLoading(false)
              setphoneentered(false)
             toast.warning(resp.data.error)
          }

        }

    }




    // const developementgetdata = async () => {
    //     const formdata = new FormData()
    //     formdata.append('token' , '667cf1f5242cd')
    //   const response = await getUserinfo(formdata)
    //     if (response.data.code===1) {
    //         const hashed =CryptoJS.AES.encrypt(JSON.stringify('667cf1f5242cd'),'ats' , toString())
    //         localStorage.setItem('user', hashed)
    //         dispatch(setuser(response.data))
    //         nav('/ats')
    //     }else {
    //         console.log(response.data.error)
    //     }
    // }


    return (
        <>

            <div

                 style={{width: "100wv", height: '100vh' , display:'flex', justifyContent:'center' , alignItems:'center' , backgroundImage:'url(/assets/images/wallpaper.jpg)' , backgroundSize:'cover' , backgroundRepeat:'no-repeat'}}>

                {/*<button onClick={developementgetdata}>*/}
                {/*    dev*/}
                {/*</button>*/}











                <div className="main-login " style={{
                    backgroundColor: 'rgba(9,9,9,0.6)',
                    backdropFilter: 'blur(0.1rem)'
                }}>
                    <input type="checkbox" id="chk" aria-hidden="true"/>

                    <div className="signup is-size-5 has-text-centered yekan-regular">
                        <h2>
                           به سامانه رهگیری استخدام (ATS) افق ایرانیان خوش آمدید.
                        </h2>

                    </div>

                    <div className="login">


                        <Formik initialValues={{phone: '', code: ''}} validationSchema={Yup.object().shape({

                            phone: Yup.string().matches(/^[0-9]+$/, 'فقط عدد').length(11, 'شماره درست وارد نشده است').required('ضروری'),


                        })} onSubmit={(values) => HandleLogin(values)}>
                            {({errors, touched}) => (
                                <Form className='has-text-centered'>


                                    <label htmlFor="chk" aria-hidden="true">ورود</label>
                                    <Field disabled={phoneentered} className='yekan' type="text" id="phone" name="phone"
                                           placeholder="شماره تلفن"/>
                                    <ErrorMessage style={{textAlign:'center' , color:'white'}} component='p' className='yekan-regular '
                                                  name='phone'/>

                                    {
                                        phoneentered &&   <Field   className='yekan' type="tel" id="code" name="code"
                                                                   placeholder="کد ارسال شده"


                                        />
                                    }

                                    <ErrorMessage component='span' className='has-text-danger yekan' name='pswd'/>
                                    <button disabled={loading} className='my-4' type='submit' >
                                        {
                                            loading ? <Spinner/> : phoneentered ? 'ورود' :'ارسال کد'
                                        }



                                    </button>

                                    {
                                        phoneentered && <button onClick={()=>{
                                            setphoneentered(false);

                                        }}  style={{backgroundColor:'rgba(88,86,86,0.39)' , border:'1px solid white'}}>
                                        ویرایش/تغییر شماره
                                        </button>
                                    }




                                </Form>



                            )}


                        </Formik>

                    </div>

                </div>
            </div>

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

        </>
    )
}
export default Login;