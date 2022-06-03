import { Switch } from '@mui/material';
import { useEffect } from 'react';
import { useTitleContext } from '../../contexts/title-context';
import { useRouter } from 'next/router';
import { useExpansionContext } from '../../contexts/expansion-context';

export const ExpansionSwitch = ({ expansionProps, parentTitle }) => {

  const { expansion, setExpansion } = useExpansionContext();
  const { setTitle } = useTitleContext();
  const router = useRouter();

  const handleChange = (e) => {
    if (e.target.checked) {
      setExpansion(expansionProps?.fields?.expansionUrl);
      setTitle(expansionProps?.fields?.title);
    } else {
      setExpansion(null);
      setTitle(parentTitle);
    }
  }

  useEffect(() => {
    expansion === expansionProps?.fields?.expansionUrl && setTitle(expansionProps?.fields?.title);
  });

  useEffect(() => {
    if (!router.isReady) return;
    if (router?.query['expansion']) {
      setExpansion(router?.query['expansion']);
      setTitle(expansionProps?.fields?.title);
    } else {
      setExpansion(null);
      setTitle(parentTitle);
    }
  }, [router.isReady]);

  return(
    <Switch onChange={handleChange} checked={expansion === expansionProps?.fields?.expansionUrl} name={expansionProps?.fields?.title} />
  );
}

ExpansionSwitch.displayName = 'ExpansionSwitch';