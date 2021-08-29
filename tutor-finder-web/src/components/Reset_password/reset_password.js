import { Card, Container, Typography, Grid } from '@material-ui/core'
import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from '@material-ui/core'
import { useStyles } from './reset_password_style';
import { useState } from 'react';
import { forgetpassword } from '../../api/auth';

import axios from 'axios';
import { Link } from 'react-router-dom';

function Reset_password({match}) {
    const classes = useStyles();
    const [error, seterror] = useState("")
    const [success, setsuccess] = useState("")
    const [passwordConfirm, setpasswordConfirm] = useState("")
    const [password, setpassword] = useState("")

    const resetpasswordhandle = async (e) => {
        e.preventDefault()


        if (password !== passwordConfirm) {
            setpassword("")
            setpasswordConfirm("")
            setTimeout(() => {
                seterror("")
            }, 5000);
            return seterror("Password don't match")
        }
        try {
            const { data } = await axios.put(`http://localhost:3000/api/v1/users/resetPassword/${match.params.resetToken}`, { password })
            console.log(data)
            setsuccess(data.data)
        } catch (error) {
            seterror("error")
            setTimeout(() => {
                seterror("")
            }, 5000)
        }
    }

    return (

        <Grid container className={classes.gridiconstyle}>
            <Grid item xs={12} md={6} lg={4} >
                <Paper className={classes.paper}>
                    <form onSubmit={resetpasswordhandle}>

                        <Grid container spacing={2}>

                            <Grid item xs={12} >
                                <Typography align="center" variant="h6">Reset Password</Typography>
                            </Grid>

                            {error && <span>{error}</span>}
                            {success && (
                                <span>{success}<Link to="/auth/login">Login</Link></span>)}
                            )

                            <Grid item xs={12}>
                                <TextField type="password" required value={password} onChange={(e) => setpassword(e.target.value)} id="outlined-basic" label="password" variant="outlined" placeholder="ex:-  joni@gmail.com" fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type="password" required value={passwordConfirm} onChange={(e) => setpasswordConfirm(e.target.value)} id="outlined-basic" label="confirm" variant="outlined" placeholder="ex:-  joni@gmail.com" fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Send Email
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Reset_password
