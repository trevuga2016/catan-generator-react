import { Header } from '../../components/header/header';
import { GameBoard } from '../../components/game-board/game-board';
import { ButtonRow } from '../../components/button-row/button-row';
import { Footer } from '../../components/footer/footer';
import { useState } from 'react';
import generateCatanBoard from '../../helpers/catan-logic';
import getDefaultData from '../../helpers/default-logic';

export const Catan = () => {

    const [data, setData] = useState({
        props: getDefaultData()
    });

    return(
        <>
            <Header></Header>
            <GameBoard props={data.props}></GameBoard>
            <ButtonRow 
                clear ={() => setData({props: getDefaultData()})}
                generate={() => setData({props: generateCatanBoard()})} />
            <Footer></Footer>
        </>
    );
};

export default Catan;