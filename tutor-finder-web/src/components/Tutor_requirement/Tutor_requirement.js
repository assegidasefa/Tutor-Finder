import { Avatar, Box, Button, Grid, InputAdornment, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: "0 30px",
        // marginTop: theme.spacing(10),
        // marginRight:theme.spacing(5),
        // marginLeft:theme.spacing(5)
        margin: theme.spacing(5)


    },
    buttons: {
        backgroundColor: "#773224",
        color: "#ffffff",
        margin: "10px"
    }


}));
const currencies = [
    {
        value: 'math',
        label: 'math',
    },
    {
        value: 'English',
        label: 'eng',
    },
    {
        value: 'civic',
        label: 'civ',
    },
    {
        value: 'physics',
        label: 'phy',
    },
];

function Tutor_requirement() {
    const classes = useStyles()
    const [currency, setCurrency] = useState('math');
    return (
        <div>
            <Box my={10}>

                <Grid container spacing={2} >

                    <Grid item xs={4} md={2} lg={1}>
                        <Grid container justify="center" >
                            <Box mx="center">

                                <Grid item xs={12} >

                                    <Button>
                                        Request
                                    </Button>
                                </Grid>
                                <Grid item xs={12} >
                                    <Button>
                                        Students detail
                                    </Button>
                                </Grid>
                                <Grid item xs={12} >
                                    <Button>
                                        Myrequest
                                    </Button>
                                </Grid>
                                <Grid item xs={12} >
                                    <Button>
                                        Post reuirement
                                    </Button>
                                </Grid>
                            </Box>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={10} lg={11}>
                        <Grid container >
                            <Grid item xs={12} md={6} lg={6}>
                                <Paper className={classes.paper}>
                                    <Box p={2}>
                                        <form className={classes.root} noValidate autoComplete="off">
                                            <Grid container spacing={2} >
                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
                                                </Grid>
                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" label="phone number" variant="outlined" />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        fullWidth
                                                        id="standard-select-currency-native"
                                                        select
                                                        label="Subject"
                                                        value={currency}
                                                        // onChange={handleChange}
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                        helperText="Please select your subject"
                                                    >
                                                        {currencies.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>

                                                </Grid>
                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" label="payemnt"
                                                        endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                                                        variant="outlined" />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        fullWidth
                                                        id="standard-select-currency-native"
                                                        select
                                                        label="Class/Week"
                                                        value={currency}

                                                        // onChange={handleChange}
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                        helperText="Please select your class/week"
                                                    >
                                                        {currencies.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        fullWidth
                                                        id="standard-select-currency-native"
                                                        select
                                                        label="Expriance"
                                                        value={currency}

                                                        // onChange={handleChange}
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                        helperText="Please select your expriance"
                                                    >
                                                        {currencies.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid>

                                            </Grid>
                                        </form>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Tutor_requirement
