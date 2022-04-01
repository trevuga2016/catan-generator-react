import { Grid, Link, Tooltip } from '@mui/material';
import styles from './footer.module.scss';
import { useRouter } from "next/router";

export const Footer = () => {

    const router = useRouter();

    const onClick = () => {
        router.push('/legal');
    }

    return(
        <Grid container direction="row" className={styles["footer"]}>
            <Grid xs={6} item align="left">
                <Link onClick={onClick} sx={{ cursor: "pointer" }}>LEGAL</Link>
            </Grid>
            <Tooltip title="Hey Rebecca :)" placement="top-end">
            <Grid xs={6} item align="right">
                2022 &copy; Trevor Richardson
            </Grid>
            </Tooltip>
        </Grid>
    );
}

Footer.displayName = 'Footer';

