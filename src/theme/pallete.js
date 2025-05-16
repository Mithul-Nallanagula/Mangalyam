import {  purple, red, green, amber, grey } from '@mui/material/colors';

const palette = {
  mode: 'light', // or 'dark'
  primary: {
    main: '#FFB000',
    contrastText: '#fff',
  },
  secondary: {
    main: purple[500],
    contrastText: '#fff',
  },
  error: {
    main: red[500],
  },
  success: {
    main: green[500],
  },
  warning: {
    main: amber[500],
  },
  background: {
    default: grey[100],
    paper: '#fff',
  },
  text: {
    primary: '#333',
    secondary: grey[600],
  },
};

export default palette;
