import HomeIcon from '@mui/icons-material/Home';
import styles from './button-row.module.scss';
import {
  Button,
  Checkbox, Dialog, DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export const HomeButton = () => {

  const router = useRouter();
  const [openAlert, setOpenAlert] = useState(false);
  const handleOpenAlert = () => setOpenAlert(true);
  const goHome = () => router.push('/');

  const handleContinueAlert = () => {
    setOpenAlert(false);
    goHome();
  }

  const handleCancelAlert = () => {
    setOpenAlert(false);
    sessionStorage.setItem('homeAYS', 'true');
  }

  const handleAlertOption = (event) => {
    sessionStorage.setItem('homeAYS', (!event.target.checked).toString());
  }

  useEffect(() => {
    if (sessionStorage.getItem('homeAYS') === null || sessionStorage.getItem('homeAYS') === undefined) {
      sessionStorage.setItem('homeAYS', 'true');
    }
  }, []);

  return(
    <>
      <Button variant="contained" onClick={typeof window !== 'undefined' && sessionStorage?.getItem('homeAYS') === 'true' ? handleOpenAlert : goHome } size="small" endIcon={<HomeIcon />} className={styles["button-row__button"]}>
        Home
      </Button>
      <Dialog open={openAlert} onClose={handleCancelAlert}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            By returning home, this board will be lost forever. Are you sure you want to proceed?
          </DialogContentText>
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleAlertOption} />} label="Do not ask again" />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelAlert}>Cancel</Button>
          <Button onClick={handleContinueAlert}>Continue</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

HomeButton.displayName = 'HomeButton';