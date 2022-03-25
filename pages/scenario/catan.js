import Head from 'next/head';
import { Header } from '../../components/header/header';
import { GameBoard } from '../../components/game-board/game-board';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import styles from '../../styles/catan.module.css';

export const Catan = () => {

    const router = useRouter();
    const { ports } = router.query;

    let props = { numbers_freq, resources_freq, row_config, port_config, ports };

    return(
        <Grid container className={styles["catan"]}>
            <Head>
                <title>Catan Board Generator</title>
                <link rel="icon" href="/catan-icon.ico"/>
            </Head>
            <Header/>
            <GameBoard props={props} />
        </Grid>
    );
};

export default Catan;

const numbers_freq = {
    '2': 1,
    '3': 2,
    '4': 2,
    '5': 2,
    '6': 2,
    '8': 2,
    '9': 2,
    '10': 2,
    '11': 2,
    '12': 1
};

const resources_freq = {
    'Wheat': 4,
    'Wood': 4,
    'Sheep': 4,
    'Brick': 3,
    'Ore': 3,
    'Desert': 1
};

const row_config = [3, 4, 5, 4, 3];

const port_config = {
    top: [
        { type: '', rotation: '' },
        { type: '3for1', rotation: '0deg' },
        { type: '', rotation: '' },
        { type: '3for1', rotation: '60deg' }
    ],
    ends: [
        { type: '2for1_sheep', rotation: '0deg', position: 1 },
        { type: '2for1_brick', rotation: '120deg', position: 2 },
        { type: '3for1', rotation: '-60deg', position: 1 },
        { type: '2for1_wood', rotation: '120deg', position: 2 },
        { type: '2for1_ore', rotation: '-120deg', position: 1 }
    ],
    bottom: [
        { type: '', rotation: '' },
        { type: '2for1_wheat', rotation: '-120deg' },
        { type: '', rotation: '' },
        { type: '3for1', rotation: '180deg' }
    ]
}