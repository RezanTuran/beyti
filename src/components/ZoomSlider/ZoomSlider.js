import React from 'react';
import HeroSlider, { Slide, Nav } from 'hero-slider';

// Images
const hallstatt = 'https://i.imgur.com/Yszno5e.jpg';
const hvitserkur = 'https://i.imgur.com/ZBzbir7.jpg';
const jacksonville = 'https://i.imgur.com/xpeJkkR.jpg';
const moraineLake = 'https://i.imgur.com/0NAc45h.jpg';

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
