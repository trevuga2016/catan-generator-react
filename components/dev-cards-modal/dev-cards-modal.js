import { Grid, Modal, Paper, Typography } from '@mui/material';
import styles from './dev-cards.module.scss';
import Image from 'next/image';
import { Carousel } from './carousel';
import { useDevelopmentCards } from '../../hooks/useDevelopmentCards';
import ReactMarkdown from 'react-markdown';

export const DevCardsModal = ({ open, onClose }) => {

  const { devCards, isLoading } = useDevelopmentCards();

  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&h=215&fm=webp&q=${quality || 75}`
  }

  return(
    <Modal open={open} onClose={onClose}>
      <Paper className={styles["modal"]}>
        <Carousel title="Development Cards">
          {
            devCards?.map((card, i) => {
              return(
                <Grid container justifyContent="center" key={i}>
                  <Grid container direction="column" alignItems="center" textAlign="center" width="275px">
                    <Grid item sx={{ backgroundColor: 'indianred' }} width="100%" borderRadius="5px 5px 0 0">
                      <Typography variant="h6" color="white">&#8213;&nbsp;{card?.name}&nbsp;&#8213;</Typography>
                    </Grid>
                    <Image loader={imageLoader} src={`https:${card?.image}`} width={275} height={215} sx={{ zIndex: 1000 }} />
                    <Grid item sx={{ backgroundColor: 'indianred' }} borderRadius="0 0 5px 5px">
                      <ReactMarkdown>{card?.description}</ReactMarkdown>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })
          }
        </Carousel>
      </Paper>
    </Modal>
  );
}

DevCardsModal.displayName = "DevCardsModal";