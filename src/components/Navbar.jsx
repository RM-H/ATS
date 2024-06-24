import * as React from 'react';
import {
    AppBar, Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Toolbar,
    Typography
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import {useState} from "react";
import {Menu, Logout} from '@mui/icons-material'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux";
import {userselector} from "../slices/userSlice.js";

const Navbar = (props) => {
    const user = useSelector(userselector)


    const nav = useNavigate()

    return (
        <>



            <Box sx={{flexGrow: 1, direction: 'rtl'}}>
                <AppBar position="fixed" sx={{
                    '&.MuiAppBar-root': {
                        backgroundColor: 'rgba(255,255,255,0.36)',
                        backdropFilter: 'blur(1rem)'

                    }
                }}>
                    <Toolbar sx={{ justifyContent:'center'}}>
                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            edge="start"
                            className='w100'

                            sx={{ml: 1, display: {md: 'none'} }}

                        >

                            <img src="/assets/images/logo.png" alt="logo" style={{borderRadius: '50%'}} width={80}
                            />
                            <Button onClick={() => nav('/')} className='underline yekan-regular clrblack'
                                    color="primary" sx={{mr:'auto'}}>


                                خروج
                                <Logout/>
                            </Button>
                        </IconButton>

                        <Grid container sx={{width: '100%', display: {xs: 'none', md: 'flex'},}}>

                        <Grid xs={2} sx={{display: 'flex', justifyContent: 'center'}}>

                                <img src="/assets/images/logo.png" alt="logo" style={{borderRadius: '50%'}} width={100}
                                />
                            </Grid>


                            <Grid xs={5} sx={{display: 'flex' , alignItems:'center'}}>



                                <Typography component='p' className='yekan-regular clrtwotext'>
                                    {
                                        user.user.name ? user.user.name : user.user.phone ? user.user.phone:'کارجو'
                                    }
                                    {' '}
                                    عزیز به سیستم رهگیری استخدام افق ایرانیان خوش آمدید.

                                </Typography>




                            </Grid>


                            <Grid xs={5} sx={{display: 'flex', justifyContent: 'end'}}>

                                <Button onClick={() => nav('/')} className='underline yekan-regular clrblack'
                                        color="primary">


                                    خروج
                                    <Logout/>
                                </Button>
                            </Grid>


                        </Grid>

                    </Toolbar>
                </AppBar>
            </Box>

        </>
    );
}
export default Navbar;