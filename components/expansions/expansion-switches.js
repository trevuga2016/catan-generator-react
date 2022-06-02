import { FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTitleContext } from '../../contexts/title-context';

export const ExpansionSwitches = ({ props }) => {

  const [ckCheck, setCkCheck] = useState(false);
  const { setTitle } = useTitleContext();
  const router = useRouter();

  const handleChange = (e) => {
    setCkCheck(e.target.checked);
    e.target.checked ? setTitle(props?.expansions?.[0]?.fields?.title) : setTitle(props?.title);
  }

  useEffect(() => {
    ckCheck && setTitle(props?.expansions?.[0]?.fields?.title);
  }, [ckCheck]);

  useEffect(() => {
    if (!router.isReady) return;
    if (router?.query['expansion']) {
      setCkCheck(true);
      setTitle(props?.expansions?.[0]?.fields?.title);
    } else {
      setTitle(props?.title);
    }
  }, [router.isReady]);

  return(
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="body2">&#x2550;&#x2550;&nbsp;Expansions&nbsp;&#x2550;&#x2550;</Typography>
      </Grid>
      <Grid container direction="row">
        <Grid item>
          <FormGroup>
            <FormControlLabel control={<Switch onChange={handleChange} checked={ckCheck} name="c&k" />} label="Cities & Knights" />
          </FormGroup>
        </Grid>
      </Grid>
    </Grid>
  );
}

ExpansionSwitches.displayName = 'ExpansionSwitches';