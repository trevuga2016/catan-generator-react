import { useEffect, useState } from 'react';
import data from '../data/scenarios.json';

export const useScenarioContent = (scenarioId) => {

  const [scenarioContent, setScenarioContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const scenarioData = data.find(entry => entry['scenarioUrl'] === scenarioId);
    setScenarioContent(scenarioData);
    setIsLoading(false);
    return(() => {
      setScenarioContent(null);
    });
  }, []);

  return { scenarioContent, isLoading };
}