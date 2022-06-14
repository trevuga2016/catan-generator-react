import { Switch } from '@mui/material';
import { useEffect } from 'react';
import { useTitleContext } from '../../contexts/title-context';
import { useGameContext } from '../../contexts/game-context';
import { useBackgroundProps } from '../../hooks/useBackgroundProps';
import { useRouter } from 'next/router';

export const ExpansionSwitch = ({ expansionProps, props }) => {

  const router = useRouter();
  const { expansion, setExpansion } = useGameContext();
  const { setTitle } = useTitleContext();
  const { setBackgroundImage, setBackgroundColor } = useBackgroundProps();

  const handleChange = (e) => {
    if (e.target.checked) {
      setExpansion(expansionProps);
      setTitle(expansionProps?.title);
    } else {
      setExpansion(undefined);
      setTitle(props?.title);
    }
  }

  useEffect(() => {
    expansion === expansionProps ? setTitle(expansionProps?.fields?.title) : setTitle(props?.title);
    expansion === expansionProps ? setBackgroundColor(expansionProps?.fields?.backgroundColor) : setBackgroundColor(props?.backgroundProps?.fields?.backgroundColor);
    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 600px)").matches) {
        expansion === expansionProps ? setBackgroundImage(expansionProps?.fields?.backgroundImageMobile?.fields?.file?.url) : setBackgroundImage(props?.backgroundProps?.fields?.backgroundImage?.fields?.file?.url);
      } else {
        expansion === expansionProps ? setBackgroundImage(expansionProps?.fields?.backgroundImage?.fields?.file?.url) : setBackgroundImage(props?.backgroundProps?.fields?.backgroundImage?.fields?.file?.url);
      }
    }
  });

  useEffect(() => {
    if (!router.isReady) return;
    if (router?.query['expansion']) {
      setExpansion(expansionProps);
      setTitle(expansionProps?.fields?.title);
    } else {
      setExpansion(null);
      setTitle(props?.title);
    }
  }, [router.isReady]);

  return(
    <Switch onChange={handleChange} checked={expansion === expansionProps} name={expansionProps?.fields?.title} />
  );
}

ExpansionSwitch.displayName = 'ExpansionSwitch';