import { Avatar, Box, Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './Admin_dashboard_style'
import image1 from "../../assets/images/dashboard.png"

function Admin_dashboard() {
    const classes = useStyles();
    return (
        <div>
            <Box m={2}>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={3} lg={2}>
                        <Paper style={{ minHeight: '95vh' }}>
                            <Box m={2}>

                                <Grid container spacing={2} >
                                    <Grid item xs={12}>
                                        <Box style={{ minHeight: '15vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                            <CardContent style={{ height: "140px" }}>
                                                <img className={classes.media} src={image1} />
                                                <Typography>Dashboard</Typography>
                                            </CardContent>
                                        </Box>
                                    </Grid>


                                    <Grid item xs={12}>
                                        <Box style={{ minHeight: '15vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                            <CardContent style={{ height: "140px" }}>

                                                <img className={classes.media} src={image1} />
                                                <Typography>Dashboard</Typography>
                                            </CardContent>
                                        </Box>
                                    </Grid> <Grid item xs={12}>
                                        <Box style={{ minHeight: '15vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                            <CardContent style={{ height: "140px" }}>

                                                <img className={classes.media} src={image1} />
                                                <Typography>Dashboard</Typography>
                                            </CardContent>
                                        </Box>
                                    </Grid> <Grid item xs={12}>
                                        <Box style={{ minHeight: '15vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                            <CardContent style={{ height: "140px" }}>
                                                <img className={classes.media} src={image1} />
                                                <Typography>Dashboard</Typography>
                                            </CardContent>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} lg={10}>
                        <Grid container style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Grid item xs={12}>
                                <Grid container justify="space-between">
                                    <Grid item xs={4}>
                                        <Typography variant="h3">Dashboard</Typography>
                                        <Typography variant="h6">Wellcome back , Mark</Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Box display="flex" alignItems="center" pt={2} >
                                            <Box mr={0.5} >
                                                <Avatar />
                                            </Box>
                                            <Typography >Mark</Typography>
                                        </Box>

                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container alignItems="center" justifyContent="space-evenly" >
                                    <Grid item xs={3}>
                                        <Typography variant="h6">Monthly income</Typography>
                                        <Grid container >
                                            <Grid item xs={6} >
                                                <Typography variant="h6">Total</Typography>
                                                <Typography variant="h6">45664</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant="h6">Average</Typography>
                                                <Typography variant="h6">345</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />

                                    <Grid item xs={3}>
                                        <Typography variant="h6">Monthly Student Join</Typography>
                                        <Grid container >
                                            <Grid item xs={6} >
                                                <Typography variant="h6">Total</Typography>
                                                <Typography variant="h6">45664</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant="h6">Average</Typography>
                                                <Typography variant="h6">345</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />

                                    <Grid item xs={3}>
                                        <Typography variant="h6">Monthly Tutor Join</Typography>
                                        <Grid container >
                                            <Grid item xs={6} >
                                                <Typography variant="h6">Total</Typography>
                                                <Typography variant="h6">45664</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant="h6">Average</Typography>
                                                <Typography variant="h6">345</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Admin_dashboard
