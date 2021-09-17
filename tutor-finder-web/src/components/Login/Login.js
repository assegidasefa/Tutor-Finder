import { Avatar, Button, Container, FormControl, FormControlLabel, Grid, Radio, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useStyles } from './Login_style';
import Paper from '@material-ui/core/Paper';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';


export default function Login() {
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
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Grid align='center'>

                    <Avatar className={classes.avatar}><LockIcon/></Avatar>
                    <Grid item xs={12}>
                        <Typography align='center' color="textSecondary" variant='h5'>Login</Typography>

                        <div className={classes.RadioCheckBoxContainer}>

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
                        </div>
                    </Grid>
                    <form className={classes.form}>
                        <TextField value={values.weight} onChange={handleChange('weight')} id="outlined-basic" label="email" variant="outlined" placeholder="ex:-  joni@gmail.com" fullWidth required />
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
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
                        <Link to="auto/verification">

                            <Typography variant={"h6"} align="right" className={classes.typography}>Forget Password?</Typography>
                        </Link>
                        <Button fullWidth variant="contained" color="secondary">
                            Login
                        </Button>
                        <Typography align="center" variant={"h6"} color="textPrimary" className={classes.typography} >Don't have an acount? <Link to="signup">Register Now</Link></Typography>

                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}
