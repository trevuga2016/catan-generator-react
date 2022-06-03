import { Chip, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { useGameContext } from './game-context';

export const ScenarioSelect = ({ scenarios }) => {

  const { scenario, setScenario } = useGameContext();
  const enableDemo = process.env.NEXT_PUBLIC_ENABLE_DEMO === 'true';

  return(
    <FormControl size="small">
        <InputLabel>Scenario Selection</InputLabel>
        <Select value={scenario} onChange={(e) => setScenario(e?.target?.value)} label="Scenario Selection" sx={{ minWidth: 300 }}>
          {
            scenarios?.map((entry, i) => {
              return(
                  <MenuItem value={entry?.pageUrl} disabled={entry?.disabled} key={i}>{entry.title}</MenuItem>
                );
            })
          }
          {
            scenarios?.map((entry) => {
              return(
                entry?.expansions?.map((exp, i) => {
                  const pageUrl = [ entry?.pageUrl, exp?.fields?.expansionUrl ].toString();
                  return(
                    <MenuItem value={pageUrl} disabled={entry?.disabled} key={i}>
                      <Chip label="EXP" size="small" color="primary" sx={{ marginRight: 1}} />
                      {exp?.fields?.title}
                    </MenuItem>
                  );
                })
              );
            })
          }
          {
            enableDemo && <MenuItem value='demo'>Demo</MenuItem>
          }
        </Select>
        <FormHelperText sx={{ textAlign: 'right' }}>Required</FormHelperText>
    </FormControl>
  );
}

ScenarioSelect.displayName = 'ScenarioSelect';
