import Grid from '@mui/material/Unstable_Grid2'
import {Typography, FormControlLabel, FormGroup, LinearProgress , IconButton} from '@mui/material'
import {SchoolOutlined , School , AccountBox , PortraitOutlined , Work , WorkOutline , Call , CallOutlined , Fingerprint } from '@mui/icons-material'

import {useSelector} from 'react-redux'
import {stepselector} from '../slices/userSlice.js'

import {useNavigate} from 'react-router-dom'
const Steps = () => {

    const nav = useNavigate()
    const step = useSelector(stepselector)

  return(

      <>
          <Grid container className='margins' sx={{pt:12}}>

              <Grid xs={9} >
                  <LinearProgress className='shadowone' variant='determinate' color='success' value={step*25} sx={{transform:'rotateY(180deg)' , '&.MuiLinearProgress-root':{
                      height:'0.9rem' ,
                          backgroundColor: 'rgba(115,115,117,0.44)'
                      } , '& .MuiLinearProgress-bar ':{
                          background: '#4FE8E3'
                      }}} />


                  <Typography className='yekan-regular' variant='h5' sx={{mt:2}}>

                      شما اکنون در مرحله فلان هستید
                  </Typography>


              </Grid>
              <Grid xs={3} >

                  <FormGroup  sx={{flexDirection:'row' , justifyContent:'space-between'}}>
                      <FormControlLabel disabled={step <0}  defaultChecked   control={<IconButton onClick={()=>nav('/')} color='success'>
                      <Fingerprint/>
                      </IconButton> } label={<span className='yekan-regular'>اطلاعات فردی </span>} />


                      <FormControlLabel disabled={step <1} defaultChecked   control={<IconButton color='success'>
                          <School/>
                      </IconButton> } label={<span className='yekan-regular'>اطلاعات تحصیلی </span>} />


                      <FormControlLabel disabled defaultChecked   control={<IconButton color='success'>
                          <Work/>
                      </IconButton> } label={<span className='yekan-regular'>سوابق کاری </span>} />
                      <FormControlLabel disabled defaultChecked   control={<IconButton color='success'>
                          <Call/>
                      </IconButton> } label={<span className='yekan-regular'>اطلاعات تماس </span>} />

                  </FormGroup>

              </Grid>
          </Grid>


      </>
  )
}
export default Steps;