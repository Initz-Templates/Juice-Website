// JuiceCard.js

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 300,
  margin: '1rem',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const JuiceCard = ({ image, title, description }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant="contained" color="primary" size="small">
          Learn More
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default JuiceCard;
