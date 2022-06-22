import '../styles/globals.scss';
import { Footer } from '../components/footer/footer';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@emotion/react';
import { GameProvider } from '../contexts/game-context';
import { ContentfulProvider } from '../contexts/contentful-context';
import { Box } from '@mui/material';

function CatanGenerator({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <ContentfulProvider>
      <GameProvider>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet" />
        <Box id="background-image" width="100vw" height="100vh" position="fixed" />
        <Component {...pageProps} />
        <Footer />
      </GameProvider>
      </ContentfulProvider>
    </ThemeProvider>
  );
}

export default CatanGenerator;
