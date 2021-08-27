import { Avatar, Box, Button, Card, CardContent, CardMedia, Divider, Grid, Link, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './Manage_tutor_style'
import image1 from "../../assets/images/dashboard.png"


function Manage_tutor() {
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
                                                <Typography>Dashboardd</Typography>
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
                                <Grid container justify="center" spacing={2}>
                                    <Grid item xs={7} >
                                        <Box display="flex" mb={2} justifyContent="space-between">
                                            <Box alignItems="center">

                                                <Typography variant="h6">Tutor Members</Typography>
                                            </Box>
                                            <Box alignItems="center" pt={1}>

                                                <Link>View All</Link>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Card>
                                            <Box display="flex" justifyContent="Space-between">
                                                <Box m={2} display="flex">

                                                    <Avatar className={classes.avater}></Avatar>
                                                    <Box ml={3} display="flex" flexDirection="column" justifyContent="space-between">
                                                        <Box >

                                                            <Typography variant="h5">Andrew Jhonston</Typography>
                                                        </Box>
                                                        <Box>

                                                            <Typography style={{ fontSize: 12 }} variant="h6">Rates: 4.5</Typography>
                                                            <Typography style={{ fontSize: 12 }} variant="h6">Reviews: 445</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" flexDirection="column" m={5} justifyContent="center">
                                                    <Button color="secondary">More</Button>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Card>
                                            <Box display="flex" justifyContent="Space-between">
                                                <Box m={2} display="flex">

                                                    <Avatar className={classes.avater}></Avatar>
                                                    <Box ml={3} display="flex" flexDirection="column" justifyContent="space-between">
                                                        <Box >

                                                            <Typography variant="h5">Andrew Jhonston</Typography>
                                                        </Box>
                                                        <Box>

                                                            <Typography style={{ fontSize: 12 }} variant="h6">Rates: 4.5</Typography>
                                                            <Typography style={{ fontSize: 12 }} variant="h6">Reviews: 445</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" flexDirection="column" m={5} justifyContent="center">
                                                    <Button color="secondary">More</Button>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Card>
                                            <Box display="flex" justifyContent="Space-between">
                                                <Box m={2} display="flex">

                                                    <Avatar className={classes.avater}></Avatar>
                                                    <Box ml={3} display="flex" flexDirection="column" justifyContent="space-between">
                                                        <Box >

                                                            <Typography variant="h5">Andrew Jhonston</Typography>
                                                        </Box>
                                                        <Box>

                                                            <Typography style={{ fontSize: 12 }} variant="h6">Rates: 4.5</Typography>
                                                            <Typography style={{ fontSize: 12 }} variant="h6">Reviews: 445</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" flexDirection="column" m={5} justifyContent="center">
                                                    <Button color="secondary">More</Button>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Card>
                                            <Box display="flex" justifyContent="Space-between">
                                                <Box m={2} display="flex">

                                                    <Avatar className={classes.avater}></Avatar>
                                                    <Box ml={3} display="flex" flexDirection="column" justifyContent="space-between">
                                                        <Box >

                                                            <Typography variant="h5">Andrew Jhonston</Typography>
                                                        </Box>
                                                        <Box>

                                                            <Typography style={{ fontSize: 12 }} variant="h6">Rates: 4.5</Typography>
                                                            <Typography style={{ fontSize: 12 }} variant="h6">Reviews: 445</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" flexDirection="column" m={5} justifyContent="center">
                                                    <Button color="secondary">More</Button>
                                                </Box>
                                            </Box>
                                        </Card>
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

export default Manage_tutor
