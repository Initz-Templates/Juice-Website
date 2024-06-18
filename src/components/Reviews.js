import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';

const reviews = [
  {
    name: 'John Doe',
    review: 'Amazing juices! I love the freshness and the variety of flavors available.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Jane Smith',
    review: 'Best juice shop in town! The quality is top-notch and the service is excellent.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Sam Wilson',
    review: 'Highly recommend! The juices are delicious and the ingredients are always fresh.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
];

const Reviews = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#f0f0f0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom>
          Customer Reviews
        </Typography>
        <Grid container spacing={3}>
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar src={review.image} sx={{ width: 80, height: 80, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {review.name}
                </Typography>
                <Typography variant="body1" align="center">{review.review}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
