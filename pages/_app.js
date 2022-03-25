import '../styles/globals.scss';
import { Footer } from "../components/footer/footer";

function CatanGenerator({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
        <Footer />
    </>
  );
}

export default CatanGenerator;
