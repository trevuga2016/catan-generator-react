import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share';
import { Grid } from '@mui/material';

export const ShareButtons = () => {

  const url = 'https://generatecatanboard.com/';

  return(
    <Grid container direction="row" spacing={1}>
      <Grid item>
        <FacebookShareButton url={url}><FacebookIcon round={true} size={30} /></FacebookShareButton>
      </Grid>
      <Grid item>
        <TwitterShareButton url={url}><TwitterIcon round={true} size={30} /></TwitterShareButton>
      </Grid>
      <Grid item>
        <RedditShareButton url={url}><RedditIcon round={true} size={30} /></RedditShareButton>
      </Grid>
      <Grid item>
        <TumblrShareButton url={url}><TumblrIcon round={true} size={30} /></TumblrShareButton>
      </Grid>
    </Grid>
  );
}

ShareButtons.displayName = 'ShareButtons';