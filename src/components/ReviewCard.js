// src/components/ReviewCard.js

import React from 'react';
import { Card, CardContent, Typography, Rating, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: '1rem',
  padding: '1rem',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const ReviewCard = ({ name, rating, review, avatar }) => {
  return (
    <StyledCard>
      <CardContent>
        <Avatar alt={name} src={avatar} sx={{ width: 60, height: 60, marginBottom: 2 }} />
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Box mb={2}>
          <Rating value={rating} precision={0.5} readOnly />
        </Box>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {review}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ReviewCard;
