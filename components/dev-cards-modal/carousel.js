import { Grid, IconButton, MobileStepper, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import styles from './dev-cards.module.scss';

export const Carousel = ({ title, children }) => {

  const min = 0;
  const max = children?.length - 1;
  const [currentSlide, setCurrentSlide] = useState(min);

  const handleClickLeft = () => {
    currentSlide - 1 >= min ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(max);
  }

  const handleClickRight = () => {
    currentSlide + 1 <= max ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(min);
  }

  return(
    <>
      <Grid container py={3} justifyContent="center">
        <Typography variant="h5">&#8213;&nbsp;{title}&nbsp;&#8213;</Typography>
      </Grid>
      <Grid container direction="row" wrap="nowrap" className={styles["carousel"]}>
        <Grid item alignSelf="center" p={1}>
          <IconButton onClick={handleClickLeft} sx={{ backgroundColor: "white" }}>
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid item xs justifyContent="center">
          <Grid container direction="column" alignItems="center">
            <Grid item>{children[currentSlide]}</Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="center" p={1}>
          <IconButton onClick={handleClickRight} sx={{ backgroundColor: "white" }}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container marginTop="35px">
        <MobileStepper variant="dots" activeStep={currentSlide} steps={children?.length} sx={{backgroundColor: '#E7E2AB', justifyContent: 'center', maxWidth: '100%'}} backButton={null} nextButton={null}/>
      </Grid>
    </>
  );
}

Carousel.displayName = "Carousel";