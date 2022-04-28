import { Grid, Link, Tooltip, Typography } from '@mui/material';
import styles from './footer.module.scss';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';

export const Footer = () => {

    const router = useRouter();

    const onClick = () => {
        router.push('/legal');
    }

    const useStyles = makeStyles({
      tooltip: {
        fontFamily: "Gill Sans !important",
      },
    });

    const classes = useStyles();

    return(
        <Grid container direction="row" className={styles["footer"]}>
            <Grid xs={6} item textAlign="left">
                <Link onClick={onClick} color="secondary" sx={{ cursor: "pointer" }}><Typography variant="body2">LEGAL</Typography></Link>
            </Grid>
            <Tooltip title="Hey Rebecca :)" placement="top-end" classes={{tooltip: classes.tooltip}}>
            <Grid xs={6} item textAlign="right">
                <Typography variant="body2">2022 &copy; Trevor Richardson</Typography>
            </Grid>
            </Tooltip>
        </Grid>
    );
}

Footer.displayName = 'Footer';

