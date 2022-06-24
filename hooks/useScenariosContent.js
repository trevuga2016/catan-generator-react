import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useScenariosContent = () => {

  const [scenarios, setScenarios] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {client} = useContentfulContext();

  const getScenarioDescription = async () => {
    let results = await client.getEntries({
      content_type: 'scenario'
    });
    const {items} = results;
    return (items || []).map(item => item.fields).sort((a, b) => a.order - b.order);
  }

  useEffect(() => {
    getScenarioDescription().then((data) => {
      const desc = data?.map(description => {
        return {
          ...description,
          imageUrl: description?.image?.fields?.file?.url
        }
      });
      setScenarios(desc);
      setIsLoading(false);
    }).catch(() => {
    });
    return(() => {
      setScenarios(null);
    });
  }, []);

  return {scenarios, isLoading};
}