import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useFooterContent = () => {

  const [footerContent, setFooterContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getFooterContent = async() => {
    let results = await client.getEntries({
      content_type: 'footer'
    });
    const { items } = results;
    return items[0]?.fields || [];
  }

  useEffect(() => {
    getFooterContent().then((data) => {
      setFooterContent(data?.footerRefs);
      setIsLoading(false);
    }).catch(() => {});
    return(() => {
      setFooterContent(null);
    });
  }, []);

  return { footerContent, isLoading };
}