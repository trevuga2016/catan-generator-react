import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { useGameContext } from './game-context';

export const HarborSelect = ({ isDemo }) => {

  const { setHarbors } = useGameContext();

  return(
    <FormControl size="small" disabled={isDemo}>
      <Grid container direction="column" p={1}>
        <FormLabel sx={{ textAlign: 'center'}}>Select Harbor Option:</FormLabel>
        <RadioGroup defaultValue="hide" onChange={(e) => setHarbors(e?.target?.value)} sx={{ alignContent: 'center' }}>
          <FormControlLabel value="show" control={<Radio />} label="Show Default Harbors" />
          <FormControlLabel value="randomize" control={<Radio />} label="Randomize Harbors" />
          <FormControlLabel value="hide" control={<Radio />} label="Hide Harbors" />
        </RadioGroup>
      </Grid>
    </FormControl>
  );
}

HarborSelect.displayName = 'HarborSelect';