import { Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ConstructionIcon from '@mui/icons-material/Construction';
import styles from './game-select.module.scss';

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
                    <option value='' disabled>More coming soon!</option>
                </select>
            </Grid>
            <Grid item py={3}>
                <Grid container direction="column" spacing={1} width="fit-content">
                    <Typography variant="body1" textAlign="center">Select Harbor Option:</Typography>
                    <Grid item>
                        <input type="radio" id="port1" name="port" value="show" onChange={(e) => handlePortChange(e)} />
                        <label htmlFor="port1" title="Show the default, out of the box, harbor setup">Show Default Harbors</label>
                    </Grid>
                    <Grid item>
                        <input type="radio" id="port2" name="port" value="randomize" onChange={(e) => handlePortChange(e)} />
                        <label htmlFor="port2" title="Harbors are completely randomized">Randomize Harbors</label>
                    </Grid>
                    <Grid item>
                        <input type="radio" id="port3" name="port" value="hide" onChange={(e) => handlePortChange(e)} checked={port.value === 'hide'} />
                        <label htmlFor="port3" title="Harbors are not displayed">Hide Harbors</label>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button variant="contained" type="submit" size="small" endIcon={<AutorenewIcon />} className={styles["button"]}>Generate</Button>
            </Grid>
            {
                enableDemo &&
                <Grid item pt={4}>
                    <Button variant="contained" onClick={goToDemo} size="small" endIcon={<ConstructionIcon />} className={styles["button"]}>Demo</Button>
                </Grid>
            }
        </Grid>
        </form>
    );
}