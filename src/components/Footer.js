import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1976d2', color: 'white', padding: '1rem 0' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          &copy; 2024, Made with
❤️
by
<span>   </span>
<a style={{color: 'white'}} href='initializ.ai'>initializ inc.</a>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
