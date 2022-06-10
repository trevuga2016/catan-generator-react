import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const usePageDefaults = () => {

  const [pageDefaults, setPageDefaults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getPageDefaults = async() => {
    let results = await client.getEntries({
      content_type: 'pageDefaults'
    });
    const { items } = results;
    return items[0]?.fields || [];
  }

  useEffect(() => {
    getPageDefaults().then((data) => {
      const defaults =
        {
          title: data?.title,
          description: data?.description
        }
      setPageDefaults(defaults);
      setIsLoading(false);
    }).catch(() => {});
  }, []);

  return { pageDefaults, isLoading };
}