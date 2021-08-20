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
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import { useStyles } from './Signup_style'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';

function Signup() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        weight: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Grid >
            <Paper className={classes.paper}>
                <Grid align='center'>

                    {/* <Avatar className={classes.avater}><LockIcon /></Avatar> */}
                    <Grid item xs={12}>
                        <Typography align='center' color="textSecondary" variant='h5'>Create An Account</Typography>

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
                                />

                                {/* <Grid><Typography  variant={"h3"}></Typography></Grid> */}
                                <FormControlLabel
                                    value="Teacher"
                                    control={<Radio color="primary" />}
                                    label="As Teacher"
                                    labelPlacement="start"
                                />
                            </Grid>
                        </div>
                    </Grid>
                    <form className={classes.form}>
                        <TextField size="small" className={clsx(classes.margin, classes.textField)} value={values.weight} onChange={handleChange('weight')} id="outlined-basic" label="Fullname" variant="outlined" placeholder="ex:-  Ayele Kebede" fullWidth required />
                        <TextField size="small" value={values.weight} onChange={handleChange('weight')} id="outlined-basic" label="email" variant="outlined" placeholder="ex:-  joni@gmail.com" fullWidth required />

                        <FormControl size="small" className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                placeholder="5 min character"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>


                        <Typography variant={"h6"} align="left" className={classes.typography}>By clicking “Create your account” below, you agree to
                            our <Link to="auth/service">terms of service</Link> and <Link to="auth/privacy">privacy policy</Link>.</Typography>

                        <Button className={classes.margin} fullWidth variant="contained" color="secondary">
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



                        <Typography className={classes.typography} variant="h6">Already have an account? <Link to="auth/login">Sign in</Link></Typography>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Signup