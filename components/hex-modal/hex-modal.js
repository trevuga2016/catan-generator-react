import { Box, Grid, Modal, Typography } from '@mui/material';
import styles from './hex-modal.module.scss';

export const HexModal = ({ open, onClose, hex }) => {

    let modalUrl = hex?.resource !== '' ? `url(../${hex?.resource}/card.jpg)` : 'url(../sea_card.jpg)';

    const formatResourceTitle = (resourceTitle) => {
      if (resourceTitle.startsWith('2for1')) {
        let arrayStr = resourceTitle.split('_');
        arrayStr[1] = arrayStr[1]?.charAt(0).toUpperCase() + arrayStr[1]?.substring(1);
        resourceTitle = `${arrayStr[0]} ${arrayStr[1]}`;
      }
      resourceTitle = resourceTitle?.includes('_') ? resourceTitle.replace('_', ' ') : resourceTitle;
      resourceTitle = resourceTitle?.includes('for') ? resourceTitle.replace('for', ' for ') : resourceTitle;
      return resourceTitle;
    }

    const getProbability = (hex) => {
      if (hex?.resource === 'Desert') {
        return (6 / 36);
      }
      let sNumber = hex?.token?.number;
      let number = parseInt(sNumber);
      if (number === 2 || number === 12) {
        return (1 / 36);
      } else if (number === 3 || number === 11) {
        return (2 / 36);
      } else if (number === 4 || number === 10) {
        return (3 / 36);
      } else if (number === 5 || number === 9) {
        return (4 / 36);
      } else if (number === 6 || number === 8) {
        return (5 / 36);
      }
    }

    const getHarborText = (hex) => {
      if (hex?.resource?.includes('3for1')) {
        return 'Trade 3 of any identical resource for 1 of any other resource';
      } else if (hex?.resource?.includes('2for1')) {
        let spec = hex?.resource?.split('_')[1];
        return `Trade 2 ${spec} for 1 of any other resource`;
      }
    }

    let resourceTitle = hex?.resource !== '' ? hex?.resource : 'Sea';
    resourceTitle = formatResourceTitle(resourceTitle);
    let terrainTitle = hex?.terrain !== '' ? hex?.terrain : 'Sea';
    let resourceText = hex?.terrain !== 'Harbor' ? `Produce ${resourceTitle}` : resourceTitle;
    resourceText = hex?.terrain === 'Desert' ? 'Produces Nothing' : resourceText;
    let probability = (getProbability(hex) * 100).toFixed(2);
    let harborText = hex?.terrain === 'Harbor' ? getHarborText(hex) : '';

    return(
        <Modal open={open} onClose={onClose}>
          <Box className={styles["modal"]} sx={{ backgroundImage: modalUrl }}>
              <Grid container direction="column" textAlign="center" pt={5}>
                <Typography variant="h4">{terrainTitle}</Typography>
                {hex?.terrain !== '' && <Typography variant="h6">{resourceText}</Typography>}
                {hex?.terrain === 'Harbor' && <Typography variant="h6" py={5} px={2}>{harborText}</Typography>}
              </Grid>
              {
                !isNaN(parseInt(probability)) &&
                <Grid container direction="column" className={styles["modal__probability"]} pb={7}>
                  <Typography variant="h6">Probability:</Typography>
                  <Typography variant="h4">{probability}%</Typography>
                </Grid>
              }
          </Box>
        </Modal>
    );
}

HexModal.displayName = 'HexModal';