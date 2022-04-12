import { Box, Button, ButtonBase, Modal } from '@mui/material';
import styles from './hex.module.scss';
import { Token } from '../token/token';
import { useState } from "react";
import { HexModal } from "../hex-modal/hex-modal";

export const Hex = ({ hex }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let imageUrl = hex?.resource !== '' ? `url(../${hex?.resource}_hex.png)` : `url(../sea.png)`;
    let transform = hex?.rotation !== undefined || hex?.rotation === '' ? `rotate(${hex?.rotation})` : 'rotate(0deg)';
    
    return(
        <>
        <ButtonBase className={styles["hex__button"]} onClick={handleOpen}>
            <Box className={styles["hex"]} sx={{ backgroundImage: imageUrl, transform: transform }}>
                <Token number={hex?.token?.number} probability={hex?.token?.probability} />
            </Box>
        </ButtonBase>
        <HexModal open={open} onClose={handleClose} hex={hex} />
        </>
    );
};

Hex.displayName = 'Hex';