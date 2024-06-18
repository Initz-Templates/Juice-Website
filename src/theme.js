// src/theme.js

import { createTheme } from '@mui/material/styles';

// Define your custom colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Adjust primary color
    },
    secondary: {
      main: '#f50057', // Adjust secondary color
    },
    background: {
      default: '#f0f0f0', // Adjust background color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Adjust font family
  },
});

export default theme;
