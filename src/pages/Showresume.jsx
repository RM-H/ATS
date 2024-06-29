import {useNavigate, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";

import {baseurl, getUserinfo} from '../services/service.js'

import {loadingSelector, setloading, setuser} from "../slices/userSlice.js";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "../components/index.js";
import {Divider, Chip} from '@mui/material'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Showresume = () => {
    const {token} = useParams()


    const nav = useNavigate()

    const [data, setData] = useState(false)


    // checking to see if user had already logged in before
    useEffect(() => {


        if (token) {


            const getuser = async () => {


                const formdata = new FormData()
                formdata.append('token', token)
                const response = await getUserinfo(formdata)
                if (response.data.code == 1) {
                    console.log(response.data)
                    document.title = `روزمه ${response.data.user.name} ${response.data.user.family}`
                    setData(response.data)


                } else {


                    toast.warning(response.data.error)
                    nav('/')
                }
            }
            getuser().then()


        } else {
            toast.warning('توکن یافت نشد')
            nav('/')
        }


    }, []);

    let userdepartment
    if (data !== false) {
        let filtered = data.departemans.filter((dep) => {
            return dep.code == data.user.departemant
        })
        userdepartment = filtered[0].name
    }


    let content
    if (data !== false) {
        content = <div className='columns is-multiline   yekan-regular pringpage'>
            <div className='column is-12 '>
                <Divider sx={{
                    '&.MuiDivider-root::before': {
                        borderColor: '#1B95A2',

                    },
                    '&.MuiDivider-root::after': {
                        borderColor: '#1B95A2',

                    }
                }}>
                    <Chip label={<span className='has-text-weight-bold yekan-regular clrtwotext '>
                   اطلاعات کلی
                </span>}/>
                </Divider>

                <div className='columns'>
                    <div className='column is-5 ' style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img src={`${baseurl}/${data.user.avatar}`} alt=""
                             style={{maxWidth: '8rem', borderRadius: '50%'}}/>
                        <p className=' has-text-weight-bold'>
                            {data.user.name} {data.user.family}
                        </p>
                    </div>


                    <div className='column is-7 p-0 '>

                        <div className='columns my-auto' style={{height: '100%'}}>


                            <div className='column is-6'>
                                <p className='has-text-weight-bold clrtwotext'>
                                    اطلاعات تماس :

                                </p>

                                <p className=''>
                                    تلفن :
                                    {data.user.phone}

                                </p>


                                <p className=''>
                                    تلفن ثابت :
                                    {data.user.tell}

                                </p>

                                <p className=''>
                                    آدرس :
                                    {data.user.address}

                                </p>

                                <p className=''>
                                    ایمیل :
                                    {data.user.email}

                                </p>


                            </div>


                            <div className='column is-6 '>

                                <p className='has-text-weight-bold clrtwotext'>
                                    درباره {data.user.name} :
                                </p>


                                <p>
                                    {data.user.about}
                                </p>


                            </div>


                        </div>


                    </div>


                </div>


            </div>

            <div className='column is-12 '>

                <Divider sx={{
                    '&.MuiDivider-root::before': {
                        borderColor: '#1B95A2',

                    },
                    '&.MuiDivider-root::after': {
                        borderColor: '#1B95A2',

                    }
                }}>
                    <Chip label={<span className='has-text-weight-bold yekan-regular clrtwotext '>
                    تحصیلات
                </span>}/>
                </Divider>


                <div className='columns is-multiline has-text-centered'>
                    {
                        data.education4 && (
                            <div className='column is-6'>
                                <p className='has-text-weight-bold'>
                                    مقطع :
                                    دکتری
                                </p>

                                <p>
                                    رشته :
                                    {data.education4.major}

                                </p>

                                <p>
                                    دانشگاه :
                                    {data.education4.university}

                                </p>

                                <p>
                                    تاریخ شروع :
                                    {new Date(data.education4.start).toLocaleDateString('fa-IR')}

                                </p>

                                <p>
                                    تاریخ پایان :
                                    {new Date(data.education4.end).toLocaleDateString('fa-IR')}

                                </p>

                                {
                                    data.education4.studying && (
                                        <p>
                                            در حال تحصیل
                                        </p>
                                    )
                                }

                            </div>
                        )
                    }


                    {
                        data.education3 && (
                            <div className='column is-6'>
                                <p className='has-text-weight-bold'>
                                    مقطع :
                                    کارشناسی ارشد
                                </p>

                                <p>
                                    رشته :
                                    {data.education3.major}

                                </p>

                                <p>
                                    دانشگاه :
                                    {data.education3.university}

                                </p>

                                <p>
                                    تاریخ شروع :
                                    {new Date(data.education3.start).toLocaleDateString('fa-IR')}

                                </p>

                                <p>
                                    تاریخ پایان :
                                    {new Date(data.education3.end).toLocaleDateString('fa-IR')}

                                </p>

                                {
                                    data.education3.studying && (
                                        <p>
                                            در حال تحصیل
                                        </p>
                                    )
                                }

                            </div>
                        )
                    }


                    {
                        data.education2 && (
                            <div className='column is-6'>
                                <p className='has-text-weight-bold'>
                                    مقطع :
                                    کارشناسی
                                </p>

                                <p>
                                    رشته :
                                    {data.education2.major}

                                </p>

                                <p>
                                    دانشگاه :
                                    {data.education2.university}

                                </p>

                                <p>
                                    تاریخ شروع :
                                    {new Date(data.education2.start).toLocaleDateString('fa-IR')}

                                </p>

                                <p>
                                    تاریخ پایان :
                                    {new Date(data.education2.end).toLocaleDateString('fa-IR')}

                                </p>

                                {
                                    data.education2.studying && (
                                        <p>
                                            در حال تحصیل
                                        </p>
                                    )
                                }

                            </div>
                        )
                    }

                    {
                        data.education1 && (
                            <div className='column is-6'>
                                <p className='has-text-weight-bold'>
                                    مقطع :
                                    کاردانی
                                </p>

                                <p>
                                    رشته :
                                    {data.education1.major}

                                </p>

                                <p>
                                    دانشگاه :
                                    {data.education1.university}

                                </p>

                                <p>
                                    تاریخ شروع :
                                    {new Date(data.education1.start).toLocaleDateString('fa-IR')}

                                </p>

                                <p>
                                    تاریخ پایان :
                                    {new Date(data.education1.end).toLocaleDateString('fa-IR')}

                                </p>

                                {
                                    data.education1.studying && (
                                        <p>
                                            در حال تحصیل
                                        </p>
                                    )
                                }

                            </div>
                        )
                    }


                </div>
            </div>

            <div className='column is-12 '>
                <Divider sx={{
                    '&.MuiDivider-root::before': {
                        borderColor: '#1B95A2',

                    },
                    '&.MuiDivider-root::after': {
                        borderColor: '#1B95A2',

                    }
                }}>
                    <Chip label={<span className='has-text-weight-bold yekan-regular clrtwotext '>
                    سوابق کاری
                </span>}/>
                </Divider>


                <TableContainer>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='yekan-regular has-text-weight-bold'>نام محل کار</TableCell>
                                <TableCell className='yekan-regular has-text-weight-bold' align="right">شروع</TableCell>
                                <TableCell className='yekan-regular has-text-weight-bold' align="right">سمت</TableCell>
                                <TableCell className='yekan-regular has-text-weight-bold' align="right">حقوق</TableCell>
                                <TableCell className='yekan-regular has-text-weight-bold' align="right">تاریخ
                                    پایان</TableCell>
                                <TableCell className='yekan-regular has-text-weight-bold'
                                           align="right">وضعیت</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.works.map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell className='yekan-regular '>{item.company}</TableCell>
                                            <TableCell
                                                className='yekan-regular '>{new Date(item.start_date).toLocaleDateString('fa-IR')}</TableCell>


                                            <TableCell className='yekan-regular '>{item.jobtitle}</TableCell>
                                            <TableCell className='yekan-regular '>{item.salary}</TableCell>
                                            <TableCell
                                                className='yekan-regular '>{new Date(item.end_date).toLocaleDateString('fa-IR')}</TableCell>

                                            <TableCell
                                                className='yekan-regular '>{item.working ? 'مشغول به کار' : 'پایان همکاری'}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }

                        </TableBody>
                    </Table>
                </TableContainer>


            </div>

            <div className='column is-12 pb-4'>
                <Divider sx={{
                    '&.MuiDivider-root::before': {
                        borderColor: '#1B95A2',

                    },
                    '&.MuiDivider-root::after': {
                        borderColor: '#1B95A2',

                    }
                }}>
                    <Chip label={<span className='has-text-weight-bold yekan-regular clrtwotext '>
                    سوالات تخصصی
                </span>}/>
                </Divider>


                <TableContainer>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='yekan-regular has-text-weight-bold'>سوال</TableCell>
                                <TableCell className='yekan-regular has-text-weight-bold' align="right">میزان
                                    مهرات</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.questions.map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell className='yekan-regular '>{item.question}</TableCell>


                                            <TableCell className='yekan-regular '>%{item.value * 20}</TableCell>

                                        </TableRow>
                                    )
                                })
                            }

                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

        </div>
    } else {
        content = <Spinner/>
    }


    return (
        <>
            {content}


        </>
    )
}
export default Showresume