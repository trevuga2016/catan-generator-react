import '../styles/globals.scss';
import {theme} from '../styles/theme';
import {ThemeProvider} from '@emotion/react';
import {GameProvider} from '../contexts/game-context';
import {ContentProvider} from '../contexts/content-context';
import Layout from "../components/layout";

function CatanGenerator({ Component, pageProps }) {
  return(
      <Layout>
          <ThemeProvider theme={theme}>
              <GameProvider>
                  <ContentProvider>
                      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                            rel="stylesheet" />
                      <Component {...pageProps} />
                  </ContentProvider>
              </GameProvider>
          </ThemeProvider>
      </Layout>
  );
}

export default CatanGenerator;
