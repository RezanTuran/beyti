import React from 'react';
import { Grid, Typography, useMediaQuery, Button } from '@material-ui/core';
import useStyles from './styles';
import FoodImg from '../../assets/slideImages/image3.jpg';

const RestaurantInfo = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:767px)');

  const OnMouseOverImageEffect = (e) => {
    e.target.style.filter = 'blur(5px)';
  };
  const OnMouseOutImageEffect = (e) => {
    e.target.style.filter = 'blur(0px)';
  };

  return (
    <Grid className={classes.container}>
      <Grid
        className={classes.infoBoxContainer}
        style={{
          flexWrap: isMobile ? 'nowrap' : 'wrap',
        }}
      >
        <Grid className={classes.infoBox}>
          <Typography variant="h4" className={classes.title}>
            Välkomna!
          </Typography>
          <Typography variant="h2" className={classes.slogan}>
            Mat är vår passion!
          </Typography>
          <br />
          <Typography variant="h5" className={classes.text}>
            Turkisk kolgrill, Pide, Kebab & Meze...{' '}
          </Typography>
          <br />
          <Typography variant="p" className={classes.text}>
            Vår mat är baserat på det turkiska köket vilket betyder mycket
            smakrika maträtter med många olika sorters kryddor. Bland våra
            maträtter finns något för alla. Vi har ett brett utbud med grillade
            rätter och olika sorters döner kebab, mezerätter och pide.
          </Typography>
          <br />
          <br />
          <Button className={classes.button}>MENY</Button>
        </Grid>
        <Grid className={classes.imgBox}>
          <img
            onMouseOver={OnMouseOverImageEffect}
            onMouseOut={OnMouseOutImageEffect}
            src={FoodImg}
            className={classes.img}
            alt="foodImg"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RestaurantInfo;
