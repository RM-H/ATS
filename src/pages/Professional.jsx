import * as yup from "yup";
import {Field, Form, Formik, useFormik} from "formik";
import Grid from "@mui/material/Unstable_Grid2";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Button, Checkbox,
    FormControl,
    FormControlLabel,
    TextField,
    Typography
} from "@mui/material";

import {useState} from "react";
import {Workitem} from '../components/index.js'


const Professional = () => {


    // adding a new form for professional history
    const [fields, setFileds] = useState([])


    const [kardani, setkardani] = useState(false)
    const [date, setDate] = useState(new Date().toLocaleDateString('fa-IR'))


    const handlesubmit = (val, d) => {
        console.table(val)
        // console.log(d.format())
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

        },
    validationSchema: validationSchema,
        onSubmit
:
    (values) => {
        handlesubmit(values, date)
    },
})






    const addnewfield = useFormik({
        initialValues: {
            title: '',

        },
        validationSchema: yup.object({

            title: yup.string().max(70, 'نام بصورت صحیح وارد نشده').required('ضروری'),


        }),
        onSubmit: (values, actions) => {
            handleadd(values);
            actions.resetForm()

        },
    });
    const handleadd = (val) => {


        console.log(val)

        let copy = [...fields, val.title];

        setFileds(copy)


    }

    let content


    if (fields !== false) {

        content = fields.map((item, index) => {








                return (
                   <Workitem item={item} key={index} fields={fields} setfields={setFileds} />

                )
            }
        )
    }


    return (
        <>


            <Grid container className='margins' sx={{'& .MuiInputBase-root' : {fontFamily:'yekan-reg'}}}>
                <Grid xs={12}>


                    <form onSubmit={formik.handleSubmit}>
                        <Grid container columnSpacing={3} rowSpacing={5}>





                            <Grid xs={12} sx={{textAlign: 'center'}}>
                                <Button className='yekan-regular' type='submit' variant="contained">ادامه</Button>
                            </Grid>


                        </Grid>
                    </form>


                    {
                        content
                    }


                    <form onSubmit={addnewfield.handleSubmit}>


                        <FormControl className='w100' variant="outlined">

                            <span className='yekan-regular'> عنوان شرکت یا محل کار  :  </span>
                            <TextField
                                id="title"
                                name='title'

                                value={addnewfield.values.title}
                                onChange={addnewfield.handleChange}
                                onBlur={addnewfield.handleBlur}

                                error={addnewfield.touched.title && Boolean(addnewfield.errors.title)}


                                helperText={addnewfield.touched.title && addnewfield.errors.title}

                            />


                        </FormControl>
                        <Button className='yekan-regular' type='submit' variant="contained">+</Button>
                    </form>


                </Grid>


            </Grid>


        </>
    )
}
export default Professional;