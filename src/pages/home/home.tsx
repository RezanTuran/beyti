import React from 'react';
import ReactPlayer from 'react-player';
import heroVideo from '../../assets/backgroundVideo.mp4';
import { Grid } from '@material-ui/core';
//import useStyles from './styles';
import RestaurantInfo from '../../components/restaurant-info';

const Home = () => {
  //const classes = useStyles();
  return (
    <Grid>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        controls={false}
        height="auto"
        width="100%"
      />
      <RestaurantInfo />
    </Grid>
  );
};

export default Home;
