import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { useGameContext } from '../../contexts/game-context';
import { useEffect } from 'react';

export const HarborSelect = () => {

  const { setHarbors } = useGameContext();

  useEffect(() => {
    setHarbors('hide');
  }, []);

  return(
    <FormControl size="small">
      <Grid container direction="column" p={1}>
        <FormLabel sx={{ textAlign: 'center'}}>&#8213;&nbsp;Harbor Option&nbsp;&#8213;</FormLabel>
        <RadioGroup defaultValue="hide" onChange={(e) => setHarbors(e?.target?.value)} sx={{ alignContent: 'center' }}>
          <FormControlLabel value="hide" control={<Radio />} label="Hide Harbors" />
          <Grid container mt={-1}>
            <Typography variant="caption" lineHeight="1" textAlign="left" color="primary" fontFamily="Gill Sans !important">Hide the harbors from the board</Typography>
          </Grid>
          <FormControlLabel value="show" control={<Radio />} label="Default Harbors" />
          <Grid container mt={-1}>
            <Typography variant="caption" lineHeight="1" textAlign="left" color="primary" fontFamily="Gill Sans !important">Show the default out-of-the-box harbor setup</Typography>
          </Grid>
          <FormControlLabel value="randomize" control={<Radio />} label="Randomize Harbors" />
          <Grid container mt={-1}>
            <Typography variant="caption" lineHeight="1" textAlign="left" color="primary" fontFamily="Gill Sans !important">Randomize the location of the harbors</Typography>
          </Grid>
        </RadioGroup>
      </Grid>
    </FormControl>
  );
}

HarborSelect.displayName = 'HarborSelect';