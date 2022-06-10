import { Grid, Link, Tooltip, Typography } from '@mui/material';
import styles from './footer.module.scss';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { useFooterContent } from '../../hooks/useFooterContent';

export const Footer = () => {

    const router = useRouter();
    const { footerContent, isLoading } = useFooterContent();

    const useStyles = makeStyles({
      tooltip: {
        fontFamily: "Gill Sans !important",
      },
    });

    const classes = useStyles();

    return(
        <Grid container direction="row" className={styles["footer"]}>
          {
            !isLoading && footerContent?.map((content, k) => {
              const textAlignment = k % 2 ? 'right' : 'left';
              return(
                <Grid item xs textAlign={textAlignment} key={k}>
                  {
                    content?.fields?.text &&
                    <Tooltip title={content?.fields?.text} placement="top-end" classes={{tooltip: classes.tooltip}}>
                      <Typography variant="body2">{content?.fields?.title}</Typography>
                    </Tooltip>
                  }
                  {
                    content?.fields?.url &&
                    <Link onClick={() => router.push(content?.fields?.url)} color="secondary" sx={{ cursor: "pointer" }}>
                      <Typography variant="body2">{content?.fields?.title}</Typography>
                    </Link>
                  }
                </Grid>
              );
            })
          }
        </Grid>
    );
}

Footer.displayName = 'Footer';

