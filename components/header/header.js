import { Typography } from '@mui/material';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

export const Header = ({ title }) => {

    const router = useRouter();

    return(
        <Typography variant="h4" className={styles["header"]} mt={3} mb={2} onClick={() => router.push('/')}>
          {title}
        </Typography>
    );
};

Header.displayName = 'Header';