import { useEffect, useState } from 'react';
import data from '../data/scenarios.json';

export const useScenariosContent = () => {

  const [scenarios, setScenarios] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setScenarios(data);
      setIsLoading(false);
    return(() => {
      setScenarios(null);
    });
  }, []);

  return {scenarios, isLoading};
}