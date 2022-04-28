import { GameBoard } from '../../components/game-board/game-board';

export const Catan = () => {

    const title = 'The Settlers of Catan';

    let props = { numbers_freq, resources_freq, row_config, port_config, title };

    return(
        <GameBoard props={props} />
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
    'Grain': 4,
    'Lumber': 4,
    'Wool': 4,
    'Brick': 3,
    'Ore': 3,
    'Desert': 1
};

const row_config = [3, 4, 5, 4, 3];

const port_config = {
    top: [
        { type: '', rotation: '' },
        { type: '3for1', rotation: 'br' },
        { type: '', rotation: '' },
        { type: '3for1', rotation: 'bl' }
    ],
    ends: [
        [{ type: '2for1_wool', rotation: 'br', position: 1 }, { type: '', rotation: '', position: 2 }],
        [{ type: '', rotation: '', position: 1 }, { type: '2for1_brick', rotation: 'l', position: 2 }],
        [{ type: '3for1', rotation: 'r', position: 1 }, { type: '', rotation: '', position: 2 }],
        [{ type: '', rotation: '', position: 1 }, { type: '2for1_lumber', rotation: 'l', position: 2 }],
        [{ type: '2for1_ore', rotation: 'tr', position: 1 }, { type: '', rotation: '', position: 2 }]
    ],
    bottom: [
        { type: '', rotation: '' },
        { type: '2for1_grain', rotation: 'tr' },
        { type: '', rotation: '' },
        { type: '3for1', rotation: 'tl' }
    ]
}

Catan.displayName = 'Catan';
