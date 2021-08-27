import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import photoo1 from '../../assets/images/photo2.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 9000,
  },
  media: {
    height: 140,
    width: 260, 
  },
  
});

export default function MediaCard() {
  const classes = useStyles();
  

  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
]

  return (
     
    <div className={classes.root}>
      <Grid container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            > {data.map(elem => (
                <Grid item xs={10} sm={5} md={3} >
                    <Card>
        <CardMedia
          className={classes.media}
          image={photoo1}
          title="find you tutor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Online Tutoring
          </Typography>
         
          <Typography variant="body2" color="textSecondary" component="p">
          online tutoring is the process of tutoring in an online, virtual, or networked, environment, 
          in which teachers and learners participate from separate physical locations.
          </Typography>
        </CardContent>
        </Card>
      </Grid>
            ))}
      </Grid>
    </div>
    
  );
}
