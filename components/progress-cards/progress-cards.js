import { Button, Chip, Grid, IconButton, Modal, Paper, Typography } from '@mui/material';
import styles from './progress-cards.module.scss';
import BiotechIcon from '@mui/icons-material/Biotech';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BalanceIcon from '@mui/icons-material/Balance';
import { useEffect, useState } from 'react';
import { Carousel } from '../carousel/carousel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useProgressCards } from '../../hooks/useProgressCards';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export const ProgressCards = ({ open, onClose }) => {

  const { progressCards, isLoading } = useProgressCards();
  const [showCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState(null);

  const handleOnClick = (category) => {
    setShowCategory(true);
    setCategory(category);
  }

  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&h=215&fm=webp&q=${quality || 75}`
  }

  useEffect(() => {
    setShowCategory(false);
  }, [onClose]);

  return(
    <Modal open={open} onClose={onClose}>
      <Paper className={styles["progress-cards"]}>
        {
          !showCategory ?
            <Grid container justifyContent="center" p={3} className={styles["progress-cards__menu"]}>
              <Typography variant="h5">&#8213;&nbsp;Progress Cards&nbsp;&#8213;</Typography>
              <Grid container direction="row" justifyContent="center" textAlign="center" pt={2} spacing={2}>
                <Grid item xs={6}>
                  <Button variant="contained" onClick={() => handleOnClick("Science")} sx={{ backgroundColor: 'green !important', color: 'white !important'}} size="small" endIcon={<BiotechIcon />}>
                    Science
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" onClick={() => handleOnClick("Trade")} sx={{ backgroundColor: 'gold !important', color: 'black !important'}} size="small" endIcon={<AccountBalanceIcon />}>
                    Trade
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" onClick={() => handleOnClick("Politics")} sx={{ backgroundColor: 'blue !important', color: 'white !important'}} size="small" endIcon={<BalanceIcon />}>
                    Politics
                  </Button>
                </Grid>
              </Grid>
            </Grid> :
            <>
              <IconButton color="primary" sx={{ marginTop: '4px', marginLeft: '4px', marginBottom: '-34px', zIndex: 1000}} onClick={() => setShowCategory(false)}>
                <ArrowBackIcon />
              </IconButton>
              <Carousel title={category}>
                {
                  progressCards?.filter(card => card?.category === category)?.sort((a, b) => a?.name?.localeCompare(b?.name))?.map((c, i) => {
                    const border = `2px solid #${c?.cardColor}`;
                    const bgColor = `#${c?.cardColor}7F`;
                    const textColor = c?.category === 'Trade' ? 'black' : 'white';
                    const chipColor = c?.category === 'Trade' ? 'primary' : 'secondary';
                    return(
                      <Grid container justifyContent="center" key={i}>
                        <Grid container direction="column" border={border} sx={{ backgroundColor: `${bgColor} !important`}} className={styles["progress-cards__container"]}>
                          <Grid item color={textColor} className={styles["progress-cards__container__name"]}>
                            <Grid container justifyContent="flex-end">
                              <Chip label={c?.noOfCards} size="small" color={chipColor} title="Number of Cards" className={styles["progress-cards__container__chip"]} />
                            </Grid>
                            <Typography variant="h6">&#8213;&nbsp;{c?.name}&nbsp;&#8213;</Typography>
                          </Grid>
                          <Image loader={imageLoader} src={`https:${c?.image}`} width={275} height={215} loading="lazy" />
                          <Grid item>
                            <Grid container className={styles["progress-cards__container__desc"]}>
                              <ReactMarkdown>{c?.description}</ReactMarkdown>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    )
                  })
                }
              </Carousel>
            </>
        }
      </Paper>
    </Modal>
  );
}

ProgressCards.displayName = 'ProgressCards';