import { Typography } from '@mui/material';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

export const Header = ({ title }) => {

  const router = useRouter();

  return (
    <Typography variant="h4" className={styles["header"]} px={1} py={3} onClick={() => router.push('/')}>
      &#8213;&nbsp;{title}&nbsp;&#8213;
    </Typography>
  );
};

Header.displayName = 'Header';