import { Avatar, Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './Tutor_register_style'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

function Tutor_register() {

    const classes = useStyles()
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <Container>
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between" p={2}>
                        <Box>
                            <Typography variant="h4">Register Tutor</Typography>
                            <Typography variant="h6">welcome back , Mark</Typography>
                        </Box>
                        <Box display="flex" >
                            <Box pl={1} display="flex" flexDirection="column" justifyContent="center">

                                <Avatar className={classes.avater}></Avatar>
                            </Box>
                            <Box pl={1} display="flex" flexDirection="column" justifyContent="center">

                                <Typography variant="h6" >Mark</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Grid container spacing={2} justifyContent="center" >
                        <Grid container justifyContent="center">
                            <Avatar className={classes.avater}></Avatar>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Second Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-number"
                                label="Phone no"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="City" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth /> */}
                            <TextField
                                fullWidth
                                id="standard-select-currency-native"
                                select
                                label="Address"
                                value={currency}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                }}
                            // helperText="Please select your currency"
                            >
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="City" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Class/Week" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth /> */}
                            <TextField
                                fullWidth
                                id="standard-select-currency-native"
                                select
                                label="Expriance"
                                value={currency}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                }}

                            >
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>


                        <Grid item xs={12} >
                            <Button variant="contained" color="primary">
                                Register
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Tutor_register
