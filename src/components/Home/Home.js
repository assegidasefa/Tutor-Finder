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
        
      </div>
    </BaseLayout>
  );
};

export default Home;
