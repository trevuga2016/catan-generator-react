import {Button, Chip, Grid, IconButton, Icon, Modal, Paper, Typography, Box} from '@mui/material';
import styles from './progress-cards.module.scss';
import { useEffect, useState } from 'react';
import { Carousel } from '../carousel/carousel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useProgressCards } from '../../hooks/useProgressCards';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useProgressCategories } from '../../hooks/useProgressCategories';

export const ProgressCards = ({ open, onClose }) => {

  const { progressCards } = useProgressCards();
  const { progressCategories } = useProgressCategories();
  const [ showCategory, setShowCategory ] = useState(false);
  const [ category, setCategory ] = useState(null);

  const handleOnClick = (category) => {
    setShowCategory(true);
    setCategory(category);
  }

  useEffect(() => {
    setShowCategory(false);
    return(() => {
      setShowCategory(false);
      setCategory(null);
    })
  }, [ onClose ]);

  return (
    <Modal open={open} onClose={onClose}>
      <Paper className={styles["progress-cards"]}>
        {
          !showCategory ?
            <Grid container justifyContent="center" p={3} className={styles["progress-cards__menu"]}>
              <Typography variant="h5">&#8213;&nbsp;Progress Cards&nbsp;&#8213;</Typography>
              <Grid container direction="row" justifyContent="center" textAlign="center" pt={2} spacing={2}>
                {
                  progressCategories?.map((cat, i) => {
                    return (
                      <Grid item xs={6} key={i}>
                        <Button variant="contained" onClick={() => handleOnClick(cat)} sx={{ backgroundColor: `#${cat?.color} !important`, color: `${cat?.textColor} !important` }} size="small" endIcon={<Icon>{cat?.buttonIcon}</Icon>}>
                          {cat?.title}
                        </Button>
                      </Grid>
                    )
                  })
                }
              </Grid>
            </Grid> :
            <>
              <Grid container direction="row" alignItems="center" py={2} px={2}>
                <Grid item size={1}>
                  <IconButton color="primary" onClick={() => setShowCategory(false)}>
                    <ArrowBackIcon/>
                  </IconButton>
                </Grid>
                <Grid item size="grow" textAlign="center">
                  <Typography variant="h5" whiteSpace="nowrap">&#8213;&nbsp;{category?.title}&nbsp;&#8213;</Typography>
                </Grid>
                <Grid item size="auto">
                  <Box sx={{ width: 40, height: 40, borderRadius: '5px', border: `1px solid #${category?.color}` }}>
                    <Image src={category?.icon} width={40} height={40} alt={`${category?.title}_cards`}/>
                  </Box>
                </Grid>
              </Grid>
              <Carousel>
                {
                  progressCards?.filter(card => card?.category === category?.title)?.sort((a, b) => a?.name?.localeCompare(b?.name))?.map((c, i) => {
                    return (
                      <Grid container direction="column" justifyContent="center" border={`2px solid #${category?.color}`} sx={{ backgroundColor: `#${category?.color}7F !important` }} className={styles["progress-cards__container"]} key={i}>
                        <Grid item className={styles["progress-cards__container__name"]}>
                          <Grid container justifyContent="flex-end">
                            <Chip label={c?.noOfCards} size="small" color={category?.chipColor} title="Number of Cards" className={styles["progress-cards__container__chip"]}/>
                          </Grid>
                          <Typography variant="h6">&#8213;&nbsp;{c?.name}&nbsp;&#8213;</Typography>
                        </Grid>
                        <Grid item>
                          <Box sx={{ width: 271, height: 215 }}>
                            <Image src={c?.image} width={271} height={215} loading="lazy" alt="Progress card"/>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Grid container className={styles["progress-cards__container__desc"]}>
                            <ReactMarkdown>{c?.description}</ReactMarkdown>
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