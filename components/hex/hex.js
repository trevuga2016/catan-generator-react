import { Box, ButtonBase } from '@mui/material';
import styles from './hex.module.scss';
import { Token } from '../token/token';
import { useState } from 'react';
import { HexModal } from '../hex-modal/hex-modal';

export const Hex = ({ hex }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let imageUrl = 'url(../sea_hex.png)';

    if (hex?.resource?.includes('3for1') || hex?.resource?.includes('2for1')) {
        imageUrl = `url(../${hex?.resource}/${hex?.resource}_${hex?.rotation}.png)`;
    } else if (hex?.resource !== '') {
        imageUrl = `url(../${hex?.resource}/hex.png)`;
    }

    return(
        <>
        <ButtonBase className={styles["hex__button"]} onClick={handleOpen}>
            <Box className={styles["hex"]} sx={{ backgroundImage: imageUrl }}>
                <Token number={hex?.token?.number} probability={hex?.token?.probability} />
            </Box>
        </ButtonBase>
        <HexModal open={open} onClose={handleClose} hex={hex} />
        </>
    );
};

Hex.displayName = 'Hex';