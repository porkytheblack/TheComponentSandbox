import { createTheme} from '@mui/material/styles';

const themeOptions = {
  mode: "dark",
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#cbd5e1',
      secondary: '#8f9eb3',
    },
  },
};

export const theme = createTheme(themeOptions)