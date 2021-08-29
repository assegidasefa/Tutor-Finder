import { Avatar, Box, Button, Container, FormControl, FormControlLabel, Grid, Radio, TextField, Typography } from '@material-ui/core';
import React from 'react'
// import { useStyles } from './Login_style';
import Paper from '@material-ui/core/Paper';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link, useHistory } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import { useStyles } from './Signup_style'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { signup } from '../../api/auth';
function Signup() {
    const classes = useStyles();
    // const [values, setValues] = React.useState({
    //     firstName: '',
    //     lastName: '',
    //     password: '',
    //     passwordConfirm:'',
    //     // role:'',
    //     email: '',
    //     error:'',
    //     showPassword: false,
    // });
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setpassword] = useState("")
    const [passwordConfirm, setpasswordConfirm] = useState("")
    const [email, setemail] = useState("")
    const [error, seterror] = useState("")
    const [showPassword, setshowPassword] = useState("")
    // const [student, setstudent] = useState("")
    // const [teacher, setteacher] = useState("")

    const history = useHistory()


    const submithandler = async (e) => {
        e.preventDefault()
        if (password !== passwordConfirm) {
            setpasswordConfirm("")
            setpassword("")
            setTimeout(() => {
                seterror("")
            }, 5000)
            return seterror("Password do not match")
        }
        try {
            const result = await signup(firstName, lastName, email, password, passwordConfirm)
            console.log(result)
            history.push("/")
        } catch (error) {
            // seterror(error.response.data.error)
            seterror("error")
            setTimeout(() => {
                seterror("")
            }, 5000)
        }
       
    }


    const handleClickShowPassword = () => {
        setshowPassword({ ...showPassword, showPassword: !showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <form className={classes.form} onSubmit={submithandler}>

            <Grid >
                <Paper className={classes.paper}>
                    <Grid align='center'>

                        {/* <Avatar className={classes.avater}><LockIcon /></Avatar> */}
                        <Grid item xs={12}>
                            <Typography align='center' color="textSecondary" variant='h5'>Create An Account</Typography>

                            {error && <span>{error}</span>}
                            <div className={classes.RadioCheckBoxContainer}>
                                <Grid container
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="flex-end">

                                    <FormControlLabel
                                        value="Student"
                                        control={<Radio color="primary" />}
                                        label="As Student"
                                        labelPlacement="start"
                                        // onChange={(e)=>{setstudent(e.target.value)}}

                                    />

                                    {/* <Grid><Typography  variant={"h3"}></Typography></Grid> */}
                                    <FormControlLabel
                                        value="Teacher"
                                        control={<Radio color="primary" />}
                                        label="As Teacher"
                                        labelPlacement="start"
                                        // onChange={(e)=>{setteacher(e.target.value)}}
                                        
                                    />
                                   
                                </Grid>
                            </div>
                        </Grid>
                        {/* <form className={classes.form} onSubmit={submithandler}> */}
                        <Grid container display="flex" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={6} >
                                <TextField size="small" className={clsx(classes.margin, classes.textField)} value={firstName} onChange={(e) => setFirstName(e.target.value)} id="outlined-basic" label="firstName" variant="outlined" placeholder="ex:-  Ayele Kebede" fullWidth required />
                            </Grid>
                            <Grid item xs={6} >
                                <TextField size="small" className={clsx(classes.margin, classes.textField)} value={lastName} onChange={(e) => setLastName(e.target.value)} id="outlined-basic" label="lastName" variant="outlined" placeholder="ex:-  Ayele Kebede" fullWidth required />
                            </Grid>
                            <Grid item xs={12} >

                                <TextField size="small" value={email} onChange={(e) => { setemail(e.target.value) }} id="outlined-basic" label="email" variant="outlined" placeholder="ex:-  joni@gmail.com" fullWidth required />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl size="small" className={clsx(classes.margin, classes.textField)} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        placeholder="5 min character"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => { setpassword(e.target.value) }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl size="small" className={clsx(classes.margin, classes.textField)} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password Confirm">Confirm</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        placeholder="5 min character"
                                        type={showPassword ? 'text' : 'password'}
                                        value={passwordConfirm}
                                        onChange={(e) => { setpasswordConfirm(e.target.value) }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Typography variant={"h6"} align="left" className={classes.typography}>By clicking “Create your account” below, you agree to
                            our <Link to="auth/service">terms of service</Link> and <Link to="auth/privacy">privacy policy</Link>.</Typography>

                        <Button className={classes.margin} fullWidth
                            type="submit"
                            variant="contained"
                            color="primary">
                            Create An Account
                        </Button>
                        <Typography variant={"h6"} className={classes.typography} color="textSecondary">or Sign up using </Typography>
                        <Box display="flex" justifyContent="space-around">
                            <Box display="flex" alignItems="center">
                                <Box mr={0.5}>

                                    <ShopOutlinedIcon />
                                </Box>
                                <Typography variant="h6">Google</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box mr={0.5}>

                                    <TwitterIcon color="primary"></TwitterIcon>
                                </Box>
                                <Typography variant="h6">Twitter</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box mr={0.5}>

                                    <FacebookIcon color="primary"></FacebookIcon>
                                </Box>
                                <Typography variant="h6">Facebock</Typography>
                            </Box>
                        </Box>



                        <Typography className={classes.typography} variant="h6">Already have an account? <Link to="login">Sign in</Link></Typography>
                        {/* </form> */}
                    </Grid>
                </Paper>
            </Grid>
        </form>

    )
}

export default Signup