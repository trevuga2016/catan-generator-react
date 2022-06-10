import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useExpansionContent = () => {

  const [expansions, setExpansion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getExpansionContent = async() => {
    let results = await client.getEntries({
      content_type: 'expansion'
    });
    return results?.items;
  }

  useEffect(() => {
    getExpansionContent().then((data) => {
      setExpansion(data);
      setIsLoading(false);
    }).catch(() => {});
  }, []);

  return { expansions, isLoading };
}