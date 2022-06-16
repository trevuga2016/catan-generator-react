import { Grid, Modal, Paper, Typography } from '@mui/material';
import styles from './dev-cards.module.scss';
import Image from 'next/image';
import { Carousel } from '../carousel/carousel';
import { useDevelopmentCards } from '../../hooks/useDevelopmentCards';
import ReactMarkdown from 'react-markdown';

export const DevCards = ({ open, onClose }) => {

  const { devCards } = useDevelopmentCards();

  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&h=215&fm=webp&q=${quality || 75}`
  }

  return(
    <Modal open={open} onClose={onClose}>
      <Paper className={styles["dev-cards"]}>
        <Carousel title="Development Cards">
          {
            devCards?.map((card, i) => {
              return(
                <Grid container justifyContent="center" key={i}>
                  <Grid container direction="column" className={styles["dev-cards__container"]}>
                    <Grid item className={styles["dev-cards__container__name"]}>
                      <Typography variant="h6">&#8213;&nbsp;{card?.name}&nbsp;&#8213;</Typography>
                    </Grid>
                    <Image loader={imageLoader} src={`https:${card?.image}`} width={275} height={215} />
                    <Grid item className={styles["dev-cards__container__desc"]}>
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

DevCards.displayName = "DevCardsModal";