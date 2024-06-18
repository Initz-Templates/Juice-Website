import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our Juice Shop! We are committed to providing the freshest and most delicious juices made from natural and organic ingredients. Our mission is to promote a healthy lifestyle through our wide range of juices that are not only tasty but also packed with essential nutrients.
      </Typography>
      <Typography variant="body1" paragraph>
        Our team carefully selects the finest fruits and vegetables to ensure that every sip you take is bursting with flavor and goodness. Whether you're looking for a refreshing drink to start your day or a healthy beverage to boost your energy, we've got you covered.
      </Typography>
    </Container>
  );
};

export default About;
