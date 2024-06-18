import React, { useEffect, useState } from 'react';
import { Grid, Container, Typography, CircularProgress } from '@mui/material';
import { fetchJuices } from '../api';
import JuiceItem from './JuiceItem';

const JuiceList = () => {
  const [juices, setJuices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getJuices();
  }, []);

  const getJuices = async () => {
    setLoading(true);
    try {
      const juiceData = await fetchJuices();
      setJuices(juiceData || []);
    } catch (error) {
      console.error('Error fetching juices:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Juices
      </Typography>
      {loading ? (
        <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />
      ) : (
        <Grid container spacing={3}>
          {juices.map((juice) => (
            <Grid item xs={12} sm={6} md={4} key={juice.idDrink}>
              <JuiceItem juice={juice} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default JuiceList;
