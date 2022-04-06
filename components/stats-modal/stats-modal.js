import { Box, Grid, Modal } from "@mui/material";
import styles from './stats-modal.module.scss';

export const StatsModal = ({ open, onClose }) => {
    return(
        <Modal open={open} onClose={onClose}>
            <Box className={styles["modal"]}>
                <Grid container direction="column" className={styles["modal__container"]}>
                    <Grid item>
                        Board Statistics
                    </Grid>
                    <Grid item>
                        Coming Soon!
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}

StatsModal.displayName = 'StatsModal';