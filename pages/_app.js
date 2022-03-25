import '../styles/globals.scss';

function CatanGenerator({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
    </>
  );
}

export default CatanGenerator;
