import {useFormik} from "formik";
import * as yup from "yup";
import Grid from "@mui/material/Unstable_Grid2";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button, Checkbox,
    FormControl, FormControlLabel,
    MenuItem,
    Select,
    TextField, Typography
} from "@mui/material";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {useState} from "react";
import {ArrowDownward} from '@mui/icons-material'
import {setstep} from "../slices/userSlice.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


const Education = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()

    // controlling the on going education


    const [kardani, setkardani] = useState(false)
    const [karshenasi, setkarshenasi] = useState(false)
    const [arshad, setarshad] = useState(false)
    const [phd, setphd] = useState(false)

    const [date, setDate] = useState(new Date().toLocaleDateString('fa-IR'))
    const handlesubmit = (val, d) => {
        console.table(val)
        // console.log(d.format())
        dispatch(setstep(3))
        nav('/ats/professional')
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
            <Grid container className='margins' sx={{'& .MuiInputBase-root': {fontFamily: 'yekan-reg'}}}>
                <Grid xs={12}>


                    <form onSubmit={formik.handleSubmit}>
                        <Grid container columnSpacing={3} rowSpacing={5}>
                            <Grid xs={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDownward/>}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography variant='h5' className='yekan-regular'>
                                            مقطع کاردانی
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={4}>
                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> رشته  :  </span>
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


                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> گرایش  :  </span>
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

                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> دانشگاه  :  </span>
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

                                            <Grid xs={4} sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-around'
                                            }}>
                                                <span className='yekan-regular'> تاریخ شروع :  </span>


                                                <DatePicker style={{
                                                    fontFamily: 'yekan-reg',
                                                    fontSize: '1rem',
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                }} className='yekan-regular' onChange={setDate} calendar={persian}
                                                            locale={persian_fa}
                                                            value={date}/>
                                            </Grid>

                                            <Grid xs={4} sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-around'
                                            }}>
                                                <span className='yekan-regular'> تاریخ پایان :  </span>


                                                <DatePicker disabled={kardani} style={{
                                                    fontFamily: 'yekan-reg',
                                                    fontSize: '1rem',
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                }} className='yekan-regular' onChange={setDate} calendar={persian}
                                                            locale={persian_fa}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox onChange={() => setkardani((prev) => !prev)}/>}
                                                    label={<span className='yekan-regular'>مشغول به تحصیل </span>}/>
                                            </Grid>

                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> معدل  :  </span>
                                                    <TextField
                                                        id="firstName"
                                                        name='firstName'
                                                        disabled={kardani}

                                                        value={formik.values.firstName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}

                                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}


                                                        helperText={formik.touched.firstName && formik.errors.firstName}

                                                    />


                                                </FormControl>
                                            </Grid>


                                        </Grid>


                                    </AccordionDetails>
                                </Accordion>
                            </Grid>

                            <Grid xs={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDownward/>}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography variant='h5' className='yekan-regular'>
                                            مقطع کارشناسی
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={4}>
                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> رشته  :  </span>
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


                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> گرایش  :  </span>
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

                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> دانشگاه  :  </span>
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

                                            <Grid xs={4} sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-around'
                                            }}>
                                                <span className='yekan-regular'> تاریخ شروع :  </span>


                                                <DatePicker style={{
                                                    fontFamily: 'yekan-reg',
                                                    fontSize: '1rem',
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                }} className='yekan-regular' onChange={setDate} calendar={persian}
                                                            locale={persian_fa}
                                                            value={date}/>
                                            </Grid>

                                            <Grid xs={4} sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-around'
                                            }}>
                                                <span className='yekan-regular'> تاریخ پایان :  </span>


                                                <DatePicker disabled={karshenasi} style={{
                                                    fontFamily: 'yekan-reg',
                                                    fontSize: '1rem',
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                }} className='yekan-regular' onChange={setDate} calendar={persian}
                                                            locale={persian_fa}
                                                />
                                                <FormControlLabel control={<Checkbox
                                                    onChange={() => setkarshenasi((prev) => !prev)}/>} label={<span
                                                    className='yekan-regular'>مشغول به تحصیل </span>}/>
                                            </Grid>

                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> معدل  :  </span>
                                                    <TextField
                                                        id="firstName"
                                                        name='firstName'
                                                        disabled={karshenasi}

                                                        value={formik.values.firstName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}

                                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}


                                                        helperText={formik.touched.firstName && formik.errors.firstName}

                                                    />


                                                </FormControl>
                                            </Grid>


                                        </Grid>


                                    </AccordionDetails>
                                </Accordion>
                            </Grid>

                            <Grid xs={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDownward/>}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography variant='h5' className='yekan-regular'>
                                            مقطع کارشناسی ارشد
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={4}>
                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> رشته  :  </span>
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


                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> گرایش  :  </span>
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

                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> دانشگاه  :  </span>
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

                                            <Grid xs={4} sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-around'
                                            }}>
                                                <span className='yekan-regular'> تاریخ شروع :  </span>


                                                <DatePicker style={{
                                                    fontFamily: 'yekan-reg',
                                                    fontSize: '1rem',
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                }} className='yekan-regular' onChange={setDate} calendar={persian}
                                                            locale={persian_fa}
                                                            value={date}/>
                                            </Grid>

                                            <Grid xs={4} sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-around'
                                            }}>
                                                <span className='yekan-regular'> تاریخ پایان :  </span>


                                                <DatePicker disabled={arshad} style={{
                                                    fontFamily: 'yekan-reg',
                                                    fontSize: '1rem',
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                }} className='yekan-regular' onChange={setDate} calendar={persian}
                                                            locale={persian_fa}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox onChange={() => setarshad((prev) => !prev)}/>}
                                                    label={<span className='yekan-regular'>مشغول به تحصیل </span>}/>
                                            </Grid>

                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> معدل  :  </span>
                                                    <TextField
                                                        id="firstName"
                                                        name='firstName'
                                                        disabled={arshad}

                                                        value={formik.values.firstName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}

                                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}


                                                        helperText={formik.touched.firstName && formik.errors.firstName}

                                                    />


                                                </FormControl>
                                            </Grid>


                                        </Grid>


                                    </AccordionDetails>
                                </Accordion>
                            </Grid>

                            <Grid xs={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDownward/>}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography variant='h5' className='yekan-regular'>
                                            مقطع دکتری
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={4}>
                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> رشته  :  </span>
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


                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> گرایش  :  </span>
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

                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> دانشگاه  :  </span>
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

                                            <Grid xs={4} sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-around'
                                            }}>
                                                <span className='yekan-regular'> تاریخ شروع :  </span>


                                                <DatePicker style={{
                                                    fontFamily: 'yekan-reg',
                                                    fontSize: '1rem',
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                }} className='yekan-regular' onChange={setDate} calendar={persian}
                                                            locale={persian_fa}
                                                            value={date}/>
                                            </Grid>

                                            <Grid xs={4} sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-around'
                                            }}>
                                                <span className='yekan-regular'> تاریخ پایان :  </span>


                                                <DatePicker disabled={phd} style={{
                                                    fontFamily: 'yekan-reg',
                                                    fontSize: '1rem',
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                }} className='yekan-regular' onChange={setDate} calendar={persian}
                                                            locale={persian_fa}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox onChange={() => setphd((prev) => !prev)}/>}
                                                    label={<span className='yekan-regular'>مشغول به تحصیل </span>}/>
                                            </Grid>

                                            <Grid xs={4}>
                                                <FormControl className='w100' variant="outlined">

                                                    <span className='yekan-regular'> معدل  :  </span>
                                                    <TextField
                                                        id="firstName"
                                                        name='firstName'
                                                        disabled={phd}

                                                        value={formik.values.firstName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}

                                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}


                                                        helperText={formik.touched.firstName && formik.errors.firstName}

                                                    />


                                                </FormControl>
                                            </Grid>


                                        </Grid>


                                    </AccordionDetails>
                                </Accordion>
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
export default Education;