import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const GameSelect = () => {

    const router = useRouter();
    const [game, setGame] = useState({ value: '' });
    const [port, setPort] = useState({ value: 'hide' });
    const [scenario, setScenario] = useState('');
    let enableDemo = process.env.NEXT_PUBLIC_ENABLE_DEMO === 'true';

    const handleGameChange = (e) => {
        setGame({ value: e.target.value });
    }

    const handlePortChange = (e) => {
        setPort({ value: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(scenario);
    }

    const goToDemo = () => {
     router.push('/scenario/demo');
    }

    useEffect(() => {
        setScenario(`/scenario/${game.value}?ports=${port.value}`);
    }, [game, port]);

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <select value={game.value} onChange={(e) => handleGameChange(e)} required>
                    <option value='' disabled>Select Scenario</option>
                    <option value='catan'>The Settlers of Catan</option>
                    <option value='catan5_6ext'>Catan 5 & 6 Player Extension</option>
                </select>
            </Grid>
            <Grid item py={3}>
                <Grid container direction="column" spacing={1} width="fit-content">
                    Select Port Option:
                    <Grid item>
                        <input type="radio" id="port1" name="port" value="show" onChange={(e) => handlePortChange(e)} />
                        <label htmlFor="port1">Show Default</label>
                    </Grid>
                    <Grid item>
                        <input type="radio" id="port2" name="port" value="randomize" onChange={(e) => handlePortChange(e)} />
                        <label htmlFor="port2">Randomize</label>
                    </Grid>
                    <Grid item>
                        <input type="radio" id="port3" name="port" value="hide" onChange={(e) => handlePortChange(e)} checked={port.value === 'hide'} />
                        <label htmlFor="port3">Hide</label>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <button type="submit">Generate</button>
            </Grid>
            {
                enableDemo &&
                <Grid item pt={4}>
                    <button type="submit" onClick={goToDemo}>Demo</button>
                </Grid>
            }
        </Grid>
        </form>
    );
}