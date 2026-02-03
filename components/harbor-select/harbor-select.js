import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from '@mui/material';
import {useGameContext} from '../../contexts/game-context';
import {useEffect} from 'react';

export const HarborSelect = () => {

  const { setHarbors } = useGameContext();

  useEffect(() => {
    setHarbors('hide');
  }, []);

  return(
    <FormControl size="small">
      <Grid container direction="column" p={1}>
        <FormLabel sx={{ textAlign: 'center'}}>&#8213;&nbsp;Harbor Options&nbsp;&#8213;</FormLabel>
        <RadioGroup defaultValue="hide" onChange={(e) => setHarbors(e?.target?.value)} sx={{ alignContent: 'center' }}>
          <FormControlLabel value="hide" control={<Radio />} label="Hide Harbors" />
          <FormControlLabel value="show" control={<Radio />} label="Show Default Harbors" />
          <FormControlLabel value="randomize" control={<Radio />} label="Randomize Harbors" />
        </RadioGroup>
      </Grid>
    </FormControl>
  );
}

HarborSelect.displayName = 'HarborSelect';