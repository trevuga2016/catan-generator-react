import Head from 'next/head';
import { Button, Grid, Skeleton } from '@mui/material';
import { Header } from '../components/header/header';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect } from 'react';
import { useBackgroundProps } from '../hooks/useBackgroundProps';
import { useLegalPageContent } from '../hooks/useLegalPageContent';
import ReactMarkdown from 'react-markdown';

export const Legal = () => {

  const router = useRouter();
  const { setBackgroundImage, setBackgroundColor } = useBackgroundProps();
  const { legalPageContent, isLoading } = useLegalPageContent();

  useEffect(() => {
    setBackgroundImage(legalPageContent?.backgroundImage);
    setBackgroundColor(legalPageContent?.backgroundColor);
  });

  return(
    !isLoading ?
    <Grid container direction="column" alignItems="center" textAlign="center" position="absolute">
      <Head>
        <title>{legalPageContent?.title} | Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Grid item>
        <Header title={legalPageContent?.title} />
      </Grid>
      <Grid item px={2}>
        <ReactMarkdown>{legalPageContent?.message}</ReactMarkdown>
      </Grid>
      <Grid item py={1}>
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
        <Skeleton variant="text" width="50vw" height={150} animation="wave" />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => router.push('/')} size="small" endIcon={<HomeIcon />} sx={{ fontFamily: 'Gill Sans !important' }}>
          Home
        </Button>
      </Grid>
    </Grid>
  );
}

export default Legal;

Legal.displayName = 'Legal';