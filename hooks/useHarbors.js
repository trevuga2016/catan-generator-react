import { useEffect, useState } from 'react';
import data from '../data/harbors.json';

export const useHarbors = () => {

  const [harbors, setHarbors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const harbor = data?.map(h => {
        const images = h.hexImage.map(hex => {
          const key = hex.title.split('_')?.[1];
          const value = hex.url;
          return {
            [key] : value
          }
        });
        return {
          type: h.type,
          id: h.id,
          cardImage: h.cardImage,
          hexImage: images,
          terrain: h.terrain,
          description: h.description
        }
      });
      setHarbors(harbor);
      setIsLoading(false);
    return(() => {
      setHarbors(null);
    });
  }, []);

  return { harbors, isLoading };
}