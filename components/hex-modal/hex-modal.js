import { Box, Grid, Modal, Typography } from '@mui/material';
import styles from './hex-modal.module.scss';
import { useResources } from '../../hooks/useResources';
import { useEffect, useState } from 'react';
import { useHarbors } from '../../hooks/useHarbors';

export const HexModal = ({ open, onClose, hex }) => {

  const { resources } = useResources();
  const { harbors } = useHarbors();
  const [ activeResource, setActiveResource ] = useState(null);
  const [ resourceSubtext, setResourceSubtext ] = useState('');
  const [ backgroundImage, setBackgroundImage ] = useState(null);

  useEffect(() => {
    if (hex?.terrain === "Harbor") {
      const harbor = harbors?.find(h => h?.id === hex?.resource);
      setActiveResource(harbor);
      setResourceSubtext(harbor?.type);
      setBackgroundImage(`https:${harbor?.cardImage}`);
    } else if (hex?.terrain !== "") {
      const resource = resources?.find(r => r?.terrain === hex?.terrain);
      setActiveResource(resource);
      resource?.resource === "Desert" ? setResourceSubtext('Produces Nothing') : setResourceSubtext(`Produce ${resource?.resource}`);
      setBackgroundImage(`https:${resource?.cardImage}`);
    } else {
      const sea = resources?.find(r => r?.terrain === "Sea")
      setActiveResource(sea);
      setBackgroundImage(`https:${sea?.cardImage}`);
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