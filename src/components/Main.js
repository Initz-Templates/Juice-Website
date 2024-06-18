import React from 'react';
import JuiceList from './JuiceList';
import { Container, Box, Typography } from '@mui/material';

const Main = () => {
  return (
    <Container maxWidth="lg" component="main" sx={{ mt: 4, mb: 4 }}>
      <Box id="home" mb={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Welcome to the Juice Shop
        </Typography>
        <Typography variant="body1">
          Your one-stop shop for fresh and delicious juices!
        </Typography>
      </Box>
      <Box id="juices">
        <Typography variant="h4" component="h2" gutterBottom>
          Our Juices
        </Typography>
        <JuiceList />
      </Box>
    </Container>
  );
};

export default Main;
