import { Box, ButtonBase } from '@mui/material';
import styles from './hex.module.scss';
import { Token } from '../token/token';
import { useEffect, useState } from 'react';
import { HexModal } from '../hex-modal/hex-modal';
import { useResources } from '../../hooks/useResources';
import Image from 'next/image';
import { useHarbors } from '../../hooks/useHarbors';

export const Hex = ({ hex }) => {

  const { resources } = useResources();
  const { harbors } = useHarbors();
  const [ open, setOpen ] = useState(false);
  const [ backgroundImage, setBackgroundImage ] = useState(undefined);

  useEffect(() => {
      if (hex?.terrain !== "Harbor" && hex?.terrain !== "") {
        const resource = resources?.find(r => r?.resource === hex?.resource);
        setBackgroundImage(resource?.hexImage);
      } else if (hex?.terrain === "Harbor") {
        const harbor = harbors?.find(h => h?.id === hex?.resource);
        const image = harbor?.hexImage?.find(i => i[hex?.rotation]);
        setBackgroundImage(image?.[hex?.rotation]);
      } else {
        const sea = resources?.find(r => r?.resource === "Sea");
        setBackgroundImage(sea?.hexImage);
      }
    return () => {
      setBackgroundImage(null);
    }
  });

  const imageLoader = ({ src }) => {
    return `${src}?w=500&h=575&fm=webp`;
  }

  return (
    <>
      <ButtonBase className={styles["hex__button"]} onClick={() => setOpen(true)}>
        <Box className={styles["hex"]} position="relative">
          <Image loader={imageLoader} src={`https:${backgroundImage}`} layout="fill" priority={true} />
          <Token number={hex?.token?.number} probability={hex?.token?.probability}/>
        </Box>
      </ButtonBase>
      <HexModal open={open} onClose={() => setOpen(false)} hex={hex}/>
    </>
  );
};

Hex.displayName = 'Hex';