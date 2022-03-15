import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const GameSelect = () => {

    const router = useRouter();
    const [game, setGame] = useState({ value: '' });
    const [port, setPort] = useState({ value: 'hide' });

    const handleChange = (e) => {
        const value = e.target.value;
        e.preventDefault();
        router.push(`/scenario/${value}`);
    }

    const changePortOption = (e) => {
        setPort({ value: e.target.value });
    }

    return (
        <form>
        <Grid container direction="column" alignItems="center">
            
            <Grid item>
                <select value={game.value} onChange={(e) => handleChange(e)}>
                    <option value='' disabled>Select Scenario</option>
                    <option value='catan'>The Settlers of Catan</option>
                    <option value='catan5_6ext'>Catan 5 & 6 Player Extension</option>
                </select>
            </Grid>
            <Grid item py={3}>
                <Grid container direction="column" spacing={1} width="fit-content">
                    Select Port Option:
                    <Grid item>
                        <input type="radio" id="port1" name="port" value="show" onChange={(e) => changePortOption(e)} />
                        <label htmlFor="port1">Show Default</label>
                    </Grid>
                    <Grid item>
                        <input type="radio" id="port2" name="port" value="randomize" onChange={(e) => changePortOption(e)} />
                        <label htmlFor="port2">Randomize</label>
                    </Grid>
                    <Grid item>
                        <input type="radio" id="port3" name="port" value="hide" onChange={(e) => changePortOption(e)} checked={port.value == 'hide'} />
                        <label htmlFor="port3">Hide</label>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <button type="submit">Submit</button>
            </Grid>
        </Grid>
        </form>
    );
}