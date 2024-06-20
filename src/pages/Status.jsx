import Grid from "@mui/material/Unstable_Grid2";
import {useState} from 'react'
import {Typography, Modal, Button, Divider} from "@mui/material";



const Status = () => {
    // handling modal show
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid container className='margins' sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url(/assets/images/wallpaper.jpg)',
                backgroundSize: 'auto',
                backgroundRepeat: 'no-repeat'
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
                    <Typography component='p' variant='h4' className='yekan-regular clrseventext'>
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


                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام : شسی
                            </Typography>

                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام خانوادگی : شسی
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام : شسی
                            </Typography>


                            <Divider/>


                        </Grid>



                        <Grid xs={6}>
                            <Typography variant='h6' className='yekan-regular' component='h3'>
                                اطلاعات تحصیلی :
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام : شسی
                            </Typography>

                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام خانوادگی : شسی
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام : شسی
                            </Typography>

                            <Divider/>

                        </Grid>



                        <Grid xs={6}>
                            <Typography variant='h6' className='yekan-regular' component='h3'>
                                سوابق کاری :
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام : شسی
                            </Typography>

                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام خانوادگی : شسی
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام : شسی
                            </Typography>

                            <Divider/>


                        </Grid>


                        <Grid xs={6}>
                            <Typography variant='h6' className='yekan-regular' component='h3'>
                                مهارت ها :
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام : شسی
                            </Typography>

                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام خانوادگی : شسی
                            </Typography>


                            <Typography component='p' className='yekan-regular' variant='body2'>
                                نام : شسی
                            </Typography>


                            <Divider/>


                        </Grid>


                    </Grid>


                </Modal>


            </Grid>


        </>
    )
}
export default Status;