import { Typography } from '@mui/material';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

export const Header = ({ title }) => {

    const router = useRouter();

    return(
        <Typography variant="h4" className={styles["header"]} m={3} onClick={() => router.push('/')}>
          {title}
        </Typography>
    );
};

Header.displayName = 'Header';