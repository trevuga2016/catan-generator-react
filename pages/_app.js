import '../styles/globals.scss';
import { Footer } from '../components/footer/footer';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@emotion/react';
import { GameProvider } from '../contexts/game-context';
import { ContentfulProvider } from '../contexts/contentful-context';

function CatanGenerator({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <ContentfulProvider>
      <GameProvider>
        <Component {...pageProps} />
        <Footer />
      </GameProvider>
      </ContentfulProvider>
    </ThemeProvider>
  );
}

export default CatanGenerator;
