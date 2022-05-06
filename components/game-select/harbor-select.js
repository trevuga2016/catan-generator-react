import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { useGameContext } from './game-context';

export const HarborSelect = ({ isDemo, isScenarioSelect }) => {

  const { setHarbors } = useGameContext();

  return(
    <FormControl size="small" disabled={isDemo}>
      <Grid container direction="column" p={1}>
        <FormLabel sx={{ textAlign: 'center'}}>Select Harbor Option:</FormLabel>
        <RadioGroup defaultValue="hide" onChange={(e) => setHarbors(e?.target?.value)} sx={{ alignContent: 'center' }}>
          <FormControlLabel value="show" control={<Radio />} label="Default Harbors" />
          {isScenarioSelect &&
            <Typography variant="caption" lineHeight="1" textAlign="left" color="primary">Show the default out-of-the-box harbor setup</Typography>}
          <FormControlLabel value="randomize" control={<Radio />} label="Randomize Harbors" />
          {isScenarioSelect &&
            <Typography variant="caption" lineHeight="1" textAlign="left" color="primary">Randomize the location of the harbors</Typography>}
          <FormControlLabel value="hide" control={<Radio />} label="Hide Harbors" />
          {isScenarioSelect &&
            <Typography variant="caption" lineHeight="1" textAlign="left" color="primary">Hide the harbors from the board</Typography>}
        </RadioGroup>
      </Grid>
    </FormControl>
  );
}

HarborSelect.displayName = 'HarborSelect';