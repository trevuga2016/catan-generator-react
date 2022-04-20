import { Grid, Link, Tooltip } from '@mui/material';
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
            <Grid xs={6} item align="left">
                <Link onClick={onClick} sx={{ cursor: "pointer" }}>LEGAL</Link>
            </Grid>
            <Tooltip title="Hey Rebecca :)" placement="top-end" classes={{tooltip: classes.tooltip}}>
            <Grid xs={6} item align="right">
                2022 &copy; Trevor Richardson
            </Grid>
            </Tooltip>
        </Grid>
    );
}

Footer.displayName = 'Footer';

