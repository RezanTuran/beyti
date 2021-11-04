import React from 'react';
import HeroSlider, { Slide, Nav } from 'hero-slider';
import ImageList from './imageList';

// Images
const hallstatt = ImageList[0].menuTitle;
const hvitserkur = ImageList[1].menuTitle;
const jacksonville = ImageList[2].menuTitle;
const moraineLake = ImageList[3].menuTitle;

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
        navDescription="Hallstatt - Austria"
        background={{
          backgroundImage: hallstatt,
          backgroundAnimation: 'zoom',
        }}
      />

      <Slide
        navDescription="Hvitserkur - Iceland"
        background={{
          backgroundImage: hvitserkur,
          backgroundAnimation: 'zoom',
        }}
      />

      <Slide
        navDescription="Jacksonville - USA"
        background={{
          backgroundImage: jacksonville,
          backgroundAnimation: 'zoom',
        }}
      />

      <Slide
        navDescription="Moraine Lake - Canada"
        background={{
          backgroundImage: moraineLake,
          backgroundAnimation: 'zoom',
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default app;
