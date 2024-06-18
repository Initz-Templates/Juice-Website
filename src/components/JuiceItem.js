import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const JuiceItem = ({ juice }) => {
  return (
    <Card elevation={3} sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={juice.strDrinkThumb}
        alt={juice.strDrink}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {juice.strDrink}
        </Typography>
        <Typography variant="body1">
          {juice.strInstructions.slice(0, 100)}...
        </Typography>
        <Button component={Link} to={`/juice/${juice.idDrink}`} variant="contained" color="primary" sx={{ mt: 2 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default JuiceItem;

