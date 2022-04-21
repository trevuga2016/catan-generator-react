import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select
} from '@mui/material';
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
    const [disabled, setDisabled] = useState(true);
    let enableDemo = process.env.NEXT_PUBLIC_ENABLE_DEMO === 'true';

    const handleGameChange = (e) => {
        setGame({ value: e.target.value });
        setDisabled(false);
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

    return(
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <FormControl size="small">
              <InputLabel>Scenario</InputLabel>
              <Select value={game.value} onChange={(e) => handleGameChange(e)} label="Scenario" sx={{ minWidth: 300 }}>
                  <MenuItem value='catan'>The Settlers of Catan</MenuItem>
                  <MenuItem value='catan5_6ext'>Catan 5 & 6 Player Extension</MenuItem>
                  <MenuItem value='' disabled>More coming soon!</MenuItem>
              </Select>
              <FormHelperText sx={{ textAlign: 'right' }}>Required</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl size="small">
              <Grid container direction="column" p={1}>
                  <FormLabel sx={{ textAlign: 'center'}}>Select Harbor Option:</FormLabel>
                  <RadioGroup defaultValue="hide" onChange={(e) => handlePortChange(e)} sx={{ alignContent: 'center' }}>
                      <FormControlLabel value="show" control={<Radio />} label="Show Default Harbors" />
                      <FormControlLabel value="randomize" control={<Radio />} label="Randomize Harbors" />
                      <FormControlLabel value="hide" control={<Radio />} label="Hide Harbors" />
                  </RadioGroup>
              </Grid>
          </FormControl>
        </Grid>
        <Grid item width="100%">
          <Button variant="contained" onClick={handleSubmit} disabled={disabled} size="small" endIcon={<AutorenewIcon />} className={styles["button"]}>
            Generate
          </Button>
        </Grid>
        {
          enableDemo &&
          <Grid item pt={4}>
            <Button variant="contained" onClick={goToDemo} size="small" endIcon={<ConstructionIcon />} className={styles["button"]}>Demo</Button>
          </Grid>
        }
      </Grid>
    );
}