import { Avatar, Button, Container, FormControl, FormControlLabel, Grid, Radio, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useStyles } from './Login_style';
import Paper from '@material-ui/core/Paper';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link, useHistory } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import { login } from '../../api/auth';
import Alert from '@material-ui/lab/Alert';
import { useEffect } from 'react';


export default function Login() {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles();
    const history = useHistory()
    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         history.push("/")
    //     }

    // }, [history])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const result = await login(email, password);
            console.log(result, " logged in response")
            if (result.status === "success") {
                localStorage.setItem("token", JSON.stringify(result.token))
                localStorage.setItem("uid", JSON.stringify(result.data.user.id))
                // console.log(result.data.user.id)

            }
            // history.replace("/")
            history.push("/tutor-requirement")

        } catch (error) {
            setErrorMessage({ message: error.message })
            console.log("login error")
        }
        setLoading(false)
    }

    const ShowErrorMessage = ({ message }) => {
        console.log("message is ", message)
        return (
            <Alert severity="error">{message}</Alert>
        )
    }


    // const handleChangeEmail = (prop) => (event) => {
    //     setEmail({ ...email, [prop]: event.target.value });
    // };
    // const handleChangePassword = (prop) => (event) => {
    //     setPassword({ ...password, [prop]: event.target.value });
    // };

    const handleClickShowPassword = () => {
        setShowPassword({ ...showPassword, showPassword: !showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Grid align='center'>

                    <Avatar className={classes.avatar}><LockIcon /></Avatar>
                    <Grid item xs={12}>
                        <Typography align='center' color="textSecondary" variant='h5'>Login</Typography>
                        {errorMessage && <ShowErrorMessage {...errorMessage} />}
                    </Grid>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField value={email} onChange={(e) => { setEmail(e.target.value) }} id="outlined-basic" label="email" variant="outlined" placeholder="ex:-  joni@gmail.com" fullWidth required />
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                placeholder="5 min character"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
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
                        <Link to="forget-password">

                            <Typography variant={"h6"} align="right" className={classes.typography}>Forget Password?</Typography>
                        </Link>
                        {/* <Button fullWidth variant="contained" color="secondary">
                            Login
                        </Button> */}
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"

                        >
                            Login
                        </Button>
                        <Typography align="center" variant={"h6"} color="textPrimary" className={classes.typography} >Don't have an acount? <Link to="signup">Register Now</Link></Typography>

                    </form>
                </Grid>
            </Paper>
        </Grid >
    )
}
