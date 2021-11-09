import React from 'react';
import HeroSlider, { Slide, Nav } from 'hero-slider';
import ImageList from './imageList';

// Images
const restaurantImage1 = ImageList[0].menuTitle;
const restaurantImage2 = ImageList[1].menuTitle;
const foodImage1 = ImageList[2].menuTitle;
const foodImage2 = ImageList[3].menuTitle;

const settings = {
  slidingDuration: 500,
  slidingDelay: 100,
  shouldAutoplay: true,
  shouldDisplayButtons: true,
  autoplayDuration: 5000,
  height: '100vh',
};

const app = () => {
  return (
    <HeroSlider
      orientation="horizontal"
      initialSlide={1}
      style={{
        backgroundColor: '#000',
      }}
      settings={{ ...settings }}
    >
      <Slide
        background={{
          backgroundImage: restaurantImage1,
          backgroundAnimation: 'zoom',
        }}
      />

      <Slide
        background={{
          backgroundImage: restaurantImage2,
          backgroundAnimation: 'zoom',
        }}
      />

      <Slide
        navDescription="Jacksonville - USA"
        background={{
          backgroundImage: foodImage1,
          backgroundAnimation: 'zoom',
        }}
      />

      <Slide
        background={{
          backgroundImage: foodImage2,
          backgroundAnimation: 'zoom',
        }}
      />
      <Nav />
    </HeroSlider>
  );
};

export default app;
