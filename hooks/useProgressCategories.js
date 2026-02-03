import { useEffect, useState } from 'react';
import data from '../data/progressCategories.json';

export const useProgressCategories = () => {

  const [progressCategories, setProgressCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const desc = data?.map(cat => {
      return {
        title: cat.title,
        icon: cat.icon,
        color: cat.color,
        textColor: cat.textColor,
        chipColor: cat.chipColor,
        buttonIcon: cat.buttonIcon
      }
    });
    setProgressCategories(desc);
    setIsLoading(false);
    return(() => {
      setProgressCategories(null);
    });
  }, []);

  return { progressCategories, isLoading };
}