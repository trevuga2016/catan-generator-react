import Head from 'next/head';
import { Header } from '../components/header/header';
import Catan from './[game]/catan';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Header></Header>
      <Catan scenario="catan"></Catan>
    </div>
  );
}
