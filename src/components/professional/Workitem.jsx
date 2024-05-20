import Grid from "@mui/material/Unstable_Grid2";
import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from "@mui/material";
import {ArrowDownward,DeleteOutlined} from "@mui/icons-material";
import {Field, Form, Formik} from "formik";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {useState} from "react";


const Workitem = ({item,fields,setfields}) => {

    const [date, setDate] = useState(new Date().toLocaleDateString('fa-IR'))




    let init =
        {
            name: item,
            jobtitle:'',
            salary: 0
        }





        const handleitemdelete = () => {
          const filtered = fields.filter((i)=>(
              i !==item
          ))


          setfields(filtered);
        }


  return(
      <>

          <Grid  xs={12}>
              <Accordion defaultExpanded className='shadowone' sx={{p:3}}>
                  <AccordionSummary
                      expandIcon={<ArrowDownward/>}
                      aria-controls="panel1-content"
                      id="panel1-header"
                  >
                      <Typography variant='h5' className='yekan-regular'>
                          {item}
                      </Typography>


                      <Button onClick={handleitemdelete} variant="outlined" color="error" sx={{mr:'auto' , ml:9}}>
                         <DeleteOutlined/>
                      </Button>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Formik
                          initialValues={init}




                          onSubmit={values => {
                              // same shape as initial values
                              console.log(values ,date);
                          }}
                      >

                          <Form>


                              <Grid container spacing={4}>


                                  <Grid xs={6}>
                                      <label className="label">نام محل کار :</label>
                                      <Field  className="input is-info" name='name' />
                                  </Grid>

                                  <Grid xs={6}>
                                      <label className="label">عنوان شغلی/پست :</label>
                                      <Field className="input is-info" name='jobtitle' />
                                  </Grid>

                                  <Grid xs={4}>
                                      <label className="label">تاریخ شروع همکاری :</label>
                                      <DatePicker  style={{
                                          fontFamily: 'yekan-reg',
                                          fontSize: '1rem',
                                          padding: '1rem',
                                          textAlign: 'center'
                                      }} className='yekan-regular' onChange={setDate} calendar={persian}   locale={persian_fa}

                                      />
                                  </Grid>
                                  <Grid xs={4}>
                                      <label className="label">تاریخ پایان همکاری :</label>
                                      <DatePicker  style={{
                                          fontFamily: 'yekan-reg',
                                          fontSize: '1rem',
                                          padding: '1rem',
                                          textAlign: 'center'
                                      }} className='yekan-regular' onChange={setDate} calendar={persian}   locale={persian_fa}

                                      />
                                  </Grid>
                                  <Grid xs={4}>
                                      <label className="label">حقوق :</label>
                                      <Field  className="input is-info" name='salary' />
                                  </Grid>


                              </Grid>




                              <button type="submit">Submit</button>
                          </Form>

                      </Formik>



                  </AccordionDetails>

              </Accordion>
          </Grid>


      </>
  )
}
export default Workitem