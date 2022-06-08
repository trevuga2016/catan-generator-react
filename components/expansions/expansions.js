import { FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import { ExpansionSwitch } from './expansion-switch';

export const Expansions = ({ props }) => {
  return(
      <Grid container direction="row" justifyContent="center" textAlign="center">
        <Grid item xs={12}>
          <Typography variant="body2">&#8213;&nbsp;Expansions&nbsp;&#8213;</Typography>
        </Grid>
        {
          props?.expansions?.map((expansion, i) => {
            return(
              <Grid item key={i}>
                <FormGroup>
                  <FormControlLabel control={<ExpansionSwitch expansionProps={expansion} parentTitle={props?.title} />} label={expansion?.fields?.expansionName} />
                </FormGroup>
              </Grid>
            );
          })
        }
      </Grid>
  );
}

Expansions.displayName = 'Expansions';