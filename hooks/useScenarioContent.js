import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useScenarioContent = (scenarioId) => {

  const [scenarioContent, setScenarioContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getScenarioContent = async() => {
    let results = await client.getEntry(scenarioId);
    const { fields } = results;
    return fields;
  }

  useEffect(() => {
    getScenarioContent().then((data) => {
      const desc =
        {
          ...data,
          imageUrl: data?.image?.fields?.file?.url
        };
      setScenarioContent(desc);
      setIsLoading(false);
    }).catch(() => {});
  }, []);

  return { scenarioContent, isLoading };
}