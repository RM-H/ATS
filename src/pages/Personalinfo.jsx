import Grid from '@mui/material/Unstable_Grid2'
import { useFormik} from "formik";
import {
    Button,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Step, StepButton,
    Stepper,
    TextField
} from "@mui/material";

import * as yup from "yup";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {useState} from "react";
import { useDispatch} from 'react-redux'
import {setstep} from '../slices/userSlice.js'
import {useNavigate} from 'react-router-dom'


const Personalinfo = () => {

    const dispatch = useDispatch()
    const nav = useNavigate()

    // birthday
    const [date, setDate] = useState(new Date().toLocaleDateString('fa-IR'))
    const handlesubmit = (val, d) => {
        dispatch(setstep(2))
        nav('/education')
       console.table(val)
        console.log(d.format())
    }
    const validationSchema = yup.object({

        firstName: yup.string().max(25, 'نام بصورت صحیح وارد نشده').required('ضروری'),
        lastName: yup.string().max(40, ' باید کوتاه تر باشد').required('ضروری'),

        email: yup.string().email().required('ضروری'),
        service: yup.number().required('ضروری'),
        maritalStatus: yup.number().required('ضروری'),
        nationality: yup.string().max(50, ' باید کوتاه تر باشد').required('ضروری'),

        about: yup.string().max(500, ' باید کوتاه تر باشد').required('ضروری'),
        address: yup.string().max(500, ' باید کوتاه تر باشد').required('ضروری'),
        tel: yup.string().matches(/^[0-9]+$/, 'فقط عدد').length(11, 'شماره درست وارد نشده است').required('ضروری')

    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            service: '',
            maritalStatus: '',
            nationality: '',
            about: '',
            address: '',
            tel: ''
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            handlesubmit(values, date)
        },
    });


    return (
        <>
            <Grid container className='margins'>
                <Grid xs={12}>


                    <form onSubmit={formik.handleSubmit} className='yekan-regular'>
                        <Grid container columnSpacing={3} rowSpacing={5} sx={{'& .MuiInputBase-root' : {fontFamily:'yekan-reg'}}}>
                            <Grid xs={6}>
                                <FormControl className='w100 yekan-regular' variant="outlined" >

                                    <span className='yekan-regular'> نام  :  </span>
                                    <TextField

                                        id="firstName"
                                        name='firstName'

                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                         error={formik.touched.firstName && Boolean(formik.errors.firstName)}


                                        helperText={formik.touched.firstName && formik.errors.firstName}

                                    />




                                </FormControl>
                            </Grid>

                            <Grid xs={6}>
                                <FormControl className='w100' variant="outlined">

                                    <span className='yekan-regular'> نام خانوادگی :  </span>
                                    <TextField
                                        id="lastName"
                                        name='lastName'
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}


                                        helperText={formik.touched.lastName && formik.errors.lastName}

                                    />


                                </FormControl>
                            </Grid>


                            <Grid xs={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>


                                <span className='yekan-regular'> تاریخ تولد :  </span>


                                <DatePicker style={{
                                    fontFamily: 'yekan-reg',
                                    fontSize: '1rem',
                                    padding: '1rem',
                                    textAlign: 'center'
                                }} className='yekan-regular' onChange={setDate} calendar={persian}
                                            locale={persian_fa}
                                            value={date}/>


                            </Grid>

                            <Grid xs={4}>
                                <FormControl className='w100' variant="outlined">

                                    <span className='yekan-regular'> شماره ثابت :  </span>
                                    <TextField
                                        id="tel"
                                        name='tel'
                                        value={formik.values.tel}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                        error={formik.touched.tel && Boolean(formik.errors.tel)}


                                        helperText={formik.touched.tel && formik.errors.tel}

                                    />


                                </FormControl>
                            </Grid>

                            <Grid xs={4}>
                                <FormControl className='w100' variant="outlined">

                                    <span className='yekan-regular'> ایمیل :  </span>
                                    <TextField
                                        id="email"
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                        error={formik.touched.email && Boolean(formik.errors.email)}


                                        helperText={formik.touched.email && formik.errors.email}


                                    />


                                </FormControl>
                            </Grid>

                            <Grid xs={12}>
                                <FormControl className='w100' variant="outlined">

                                    <span className='yekan-regular'> درباره من :  </span>
                                    <TextField
                                        id="about"
                                        name='about'
                                        multiline
                                        rows={4}
                                        value={formik.values.about}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                        error={formik.touched.about && Boolean(formik.errors.about)}


                                        helperText={formik.touched.about && formik.errors.about}

                                    />


                                </FormControl>
                            </Grid>

                            <Grid xs={12}>
                                <FormControl className='w100' variant="outlined">

                                    <span className='yekan-regular'> آدرس :  </span>
                                    <TextField
                                        id="address"
                                        name='address'
                                        multiline
                                        rows={2}
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                        error={formik.touched.address && Boolean(formik.errors.address)}


                                        helperText={formik.touched.address && formik.errors.address}

                                    />


                                </FormControl>
                            </Grid>

                            <Grid xs={4}>
                                <FormControl className='w100' variant="outlined">

                                    <span className='yekan-regular'> ملیت :  </span>
                                    <TextField
                                        id="nationality"
                                        name='nationality'

                                        value={formik.values.nationality}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                        error={formik.touched.nationality && Boolean(formik.errors.nationality)}


                                        helperText={formik.touched.nationality && formik.errors.nationality}

                                    />


                                </FormControl>
                            </Grid>

                            <Grid xs={4}>
                                <FormControl className='w100' variant="standard">

                                    <span className='yekan-regular'> وضعیت تاهل :  </span>
                                    <Select
                                        id="maritalStatus"
                                        name='maritalStatus'

                                        value={formik.values.martialStatus}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                        error={formik.touched.martialStatus && Boolean(formik.errors.martialStatus)}


                                        helperText={formik.touched.martialStatus && formik.errors.martialStatus}
                                    >
                                        <MenuItem className='yekan-regular' value="">
                                            <em>انتخاب کنید</em>
                                        </MenuItem>
                                        <MenuItem className='yekan-regular' value={10}>مجرد</MenuItem>
                                        <MenuItem className='yekan-regular' value={20}>متاهل</MenuItem>

                                    </Select>


                                </FormControl>
                            </Grid>

                            <Grid xs={4}>
                                <FormControl className='w100' variant="standard">

                                    <span className='yekan-regular'> وضعیت نظام وظیفه :  </span>
                                    <Select
                                        id="service"
                                        name='service'

                                        value={formik.values.service}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                        error={formik.touched.service && Boolean(formik.errors.service)}


                                        helperText={formik.touched.service && formik.errors.service}
                                    >
                                        <MenuItem className='yekan-regular' value="">
                                            <em>انتخاب کنید</em>
                                        </MenuItem>
                                        <MenuItem className='yekan-regular' value={10}> پایان خدمت / معافیت
                                            دائم</MenuItem>
                                        <MenuItem className='yekan-regular' value={20}>معافیت تحصیلی/موقت</MenuItem>


                                    </Select>


                                </FormControl>
                            </Grid>

                            <Grid xs={12} sx={{textAlign: 'center'}}>
                                <Button className='yekan-regular' type='submit' variant="contained">ادامه</Button>
                            </Grid>


                        </Grid>
                    </form>

                </Grid>


            </Grid>


        </>
    )
}
export default Personalinfo;