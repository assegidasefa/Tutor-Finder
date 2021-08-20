import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Link, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: "0 30px",
        marginTop: theme.spacing(5),

    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Mock() {
    const classes = useStyles();



    return (
        <Grid container justify="center"  >
            <Grid item xs={10} md={6} lg={4}>
                <Paper className={classes.paper}>
                    <Box py={3}>
                        <Typography align="center">Create An Account</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="left" >By clicking “Create your account” below, you agree to
                                our <Link to="auth/service">terms of service</Link> and <Link to="auth/privacy">privacy policy</Link>.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button className={classes.margin} fullWidth variant="contained" color="secondary">
                                Create An Account
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center">or signup with</Typography>
                        </Grid>

                    </Grid>
                    <Box display="flex" justifyContent="Space-around" pt={2}>
                        <Box display="flex">
                            <Box mr={0.5} >

                                <ShopOutlinedIcon />
                            </Box>
                            <Typography>Google</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box mr={0.5}>

                                <TwitterIcon color="primary" />
                            </Box>
                            <Typography>Twitter</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box>

                                <FacebookIcon color="primary" />
                            </Box>
                            <Typography>Facebook</Typography>
                        </Box>
                    </Box>
                    <Box  py={3}>

                        <Typography  align="center" >Already have an account? <Link to="auth/login">Sign in</Link></Typography>
                    </Box>
                </Paper>
            </Grid>

        </Grid>
    );
}
