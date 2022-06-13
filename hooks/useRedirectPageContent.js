import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useRedirectPageContent = () => {

  const [redirectPageContent, setRedirectPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getRedirectPageContent = async() => {
    let results = await client.getEntries({
      content_type: 'redirectPage'
    });
    const { items } = results;
    return items[0]?.fields || [];
  }

  useEffect(() => {
    getRedirectPageContent().then((data) => {
      const content =
        {
          title: data?.title,
          redirectUrl: data?.redirectUrl,
          message: data?.message,
          backgroundImage: data?.backgroundProps?.fields?.backgroundImage?.fields?.file?.url,
          backgroundColor: data?.backgroundProps?.fields?.backgroundColor
        }
      setRedirectPageContent(content);
      setIsLoading(false);
    }).catch(() => {});
  }, []);

  return { redirectPageContent, isLoading };
}