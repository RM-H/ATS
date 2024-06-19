import Grid from "@mui/material/Unstable_Grid2";
import {Slider,Typography,Divider} from "@mui/material";
import {useDispatch} from "react-redux";
import {addvaluetoskill} from '../../slices/userSlice.js'



const Skillquestionitem = ({question}) => {
    const dispatch = useDispatch()

    const marks = [
        {
            value: 0,
            label: 'مهارت ندارم ',
        },
        {
            value: 1,
            label: 'مهارت کم',
        },
        {
            value: 2,
            label: 'مهارت نسبی',
        },
        {
            value: 3,
            label: 'مهارت متوسط',
        },
        {
            value: 4,
            label: 'مهارت زیاد',
        },
        {
            value: 5,
            label: 'تسلط کامل',
        },
    ];
    return (
        <>
            <Grid xs={12} sx={{my:3}}>

                <Typography component='p' variant='h6' className='yekan-regular'>
                    {question}
                </Typography>


                <Slider
                    aria-label="Restricted values"
                    min={0}
                    max={5}
                    defaultValue={3}
                    // getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                    sx={{
                        mt:3,
                        '& .MuiSlider-markLabel': {
                            fontFamily: 'yekan-reg'
                        } ,
                        '& .MuiSlider-thumb': {
                            backgroundColor:'#4FE8E3'
                        } ,
                        '&.MuiSlider-colorPrimary':{
                            color: ' #1B95A2'
                        }
                    }}
                    onChange={(e)=>dispatch(addvaluetoskill({q:question,v:e.target.value}))}

                />



                <Divider sx={{mt:6}}/>

            </Grid>




        </>
    )
}
export default Skillquestionitem;