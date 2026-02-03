import {Grid, Link, Tooltip} from '@mui/material';
import {useRouter} from 'next/router';
import {makeStyles} from '@mui/styles';

export const Footer = () => {

    const router = useRouter();

    const useStyles = makeStyles({
      tooltip: {
        fontFamily: "Gill Sans !important",
      },
    });

    const classes = useStyles();

    return(
        <Grid container direction="row" pb={1}>
            <Grid size={6} pl={5}>
                <Tooltip title="Hey Rebecca :)" placement="top-end" classes={{tooltip: classes.tooltip}}>
                    © 2026 trevuga2016
                </Tooltip>
            </Grid>
            <Grid item size={6} textAlign="right" pr={5}>
                <Link variant="body2" color="#000000" onClick={() => router.push('/legal')} sx={{ cursor: "pointer" }}>
                    Legal
                </Link>
            </Grid>
        </Grid>
    );
}

Footer.displayName = 'Footer';

