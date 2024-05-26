import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useState} from 'react'
import {Spinner} from '../components/index.js'



const Login = () => {
    const [loading, setLoading] = useState(false)



    const HandleLogin = () => {

    }


    return (
        <>

            <div

                 style={{width: "100wv", height: '100vh' , display:'flex', justifyContent:'center' , alignItems:'center' , backgroundImage:'url(/assets/images/wallpaper.jpg)' ,transition:'all 0.5s', backgroundSize:'cover' , backgroundRepeat:'no-repeat'}}>








                <div className="main-login " style={{
                    backgroundColor: 'rgba(9,9,9,0.6)',
                    backdropFilter: 'blur(0.1rem)'
                }}>
                    <input type="checkbox" id="chk" aria-hidden="true"/>

                    <div className="signup is-size-5 has-text-centered yekan-regular">
                        <h2>
                           به سامانه رهگیری استخدام (ATS) افق ایرانیان خوش آمدید.
                        </h2>
                        <Spinner/>
                    </div>

                    <div className="login">


                        <Formik initialValues={{username: '', password: ''}} validationSchema={Yup.object().shape({

                            username: Yup.string().required('ضروری'),
                            password: Yup.string().required('ضروری')

                        })} onSubmit={(values) => HandleLogin(values)}>
                            {({errors, touched}) => (
                                <Form className='has-text-centered'>


                                    <label htmlFor="chk" aria-hidden="true">ورود</label>
                                    <Field className='yekan' type="text" id="username" name="username"
                                           placeholder="نام کاربری"/>
                                    <ErrorMessage component='span' className='has-text-danger yekan mx-auto'
                                                  name='email'/>
                                    <Field className='yekan' type="Password" id="password" name="password"
                                           placeholder="رمز عبور"

                                    />
                                    <ErrorMessage component='span' className='has-text-danger yekan' name='pswd'/>
                                    <button disabled={loading} className='my-4' type='submit'>
                                        {
                                            loading ? <Spinner/> : 'ورود'
                                        }

                                    </button>




                                </Form>



                            )}


                        </Formik>

                    </div>

                </div>
            </div>

        </>
    )
}
export default Login;