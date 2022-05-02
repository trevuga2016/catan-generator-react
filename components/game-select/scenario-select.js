import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { useGameContext } from './game-context';

export const ScenarioSelect = () => {

  const { scenario, setScenario } = useGameContext();
  const enableDemo = process.env.NEXT_PUBLIC_ENABLE_DEMO === 'true';

  return(
    <FormControl size="small">
        <InputLabel>Scenario</InputLabel>
        <Select value={scenario} onChange={(e) => setScenario(e?.target?.value)} label="Scenario" sx={{ minWidth: 300 }}>
            <MenuItem value='catan'>The Settlers of Catan</MenuItem>
            <MenuItem value='catan5_6ext'>Catan 5 & 6 Player Extension</MenuItem>
            {
              enableDemo && <MenuItem value='demo'>Demo</MenuItem>
            }
            <MenuItem value='' disabled>More coming soon!</MenuItem>
        </Select>
        <FormHelperText sx={{ textAlign: 'right' }}>Required</FormHelperText>
    </FormControl>
  );
}

ScenarioSelect.disabled = 'ScenarioSelect';
