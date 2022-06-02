import '../styles/globals.scss';
import { Footer } from '../components/footer/footer';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@emotion/react';
import { GameProvider } from '../components/game-select/game-context';
import { ContentfulProvider } from '../contexts/contentful-context';
import { ScenarioProvider } from '../contexts/scenario-context';
import { TitleProvider } from '../contexts/title-context';

function CatanGenerator({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <ContentfulProvider>
      <GameProvider>
      <ScenarioProvider>
      <TitleProvider>
        <Component {...pageProps} />
        <Footer />
      </TitleProvider>
      </ScenarioProvider>
      </GameProvider>
      </ContentfulProvider>
    </ThemeProvider>
  );
}

export default CatanGenerator;
