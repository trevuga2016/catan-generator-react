import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { useGameContext } from './game-context';

export const HarborSelect = ({ isDemo, isScenarioSelect }) => {

  const { setHarbors } = useGameContext();

  return(
    <FormControl size="small" disabled={isDemo}>
      <Grid container direction="column" p={1}>
        <FormLabel sx={{ textAlign: 'center'}}>Harbor Option</FormLabel>
        <RadioGroup defaultValue="hide" onChange={(e) => setHarbors(e?.target?.value)} sx={{ alignContent: 'center' }}>
          <FormControlLabel value="hide" control={<Radio />} label="Hide Harbors" />
          {isScenarioSelect &&
            <Grid container mt={-1}>
              <Typography variant="caption" lineHeight="1" textAlign="left" color="primary" fontFamily="Gill Sans !important">Hide the harbors from the board</Typography>
            </Grid>
          }
          <FormControlLabel value="show" control={<Radio />} label="Default Harbors" />
          {isScenarioSelect &&
            <Grid container mt={-1}>
              <Typography variant="caption" lineHeight="1" textAlign="left" color="primary" fontFamily="Gill Sans !important">Show the default out-of-the-box harbor setup</Typography>
            </Grid>
          }
          <FormControlLabel value="randomize" control={<Radio />} label="Randomize Harbors" />
          {isScenarioSelect &&
            <Grid container mt={-1}>
              <Typography variant="caption" lineHeight="1" textAlign="left" color="primary" fontFamily="Gill Sans !important">Randomize the location of the harbors</Typography>
            </Grid>
          }
        </RadioGroup>
      </Grid>
    </FormControl>
  );
}

HarborSelect.displayName = 'HarborSelect';