import Head from 'next/head';
import { Header } from '../components/header/header';
import { GameSelect } from '../components/game-select/game-select';
import { Footer } from '../components/footer/footer';

export const Home = () => {

  return (
    <div className="container">
      <Head>
        <title>Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Header></Header>
      <GameSelect></GameSelect>
      <Footer position="fixed"></Footer>
    </div>
  );
}

export default Home;
