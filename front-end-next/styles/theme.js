import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#984C9C',
    },
    secondary: {
      main: '#B34F8A',
    },
    basic: {
      main: '#A84A53',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
