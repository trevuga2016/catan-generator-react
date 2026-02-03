import {useEffect, useState} from 'react';
import data from '../data/developmentCards.json';

export const useDevelopmentCards = () => {

  const [devCards, setDevCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const desc = data?.map(content => {
        return {
          name: content.name,
          image: content.image,
          description: content.description,
          cardColor: content.cardColor
        }
      });
      setDevCards(desc);
      setIsLoading(false);
    return(() => {
      setDevCards(null);
    });
  }, []);

  return { devCards, isLoading };
}