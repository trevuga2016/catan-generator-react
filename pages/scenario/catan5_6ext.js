import Head from 'next/head';
import { Header } from '../../components/header/header';
import { GameBoard } from '../../components/game-board/game-board';
import { ButtonRow } from '../../components/button-row/button-row';
import { useState } from 'react';
import getBoardData from '../../helpers/catan-logic';
import getDefaultData from '../../helpers/default-logic';

export const Catan5_6Ext = () => {

    const [data, setData] = useState({
        props: getDefaultData(row_config)
    });

    return(
        <>
            <Head>
                <title>Catan Board Generator</title>
                <link rel="icon" href="/catan-icon.ico" />
            </Head>
            <Header></Header>
            <GameBoard props={data.props}></GameBoard>
            <ButtonRow 
                clear ={() => setData({ props: getDefaultData(row_config) })}
                generate={() => setData({ props: getBoardData(numbers_freq, resources_freq, row_config)})} />
        </>
    );
};

export default Catan5_6Ext;

const numbers_freq = {
    '2': 2,
    '3': 3,
    '4': 3,
    '5': 3,
    '6': 3,
    '8': 3,
    '9': 3,
    '10': 3,
    '11': 3,
    '12': 2
};

const resources_freq = {
    'Wheat': 6,
    'Wood': 6,
    'Sheep': 6,
    'Brick': 5,
    'Ore': 5,
    'Desert': 2
};

const row_config = [3, 4, 5, 6, 5, 4, 3];
