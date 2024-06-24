import Grid from "@mui/material/Unstable_Grid2";
import {useState} from 'react'
import {
    Typography,
    Modal,
    Button,
    Divider,
    Box

} from "@mui/material";
import {useSelector} from "react-redux";
import {userselector} from "../slices/userSlice.js";


const Status = () => {

    const user = useSelector(userselector)


    // handling modal show
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Grid container sx={{

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Grid className='shadowone' xs={9} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '20rem',
                    borderRadius: '0.6rem',
                    backgroundColor: 'rgba(9,9,9,0.6)',
                    backdropFilter: 'blur(0.1rem)'
                }}>
                    <Typography component='p' variant='h4' className='yekan-regular clrseventext'
                                sx={{textAlign: 'center'}}>
                        رزومه شما در فلان وضعیت میباشد
                    </Typography>


                    <Button onClick={handleOpen} className='yekan-regular' variant='contained'>
                        نمایش رزومه
                    </Button>



                </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Grid container sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        bgcolor: 'background.paper',
                        maxHeight: '40rem',
                        overflow: 'auto',

                        boxShadow: 24,
                        p: 3
                    }}>


                        <Grid xs={6}>
                            <Typography variant='h6' className='yekan-regular' component='h3'>
                                مشخصات فردی :
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='overline'>
                                نام :
                                {user.user.name}
                            </Typography>

                            <Typography component='p' className='yekan-regular' variant='overline'>
                                نام خانوادگی :

                                {user.user.family}
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='overline'>
                                تاریخ تولد :

                                {user.user.birth}
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='overline'>
                                ایمیل :

                                {user.user.email}
                            </Typography>

                            <Typography component='p' className='yekan-regular' variant='overline'>
                                تاریخ تولد :

                                {user.user.birth}
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='overline'>
                                تاریخ ثبت نام :

                                {new Date(user.user.register_date * 1000).toLocaleDateString('fa-IR')}
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='overline'>
                                آدرس :

                                {user.user.address}
                            </Typography>


                            <Divider/>


                        </Grid>


                        <Grid xs={6}>
                            <Typography variant='h6' className='yekan-regular' component='h3'>
                                اطلاعات تحصیلی :
                            </Typography>


                            {
                                user.education1 && (
                                    <>
                                        <Box sx={{width: '50%', display: 'inline-block', my: 1}}>
                                            <Typography component='p' className='yekan-regular' variant='body2'>
                                                مقطع :
                                                کاردانی
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                رشته :
                                                {user.education1.major}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                دانشگاه :
                                                {user.education1.university}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                تاریخ شروع :
                                                {new Date(user.education1.start).toLocaleDateString('fa-IR')}
                                            </Typography>


                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                تاریخ پایان :
                                                {new Date(user.education1.end).toLocaleDateString('fa-IR')}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                در حال تحصیل :
                                                {user.education1.studying ? 'بله' : 'نخیر'}
                                            </Typography>


                                        </Box>


                                    </>
                                )
                            }

                            {
                                user.education2 && (
                                    <>


                                        <Box sx={{width: '50%', display: 'inline-block', my: 1}}>
                                            <Typography component='p' className='yekan-regular' variant='body2'>
                                                مقطع :
                                                کارشناسی
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                رشته :
                                                {user.education2.major}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                دانشگاه :
                                                {user.education2.university}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                تاریخ شروع :
                                                {new Date(user.education2.start).toLocaleDateString('fa-IR')}
                                            </Typography>


                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                تاریخ پایان :
                                                {new Date(user.education2.end).toLocaleDateString('fa-IR')}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                در حال تحصیل :
                                                {user.education2.studying ? 'بله' : 'نخیر'}
                                            </Typography>


                                        </Box>


                                    </>
                                )
                            }


                            {
                                user.education3 && (
                                    <>

                                        <Box sx={{width: '50%', display: 'inline-block', my: 1}}>
                                            <Typography component='p' className='yekan-regular' variant='body2'>
                                                مقطع :
                                                کارشناسی ارشد
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                رشته :
                                                {user.education3.major}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                دانشگاه :
                                                {user.education3.university}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                تاریخ شروع :
                                                {new Date(user.education3.start).toLocaleDateString('fa-IR')}
                                            </Typography>


                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                تاریخ پایان :
                                                {new Date(user.education3.end).toLocaleDateString('fa-IR')}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                در حال تحصیل :
                                                {user.education3.studying ? 'بله' : 'نخیر'}
                                            </Typography>


                                        </Box>


                                    </>
                                )
                            }


                            {
                                user.education4 && (
                                    <>


                                        <Box sx={{width: '50%', display: 'inline-block', my: 1}}>
                                            <Typography component='p' className='yekan-regular' variant='body2'>
                                                مقطع :
                                                دکتری
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                رشته :
                                                {user.education4.major}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                دانشگاه :
                                                {user.education4.university}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                تاریخ شروع :
                                                {new Date(user.education4.start).toLocaleDateString('fa-IR')}
                                            </Typography>


                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                تاریخ پایان :
                                                {new Date(user.education4.end).toLocaleDateString('fa-IR')}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                در حال تحصیل :
                                                {user.education4.studying ? 'بله' : 'نخیر'}
                                            </Typography>


                                        </Box>


                                    </>
                                )
                            }


                            <Divider/>

                        </Grid>


                        <Grid xs={6}>
                            <Typography variant='h6' className='yekan-regular' component='h3'>
                                سوابق کاری :
                            </Typography>

                            {
                                user.works && user.works.map((item , index)=>(
                                    <Box key={index} sx={{width: '50%', display: 'inline-block', my: 1}}>

                                        <Typography component='p' className='yekan-regular' variant='body2'>
                                            {item.company}
                                        </Typography>

                                        <Typography component='p' className='yekan-regular' variant='overline'>
                                            عنوان شغلی :
                                            {item.title}
                                        </Typography>

                                        <Typography component='p' className='yekan-regular' variant='overline'>
                                            تاریخ شروع :
                                            {new Date(item.start_date).toLocaleDateString('fa-IR')}
                                        </Typography>
                                        <Typography component='p' className='yekan-regular' variant='overline'>
                                            تاریخ پایان :
                                            {new Date(item.end_date).toLocaleDateString('fa-IR')}
                                        </Typography>

                                        <Typography component='p' className='yekan-regular' variant='overline'>
                                            حقوق دریافتی :
                                            {item.salary}
                                        </Typography>




                                    </Box>




                                ))
                            }




                            <Divider/>


                        </Grid>


                        <Grid xs={6}>
                            <Typography variant='h6' className='yekan-regular' component='h3'>
                                مهارت ها :
                            </Typography>

                            {
                                user.questions.map((item) => {
                                    return (
                                        <>
                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                {item.question}
                                            </Typography>

                                            <Typography component='p' className='yekan-regular' variant='overline'>
                                                %{item.value * 20}
                                            </Typography>

                                        </>
                                    )
                                })
                            }


                            <Divider/>


                        </Grid>


                    </Grid>


                </Modal>


            </Grid>


        </>
    )
}
export default Status;