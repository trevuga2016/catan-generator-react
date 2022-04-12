import { Box, Button, ButtonBase, Modal } from '@mui/material';
import styles from './hex.module.scss';
import { Token } from '../token/token';
import { useState } from "react";
import { HexModal } from "../hex-modal/hex-modal";

export const Hex = ({ hex }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let portType = hex.port !== undefined ? hex.port.type : undefined;
    let rotation = hex.port !== undefined ? hex.port.rotation : undefined;
    let imageUrl = portType !== undefined ? `url(../${portType}.png)` : `url(../${hex?.resource}_2.png)`;
    let transform = rotation !== undefined ? `rotate(${rotation})` : 'rotate(0deg)';
    
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