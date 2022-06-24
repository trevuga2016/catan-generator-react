import { useEffect, useState } from 'react';
import { useContentfulContext } from '../contexts/contentful-context';

export const useDevelopmentCards = () => {

  const [devCards, setDevCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useContentfulContext();

  const getDevCards = async () => {
    let results = await client.getEntries({
      content_type: 'developmentCards'
    });
    const {items} = results;
    return (items || []).map(item => item.fields).sort((a, b) => a.order - b.order);
  }

  useEffect(() => {
    getDevCards().then((data) => {
      const desc = data?.map(content => {
        return {
          name: content?.name,
          image: content?.image?.fields?.file?.url,
          description: content?.description,
          cardColor: content?.cardColor
        }
      });
      setDevCards(desc);
      setIsLoading(false);
    }).catch(() => {
    });
    return(() => {
      setDevCards(null);
    });
  }, []);

  return { devCards, isLoading };
}