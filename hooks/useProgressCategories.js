import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useProgressCategories = () => {

  const [progressCategories, setProgressCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getProgressCategories = async () => {
    let results = await client.getEntries({
      content_type: 'progressCategories',
    });
    const {items} = results;
    return (items || []).map(item => item.fields)?.sort((a, b) => a?.title?.localeCompare(b?.title));
  }

  useEffect(() => {
    getProgressCategories().then((data) => {
      const desc = data?.map(cat => {
        return {
          title: cat?.title,
          icon: cat?.icon?.fields?.file?.url,
          color: cat?.color,
          textColor: cat?.textColor,
          chipColor: cat?.chipColor,
          buttonIcon: cat?.buttonIcon
        }
      });
      setProgressCategories(desc);
      setIsLoading(false);
    }).catch(() => {
    });
    return(() => {
      setProgressCategories(null);
    });
  }, []);

  return { progressCategories, isLoading };
}