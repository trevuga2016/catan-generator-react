import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useProgressCards = () => {

  const [progressCards, setProgressCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getProgressCards = async () => {
    let results = await client.getEntries({
      content_type: 'progressCards',
    });
    const {items} = results;
    return (items || []).map(item => item.fields);
  }

  useEffect(() => {
    getProgressCards().then((data) => {
      const desc = data?.map(content => {
        return {
          name: content?.name,
          category: content?.category?.fields?.title,
          image: content?.image?.fields?.file?.url,
          description: content?.description,
          noOfCards: content?.noOfCards
        }
      });
      setProgressCards(desc);
      setIsLoading(false);
    }).catch(() => {
    });
    return(() => {
      setProgressCards(null);
    });
  }, []);

  return { progressCards, isLoading };
}