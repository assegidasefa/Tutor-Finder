import { Avatar, Box, Button, Grid, InputAdornment, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import axios from "axios";


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


// const [fullName, setfullName] = useState(initialState)

function Tutor_requirement() {
    const classes = useStyles()

    const [fullName, setfullName] = useState("")
    // const [profilePic, setprofilePic] = useState("")
    const [address, setaddress] = useState("")
    const [phone, setphone] = useState("")
    const [experience, setexperience] = useState("")
    const [subejct, setsubejct] = useState("")
    const [city, setCity] = useState("")
    const [locality, setlocality] = useState("")
    const [qualifications, setqualifications] = useState("")
    const [currency, setCurrency] = useState('math');



    const handlesubmit = (e) => {
        var userId = localStorage.getItem("uid")
        const data = {
            fullName, address, phone, experience, subejct, locality, city, qualifications, userId
        }
        e.preventDefault()
        axios.post("http://localhost:3000/api/v1/teachers", data).then(
            res => console.log(res)
        ).then(err => console.log(err))
    }
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
                                        <form className={classes.root} onSubmit={handlesubmit} noValidate autoComplete="off" >
                                            <Grid container spacing={2} >
                                                {/* <Grid item xs={12}  >
                                                    <Avatar>    </Avatar>
                                                </Grid> */}
                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" label="Full Name" variant="outlined" onChange={(e) => setfullName(e.target.value)} />
                                                </Grid>
                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" onChange={(e) => setaddress(e.target.value)} label="Address" variant="outlined" />
                                                </Grid>
                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" label="city" onChange={(e) => setCity(e.target.value)} variant="outlined" />
                                                </Grid>
                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" label="experience" onChange={(e) => setexperience(e.target.value)} variant="outlined" />
                                                </Grid>
                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" label="subject" onChange={(e) => setsubejct(e.target.value)} variant="outlined" />
                                                </Grid>
                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" label="phone number" onChange={(e) => setphone(e.target.value)} variant="outlined" />
                                                </Grid>

                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" onChange={(e) => { setqualifications(e.target.value) }} label="Qualification" variant="outlined" />
                                                </Grid>
                                                <Grid item xs={6}  >
                                                    <TextField fullWidth id="outlined-basic" label="locality"
                                                        onChange={(e) => setlocality(e.target.value)}
                                                        // endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                                                        variant="outlined" />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <button variant="contained">Add</button>
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
