// Hero.js

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Hero = () => {
  const carouselImages = [
    '/images/caro1.jpg',
    '/images/caro2.jpg',
    '/images/caro3.jpg',
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        height: '80vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showArrows={false}
        stopOnHover={false}
        useKeyboardArrows
        swipeable
        emulateTouch
      >
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <Container
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Box textAlign="center">
          <Typography variant="h2" component="h1" gutterBottom>
            Fresh and Delicious Juices
          </Typography>
          <Typography variant="h5" gutterBottom>
            Quench your thirst with our natural and organic juices.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Shop Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
