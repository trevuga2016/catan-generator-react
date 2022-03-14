import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const GameSelect = () => {

    const router = useRouter();
    const [game, setGame] = useState({ value: '' });

    const handleChange = (e) => {
        const value = e.target.value;
        e.preventDefault();
        router.push(`/scenario/${value}`);
    }

    return (
        <Grid container direction="column" align="center" display="flex">
            <form>
                <select value={game.value} onChange={(e) => handleChange(e)}>
                    <option value='' disabled>Select Scenario</option>
                    <option value='catan'>The Settlers of Catan</option>
                    <option value='catan5_6ext'>Catan 5 & 6 Player Extension</option>
                </select>
            </form>
        </Grid>
    );
}