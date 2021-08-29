import { Card, Container, Typography, Grid } from '@material-ui/core'
import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from '@material-ui/core'
import { useStyles } from './Forget_Password_style';
import { useState } from 'react';
import { forgetpassword } from '../../api/auth';

import axios from 'axios';

function Forget_password() {
    const classes = useStyles();
    const [error, seterror] = useState("")
    const [success, setsuccess] = useState("")
    const [email, setemail] = useState("")

    const forgetpasswordhandle = async (e) => {
        e.preventDefault()
        
        try {
            const { data } = await forgetpassword(email)
            setsuccess(data.data)
        } catch (error) {
            seterror("error")
            setemail("")
            setTimeout(() => {
                seterror("")
            }, 5000)
        }
    }

    return (

        <Grid container className={classes.gridiconstyle}>
            <Grid item xs={12} md={6} lg={4} >
                <Paper className={classes.paper}>
                    <form onSubmit={forgetpasswordhandle}>

                        <Grid container spacing={2}>

                            <Grid item xs={12} >
                                <Typography align="center" variant="h6">Forget Password</Typography>
                            </Grid>

                            {error && <span>{error}</span>}
                            {success && <span>{success}</span>}
                            <Grid item xs={12}>
                                <Typography >Please enter the email address you register your account
                                    with. we will send you reset password confirmation to this email
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>

                                <TextField type="email" required value={email} onChange={(e) => setemail(e.target.value)} id="outlined-basic" label="email" variant="outlined" placeholder="ex:-  joni@gmail.com" fullWidth required />
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

export default Forget_password
