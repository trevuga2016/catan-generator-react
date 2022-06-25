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
        const images = h?.fields?.hexImage?.map(hex => {
          const key = hex?.fields?.title?.split('_')?.[1];
          const value = hex?.fields?.file?.url;
          return {
            [key] : value
          }
        });
        return {
          type: h?.fields?.type,
          id: h?.fields?.id,
          cardImage: h?.fields?.cardImage?.fields?.file?.url,
          hexImage: images,
          terrain: h?.fields?.terrain,
          description: h?.fields?.description
        }
      });
      setHarbors(harbor);
      setIsLoading(false);
    }).catch(() => {});
    return(() => {
      setHarbors(null);
    });
  }, []);

  return { harbors, isLoading };
}