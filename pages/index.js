import Head from 'next/head';
import { Header } from '../components/header/header';
import Catan from './[game]/catan';
import generateCatanBoard from '../helpers/catan-logic';
import getDefaultData from '../helpers/default-logic';
import { ButtonRow } from '../components/button-row/button-row';
import { useState } from 'react';

export const Home = () => {

  const [data, setData] = useState({
    props: getDefaultData()
  });

  return (
    <div className="container">
      <Head>
        <title>Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Header></Header>
      <Catan props={data.props}></Catan>
      <ButtonRow 
        clear ={() => setData({props: getDefaultData()})}
        generate={() => setData({props: generateCatanBoard()})} 
      />
    </div>
  );
}

export default Home;
