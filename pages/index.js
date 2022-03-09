import Head from 'next/head';
import { Header } from '../components/header/header';
import Catan from './[game]/catan';
import generateCatanBoard from '../helpers/catan-logic';

export const Home = ({ data }) => {
  return (
    <div className="container">
      <Head>
        <title>Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Header></Header>
      <Catan props={data}></Catan>
    </div>
  );
}

export function getServerSideProps() {
  const data = generateCatanBoard();
  return { props: { data } };
}

export default Home;
