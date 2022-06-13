import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useHomePageContent = () => {

  const [homePageContent, setHomePageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getHomePageContent = async() => {
    let results = await client.getEntries({
      content_type: 'homePage'
    });
    const { items } = results;
    return items[0]?.fields || [];
  }

  useEffect(() => {
    getHomePageContent().then((data) => {
      const content =
        {
          title: data?.title,
          description: data?.description,
          backgroundImage: data?.backgroundProps?.fields?.backgroundImage?.fields?.file?.url,
          backgroundColor: data?.backgroundProps?.fields?.backgroundColor
        }
      setHomePageContent(content);
      setIsLoading(false);
    }).catch(() => {});
  }, []);

  return { homePageContent, isLoading };
}