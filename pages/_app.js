import '../styles/globals.scss';
import { Footer } from '../components/footer/footer';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@emotion/react';

function CatanGenerator({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
        <Footer />
    </ThemeProvider>
  );
}

export default CatanGenerator;
