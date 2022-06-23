import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useHarbors = () => {

  const [harbors, setHarbors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getHarbors = async() => {
    let results = await client.getEntries({
      content_type: 'harbors'
    });
    const { items } = results;
    return items || [];
  }

  useEffect(() => {
    getHarbors().then((data) => {
      const harbor = data?.map(h => {
        return {
          type: h?.fields?.type,
          id: h?.fields?.id,
          cardImage: h?.fields?.cardImage?.fields?.file?.url,
          terrain: h?.fields?.terrain,
          description: h?.fields?.description
        }
      });
      setHarbors(harbor);
      setIsLoading(false);
    }).catch(() => {});
  }, []);

  return { harbors, isLoading };
}