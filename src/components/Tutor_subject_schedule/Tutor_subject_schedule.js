import { Avatar, Box, Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
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

function Tutor_subject_schedule() {
    const classes = useStyles()
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
                                        Schedule and Subejct
                                    </Button>
                                </Grid>
                            </Box>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={10} lg={11}>
                        <Grid container >
                            <Grid item xs={12} md={6} lg={8}>
                                <Paper className={classes.paper}>
                                    <Box p={4}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} lg={6} md={6} >
                                                <Typography>
                                                    Name : xyz cbasdsfgasdfgASDFG
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
                                            <Grid item xs={12} lg={6} md={6} >
                                                <Typography>
                                                    Name : xyz cbasdsfgasdfgASDFG
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

export default Tutor_subject_schedule
