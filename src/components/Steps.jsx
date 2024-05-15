import Grid from '@mui/material/Unstable_Grid2'
import {LinearProgress} from '@mui/material'
const Steps = () => {
  return(

      <>
          <Grid container className='margins' sx={{pt:12}}>
              <Grid xs={12} dir={'rtl'} >
                  <LinearProgress variant='determinate' color='success' value={30} sx={{transform:'rotateY(180deg)' , '&.MuiLinearProgress-root':{
                      height:'0.6rem'
                      } , '& .MuiLinearProgress-bar ':{
                      backgroundColor:'#4FE8E3'
                      }}} />
              </Grid>
          </Grid>


      </>
  )
}
export default Steps;