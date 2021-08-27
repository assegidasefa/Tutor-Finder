import { Box, Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

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

function Tutor_accept_reject() {
    const classes = useStyles()
    return (
        <div>
            <Box my={10}>

                <Grid container spacing={2} >

                    <Grid item xs={12} md={6} lg={1}>
                        <Grid container justify="center" >
                            <Box mx="center">

                                <Grid item xs={12} >
            
                                    <Button>
                                        Request
                                    </Button>
                                </Grid>
                                <Grid item xs={12} >
                                    <Button>
                                        Myrequest
                                    </Button>
                                </Grid>
                                <Grid item xs={12} >
                                    <Button>
                                        Myrequest
                                    </Button>
                                </Grid>
                            </Box>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} lg={11}>
                        <Grid container >
                            <Grid item xs={12} md={6} lg={4}>
                                <Paper className={classes.paper}>
                                    <Box p={4}>

                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography align="center"  >Request 1</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography>
                                                    Name : xyz cba
                                                </Typography>
                                                <Typography>
                                                    course : xyzcba
                                                </Typography>
                                                <Typography>
                                                    phone : 094......
                                                </Typography>
                                                <Typography>
                                                    email : xyz@gmail.com
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>

                                            </Grid>
                                            <Grid container justify="space-between">
                                                <Grid item xs={4}>
                                                    <Button className={classes.buttons}>Accept</Button>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button className={classes.buttons}>Reject</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Paper className={classes.paper}>
                                    <Box p={4}>

                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography align="center"  >Request 1</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography>
                                                    Name : xyz cba
                                                </Typography>
                                                <Typography>
                                                    course : xyzcba
                                                </Typography>
                                                <Typography>
                                                    phone : 094......
                                                </Typography>
                                                <Typography>
                                                    email : xyz@gmail.com
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>

                                            </Grid>
                                            <Grid container justify="space-between">
                                                <Grid item xs={4}>
                                                    <Button className={classes.buttons}>Accept</Button>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button className={classes.buttons}>Reject</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Paper className={classes.paper}>
                                    <Box p={4}>

                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography align="center"  >Request 1</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography>
                                                    Name : xyz cba
                                                </Typography>
                                                <Typography>
                                                    course : xyzcba
                                                </Typography>
                                                <Typography>
                                                    phone : 094......
                                                </Typography>
                                                <Typography>
                                                    email : xyz@gmail.com
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>

                                            </Grid>
                                            <Grid container justify="space-between">
                                                <Grid item xs={4}>
                                                    <Button className={classes.buttons}>Accept</Button>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button className={classes.buttons}>Reject</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Paper className={classes.paper}>
                                    <Box p={4}>

                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography align="center"  >Request 1</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography>
                                                    Name : xyz cba
                                                </Typography>
                                                <Typography>
                                                    course : xyzcba
                                                </Typography>
                                                <Typography>
                                                    phone : 094......
                                                </Typography>
                                                <Typography>
                                                    email : xyz@gmail.com
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>

                                            </Grid>
                                            <Grid container justify="space-between">
                                                <Grid item xs={4}>
                                                    <Button className={classes.buttons}>Accept</Button>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button className={classes.buttons}>Reject</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
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

export default Tutor_accept_reject
