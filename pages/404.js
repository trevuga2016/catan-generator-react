import Head from 'next/head';
import { Button, Grid, Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import { Header } from '../components/header/header';
import { useTitleContext } from '../contexts/title-context';
import { useEffect } from 'react';
import { useBackgroundProps } from '../hooks/useBackgroundProps';
import { useNotFoundPageContent } from '../hooks/useNotFoundPageContent';
import Image from 'next/image';

export const Custom404 = () => {

  const router = useRouter();
  const { title, setTitle } = useTitleContext();
  const { setBackgroundImage, setBackgroundColor } = useBackgroundProps();
  const { notFoundPageContent, isLoading } = useNotFoundPageContent();

  useEffect(() => {
    setTitle(notFoundPageContent?.title);
    setBackgroundImage(notFoundPageContent?.backgroundImage);
    setBackgroundColor(notFoundPageContent?.backgroundColor);
  });

  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&h=415&fm=webp&q=${quality || 75}`
  }

  return(
    !isLoading ?
    <Grid container direction="column" alignItems="center" position="absolute">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Grid item>
          <Header />
      </Grid>
      <Grid item mb={2}>
          <Typography variant="body1">{notFoundPageContent?.message}</Typography>
      </Grid>
      <Grid item mb={2}>
        <Image loader={imageLoader} src={`https:${notFoundPageContent?.errorPicture?.url}`} width={278} height={415} alt={notFoundPageContent?.errorPicture?.altText} />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => router.push('/')} size="small" endIcon={<HomeIcon />} sx={{ fontFamily: 'Gill Sans !important' }}>
          Home
        </Button>
      </Grid>
    </Grid> :
      <Grid container direction="column" alignItems="center" position="absolute">
        <Grid item pt={2}>
          <Skeleton variant="text" width="50vw" height={75} animation="wave" />
        </Grid>
        <Grid item>
          <Skeleton variant="text" width="50vw" height={40} animation="wave" />
        </Grid>
        <Grid item my={2}>
          <Skeleton variant="rectangular" width={278} height={415} animation="wave" />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => router.push('/')} size="small" endIcon={<HomeIcon />} sx={{ fontFamily: 'Gill Sans !important' }}>
            Home
          </Button>
        </Grid>
      </Grid>
    ); 
}

export default Custom404;

Custom404.displayName = 'Custom404';