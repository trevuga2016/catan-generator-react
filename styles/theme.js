import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Luminari_Regular',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ].join(','),
  }
});