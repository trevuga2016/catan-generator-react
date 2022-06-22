import { Grid, IconButton, MobileStepper, Slide } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useEffect, useState } from 'react';
import styles from './carousel.module.scss';

export const Carousel = ({ children }) => {

  const min = 0;
  const max = children?.length - 1;
  const [currentSlide, setCurrentSlide] = useState(min);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('left');
  const [touchstartX, setTouchstartX] = useState(0);
  const [touchendX, setTouchendX] = useState(0);

  const handleClickLeft = () => {
    const timeout = window.matchMedia("max-width: 930px").matches ? 200 : 300;
    setSlideDirection('left');
    setSlideIn(false);
    setTimeout(() => {
      currentSlide - 1 >= min ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(max);
      setSlideDirection('right');
      setSlideIn(true);
    }, timeout);
  }

  const handleClickRight = () => {
    const timeout = window.matchMedia("max-width: 930px").matches ? 200 : 300;
    setSlideDirection('right');
    setSlideIn(false);
    setTimeout(() => {
      currentSlide + 1 <= max ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(min);
      setSlideDirection('left');
      setSlideIn(true);
    }, timeout);
  }

  const checkDirection = () => {
    if (touchendX > touchstartX) {
      handleClickLeft();
    } if (touchendX < touchstartX) {
      handleClickRight();
    }
  }

  if (typeof window !== "undefined") {
    document.addEventListener('touchstart', e => {
      setTouchstartX(e.changedTouches[0].screenX);
    })
    document.addEventListener('touchend', e => {
      setTouchendX(e.changedTouches[0].screenX);
    })
  }

  useEffect(() => {
    checkDirection();
  }, [touchendX]);

  return(
    <>
      <Grid container direction="row" wrap="nowrap" className={styles["carousel"]}>
        <Grid item alignSelf="center" p={1}>
          <IconButton onClick={handleClickLeft} className={styles["carousel__navButtons"]}>
            <KeyboardArrowLeftIcon color="secondary" />
          </IconButton>
        </Grid>
        <Grid item xs justifyContent="center">
          <Slide in={slideIn} direction={slideDirection}>
            <Grid container direction="column" alignItems="center">
              <Grid item>{children?.[currentSlide]}</Grid>
            </Grid>
          </Slide>
        </Grid>
        <Grid item alignSelf="center" p={1}>
          <IconButton onClick={handleClickRight} className={styles["carousel__navButtons"]}>
            <KeyboardArrowRightIcon color="secondary" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container className={styles["carousel__stepper__cont"]}>
        <MobileStepper variant="dots" activeStep={currentSlide} steps={children?.length} className={styles["carousel__stepper"]} backButton={null} nextButton={null}/>
      </Grid>
    </>
  );
}

Carousel.displayName = "Carousel";