import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useNotFoundPageContent = () => {

  const [notFoundPageContent, setNotFoundPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getNotFoundPageContent = async() => {
    let results = await client.getEntries({
      content_type: 'notFoundPage'
    });
    const { items } = results;
    return items[0]?.fields || [];
  }

  useEffect(() => {
    getNotFoundPageContent().then((data) => {
      const content =
      {
        title: data?.title,
        message: data?.message,
        errorPicture: {
          url: data?.errorPicture?.fields?.file?.url,
          altText: data?.errorPicture?.fields?.title,
        },
        backgroundImage: data?.backgroundProps?.fields?.backgroundImage?.fields?.file?.url,
        backgroundColor: data?.backgroundProps?.fields?.backgroundColor
      }
      setNotFoundPageContent(content);
      setIsLoading(false);
    }).catch(() => {});
  }, []);

  return { notFoundPageContent, isLoading };
}