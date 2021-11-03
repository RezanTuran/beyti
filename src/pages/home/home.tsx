import React from 'react';
import ReactPlayer from 'react-player';
import heroVideo from '../../assets/backgroundVideo.mp4';
import { Grid, useMediaQuery } from '@material-ui/core';
//import useStyles from './styles';
import RestaurantInfo from '../../components/restaurant-info';
import mobileBack from '../../assets/mobile.jpg';

const Home = () => {
  const isMobile = useMediaQuery('(min-width:600px)');

  //const classes = useStyles();
  return (
    <Grid>
      {isMobile ? (
        <ReactPlayer
          url={heroVideo}
          playing
          loop
          muted
          controls={false}
          height="auto"
          width="100%"
        />
      ) : (
        <Grid
          style={{
            backgroundImage: `url(${mobileBack})`,
            height: '100vh',
            backgroundSize: 'cover',
          }}
        ></Grid>
      )}
      <RestaurantInfo />
    </Grid>
  );
};

export default Home;
