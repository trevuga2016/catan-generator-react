import { Box, Modal } from '@mui/material';
import styles from './hex-modal.module.scss';

export const HexModal = ({ open, onClose, hex }) => {

    let modalUrl = `url(../${hex?.resource}_card.jpg)`;
    
    return(
        <Modal open={open} onClose={onClose}>
            <Box className={styles["modal"]} sx={{ backgroundImage: modalUrl }} />
        </Modal>
    );
}

HexModal.displayName = 'HexModal';