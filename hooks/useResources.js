import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useResources = () => {

  const [resources, setResources] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getResources = async() => {
    let results = await client.getEntries({
      content_type: 'resources'
    });
    const { items } = results;
    return items || [];
  }

  useEffect(() => {
    getResources().then((data) => {
      const resource = data?.map(r => {
        return {
          resource: r?.fields?.resource,
          icon: r?.fields?.icon?.fields?.file?.url
        }
      });
      setResources(resource);
      setIsLoading(false);
    }).catch(() => {});
  }, []);

  return { resources, isLoading };
}