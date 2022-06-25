import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useLegalPageContent = () => {

  const [legalPageContent, setLegalPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getLegalPageContent = async() => {
    let results = await client.getEntries({
      content_type: 'legalPage'
    });
    const { items } = results;
    return items[0]?.fields || [];
  }

  useEffect(() => {
    getLegalPageContent().then((data) => {
      const content =
      {
        title: data?.title,
        message: data?.message,
        backgroundImage: data?.backgroundProps?.fields?.backgroundImage?.fields?.file?.url,
        backgroundColor: data?.backgroundProps?.fields?.backgroundColor
      }
      setLegalPageContent(content);
      setIsLoading(false);
    }).catch(() => {});
    return(() => {
      setLegalPageContent(null);
    });
  }, []);

  return { legalPageContent, isLoading };
}