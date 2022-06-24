import { Box, Grid, Modal, Typography } from '@mui/material';
import styles from './hex-modal.module.scss';
import { useResources } from '../../hooks/useResources';
import { useEffect, useState } from 'react';
import { useHarbors } from '../../hooks/useHarbors';
import { useGameContext } from '../../contexts/game-context';

export const HexModal = ({ open, onClose, hex }) => {

  const { resources } = useResources();
  const { harbors } = useHarbors();
  const { scenario } = useGameContext();
  const [ activeResource, setActiveResource ] = useState(null);
  const [ resourceSubtext, setResourceSubtext ] = useState('');
  const [ backgroundImage, setBackgroundImage ] = useState(null);

  const setHarborDetails = () => {
    const harbor = harbors?.find(h => h?.id === hex?.resource);
    setActiveResource(harbor);
    setResourceSubtext(harbor?.type);
    setBackgroundImage(`https:${harbor?.cardImage}`);
  }

  const setResourceDetails = () => {
    const resource = resources?.find(r => r?.terrain === hex?.terrain);
    setActiveResource(resource);
    if (scenario?.scenarioUrl?.includes('ck') && resource?.commodity?.name) {
      setResourceSubtext(`Produce ${resource?.resource} and ${resource?.commodity?.name}`);
      setBackgroundImage(`https:${resource?.commodity?.cardImage}`);
    } else {
      resource?.resource === "Desert" ? setResourceSubtext('Produces Nothing') : setResourceSubtext(`Produce ${resource?.resource}`);
      setBackgroundImage(`https:${resource?.cardImage}`);
    }
  }

  const setSeaDetails = () => {
    const sea = resources?.find(r => r?.terrain === "Sea")
    setActiveResource(sea);
    setBackgroundImage(`https:${sea?.cardImage}`);
  }

  useEffect(() => {
    if (hex?.terrain === "Harbor") {
      setHarborDetails();
    } else if (hex?.terrain !== "") {
      setResourceDetails();
    } else {
      setSeaDetails();
    }
  });

  return(
    <Modal open={open} onClose={onClose}>
      <Box className={styles["modal"]} sx={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: '#83B5DA' }}>
        <Grid container direction="column" textAlign="center" pt={5}>
          <Typography variant="h4">&#8213;&nbsp;{activeResource?.terrain}&nbsp;&#8213;</Typography>
          <Typography variant="h6">{resourceSubtext}</Typography>
          { hex?.terrain === 'Harbor' && <Typography variant="h6" py={5} px={2}>{activeResource?.description}</Typography> }
        </Grid>
        {
          hex?.token?.probability?.value &&
          <Grid container direction="column" className={styles["modal__probability"]} pb={7}>
            <Typography variant="h6">Probability:</Typography>
            <Typography variant="h4">{hex?.token?.probability?.value}%</Typography>
          </Grid>
        }
      </Box>
    </Modal>
  );
}

HexModal.displayName = 'HexModal';