import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup
} from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import styles from './button-row.module.scss';
import { useEffect, useState } from 'react';

export const GenerateButton = ({ generate }) => {

  const [openAlert, setOpenAlert] = useState(false);
  const handleOpenAlert = () => setOpenAlert(true);

  const handleContinueAlert = () => {
    setOpenAlert(false);
    generate();
  }

  const handleCancelAlert = () => {
    setOpenAlert(false);
    sessionStorage.setItem('genAYS', 'true');
  }

  const handleAlertOption = (event) => {
    sessionStorage.setItem('genAYS', (!event.target.checked).toString());
  }

  useEffect(() => {
    if (sessionStorage.getItem('genAYS') === null || sessionStorage.getItem('genAYS') === undefined) {
      sessionStorage.setItem('genAYS', 'true');
    }
  }, []);

  return(
    <>
    <Button variant="contained" onClick={ typeof window !== 'undefined' && sessionStorage?.getItem('genAYS') === 'true' ? handleOpenAlert : generate } size="small" endIcon={<AutorenewIcon />} className={styles["button-row__button"]}>
      Generate
    </Button>
    <Dialog open={openAlert} onClose={handleCancelAlert}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          By clicking on &quot;Generate&quot; you will randomly generate a new board and this board will be lost forever. Are you sure you want to proceed?
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

GenerateButton.displayName = 'GenerateButton';