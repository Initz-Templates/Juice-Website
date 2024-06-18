import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchJuiceById } from '../api'; // Import fetchJuiceById from api
import { Container, Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';

const JuiceDetail = () => {
  const { id } = useParams(); // Get the ID from URL params
  const [juice, setJuice] = useState(null);

  useEffect(() => {
    const getJuiceDetail = async () => {
      try {
        const juiceData = await fetchJuiceById(id); // Call fetchJuiceById with the ID parameter
        setJuice(juiceData);
      } catch (error) {
        console.error('Error fetching juice details:', error);
        // Handle error if needed
      }
    };

    getJuiceDetail();
  }, [id]);

  if (!juice) {
    return (
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Loading...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {juice.strDrink}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="400"
              image={juice.strDrinkThumb}
              alt={juice.strDrink}
              sx={{ objectFit: 'cover' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Ingredients
              </Typography>
              <Typography variant="body1" gutterBottom>
                {juice.strIngredient1 && `${juice.strMeasure1} ${juice.strIngredient1}`}
                {juice.strIngredient2 && `, ${juice.strMeasure2} ${juice.strIngredient2}`}
                {/* Add more ingredients if available */}
              </Typography>
              <Typography variant="h6" component="h3" gutterBottom>
                Instructions
              </Typography>
              <Typography variant="body1" paragraph>
                {juice.strInstructions}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                sx={{ marginTop: '1rem' }}
              >
                Back to Juices
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JuiceDetail;
