import { Button, Chip, Grid, IconButton, Icon, Modal, Paper, Typography } from '@mui/material';
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

  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&h=215&fm=webp&q=${quality || 75}`
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
              <Grid container direction="row" alignItems="center" py={2} px={1}>
                <Grid item xs={1}>
                  <IconButton color="primary" onClick={() => setShowCategory(false)}>
                    <ArrowBackIcon/>
                  </IconButton>
                </Grid>
                <Grid item xs textAlign="center">
                  <Typography variant="h5" whiteSpace="nowrap">&#8213;&nbsp;{category?.title}&nbsp;&#8213;</Typography>
                </Grid>
                <Grid item xs={1} borderRadius="5px" border={`1px solid #${category?.color}`}>
                  <Image src={`https:${category?.icon}?fm=webp`} width={40} height={40} layout="responsive" alt={`${category?.title}_cards`}/>
                </Grid>
              </Grid>
              <Carousel>
                {
                  progressCards?.filter(card => card?.category === category?.title)?.sort((a, b) => a?.name?.localeCompare(b?.name))?.map((c, i) => {
                    return (
                      <Grid container justifyContent="center" key={i}>
                        <Grid container direction="column" border={`2px solid #${category?.color}`} sx={{ backgroundColor: `#${category?.color}7F !important` }} className={styles["progress-cards__container"]}>
                          <Grid item color={category?.textColor} className={styles["progress-cards__container__name"]}>
                            <Grid container justifyContent="flex-end">
                              <Chip label={c?.noOfCards} size="small" color={category?.chipColor} title="Number of Cards" className={styles["progress-cards__container__chip"]}/>
                            </Grid>
                            <Typography variant="h6">&#8213;&nbsp;{c?.name}&nbsp;&#8213;</Typography>
                          </Grid>
                          <Image loader={imageLoader} src={`https:${c?.image}`} width={275} height={215} loading="lazy"/>
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