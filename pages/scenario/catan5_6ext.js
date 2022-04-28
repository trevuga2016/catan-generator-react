import { GameBoard } from '../../components/game-board/game-board';

export const Catan5_6Ext = () => {

    const title = 'Catan 5 & 6 Player Extension';

    let props = { numbers_freq, resources_freq, row_config, port_config, title };

    return(
        <GameBoard props={props} />
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
    'Grain': 6,
    'Lumber': 6,
    'Wool': 6,
    'Brick': 5,
    'Ore': 5,
    'Desert': 2
};

const row_config = [3, 4, 5, 6, 5, 4, 3];

const port_config = {
    top: [
        { type: '3for1', rotation: 'br' },
        { type: '', rotation: '' },
        { type: '2for1_wool', rotation: 'bl' },
        { type: '', rotation: '' }
    ],
    ends: [
        [{ type: '', rotation: '', position: 1 }, { type: '3for1', rotation: 'bl', position: 2 }],
        [{ type: '', rotation: '', position: 1 }, { type: '', rotation: '', position: 2 }],
        [{ type: '2for1_ore', rotation: 'r', position: 1 }, { type: '', rotation: '', position: 2 }],
        [{ type: '', rotation: '', position: 1 }, { type: '3for1', rotation: 'l', position: 2 }],
        [{ type: '3for1', rotation: 'tr', position: 1 }, { type: '', rotation: '', position: 2 }],
        [{ type: '2for1_grain', rotation: 'r', position: 1 }, { type: '2for1_brick', rotation: 'tl', position: 2 }],
        [{ type: '', rotation: '', position: 1 }, { type: '2for1_wool', rotation: 'l', position: 2 }]
    ],
    bottom: [
        { type: '3for1', rotation: 'tr' },
        { type: '', rotation: '' },
        { type: '2for1_lumber', rotation: 'tl' },
        { type: '', rotation: '' }
    ]
}

Catan5_6Ext.displayName = 'Catan5_6Ext';
