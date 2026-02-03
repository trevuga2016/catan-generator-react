import { useEffect, useState } from 'react';
import data from '../data/progressCards.json'

export const useProgressCards = () => {

  const [progressCards, setProgressCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const desc = data?.map(content => {
      return {
        name: content.name,
        category: content.category,
        image: content.image,
        description: content.description,
        noOfCards: content.noOfCards
      }
    });
    setProgressCards(desc);
    setIsLoading(false);
    return(() => {
      setProgressCards(null);
    });
  }, []);

  return { progressCards, isLoading };
}