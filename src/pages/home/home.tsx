import React from 'react';
import ReactPlayer from 'react-player';
import heroVideo from '../../assets/backgroundVideo.mp4';
import { Grid, useMediaQuery } from '@material-ui/core';
//import useStyles from './styles';
import RestaurantInfo from '../../components/restaurant-info';
import ZoomSlide from '../../components/ZoomSlider/ZoomSlider';

const Home = () => {
  const isMobile = useMediaQuery('(min-width:991px)');

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
        <ZoomSlide />
      )}
      <RestaurantInfo />
    </Grid>
  );
};

export default Home;
