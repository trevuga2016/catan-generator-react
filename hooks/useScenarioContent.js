import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useScenarioContent = () => {

  const [scenarios, setScenarios] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getScenarioDescription = async() => {
    let results = await client.getEntries({
      content_type: 'scenario'
    });
    const { items } = results;
    return (items || []).map(item => item.fields).sort((a, b) => a.order - b.order);
  }

  useEffect(() => {
    getScenarioDescription().then((data) => {
      const desc = data?.map(description => {
        const imageUrl = `https:${description?.image?.fields?.file?.url}`;
        return {
          ...description,
          imageUrl: imageUrl
        }
      });
      setScenarios(desc);
      setIsLoading(false);
    }).catch(() => {});
  }, []);

  return { scenarios, isLoading };
}