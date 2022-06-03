import { Typography } from '@mui/material';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import { useTitleContext } from '../../contexts/title-context';

export const Header = () => {

    const router = useRouter();
    const { title } = useTitleContext();

    return(
        <Typography variant="h4" className={styles["header"]} px={1} py={3} onClick={() => router.push('/')}>
          {title}
        </Typography>
    );
};

Header.displayName = 'Header';