import { Grid, Typography } from "@material-ui/core";
import React from "react";
import BaseLayout from "../common/BaseLayout";
import { useStyles } from "./home_style";
import photone from "../../assets/images/photo1.jpg";
import phottwo from "../../assets/images/photo2.jpg"
const Home = () => {
  const classes = useStyles();
  return (
    <BaseLayout>
      <div>
        <div className={classes.root}>
          <Grid
            container
            alignItems="center"
            justifyContent="start"
            className={classes.header}
          >
            <Grid item xs={6}>
              <Typography variant="h2" className={classes.headerText}>
                Looking for Your Tutor
              </Typography>
              <Typography align="center" variant="body1">
                {" "}
                You can learn anything
              </Typography>
            </Grid>
          </Grid>
        </div>

        <Grid>
          <Typography
            variant="body2"
            color="textprimary"
            align="center"
            guttorBottom="true"

            className={classes.services}

          >We Offer Best Services

          </Typography>



        </Grid>
        <Grid className={classes.three}>
          <div>
            <img className={classes.photo1} src={photone} alt="" />
            <Typography
              variant="p"
              align="right"
              className={classes.one}

            >One to one tutoring <br /> one to one tutorial <br /> one to one tutorial </Typography>
          </div>
          <div>
            <img className={classes.photo2} src={phottwo} alt="" />
            <Typography
              variant="p"
              align="center"
              className={classes.two}
            >text two here</Typography>
            <div>
              <img className={classes.photo3} src={phottwo} alt="" />
              <Typography>text three here</Typography>
            </div>
          </div>

        </Grid>
      </div>
    </BaseLayout>
  );
};

export default Home;
