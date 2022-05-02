import '../styles/globals.scss';
import { Footer } from '../components/footer/footer';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@emotion/react';
import { GameProvider } from '../components/game-select/game-context';

function CatanGenerator({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <GameProvider>
        <Component {...pageProps} />
        <Footer />
      </GameProvider>
    </ThemeProvider>
  );
}

export default CatanGenerator;
