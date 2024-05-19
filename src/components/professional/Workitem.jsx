import Grid from "@mui/material/Unstable_Grid2";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ArrowDownward} from "@mui/icons-material";
import {Field, Form, Formik} from "formik";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {useState} from "react";


const Workitem = ({item}) => {

    const [date, setDate] = useState(new Date().toLocaleDateString('fa-IR'))




    let init =
        {
            name: item,
            title:'',
            tarikh: ''
        }





  return(
      <>

          <Grid  xs={12}>
              <Accordion defaultExpanded>
                  <AccordionSummary
                      expandIcon={<ArrowDownward/>}
                      aria-controls="panel1-content"
                      id="panel1-header"
                  >
                      <Typography variant='h5' className='yekan-regular'>
                          {item}
                      </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Formik
                          initialValues={init}




                          onSubmit={values => {
                              // same shape as initial values
                              console.log(values);
                          }}
                      >

                          <Form>


                              <Grid container spacing={4}>

                                  <Grid xs={12}>
                                      <DatePicker  style={{
                                          fontFamily: 'yekan-reg',
                                          fontSize: '1rem',
                                          padding: '1rem',
                                          textAlign: 'center'
                                      }} className='yekan-regular' onChange={setDate} calendar={persian}

                                      />
                                  </Grid>

                                  <Grid xs={12}>
                                      <Field name='title' />
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