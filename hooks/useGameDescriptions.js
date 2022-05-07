import { useEffect, useState } from 'react';

const contentful = require('contentful');

export const useGameDescriptions = () => {

  const [descriptions, setDescriptions] = useState(null);

  let client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  });

  const getScenarioDescription = async() => {
    let results = await client.getEntries({
      content_type: 'scenarioDescription'
    });
    const { items } = results;
    return (items || []).map(item => item.fields).sort((a, b) => a.order - b.order);
  }

  useEffect(() => {
    getScenarioDescription().then((data) => {
      const desc = data?.map(description => {
        const { image } = description;
        const imageUrl = `https:${image?.fields?.file?.url}`;
        return {
          ...description,
          imageUrl: imageUrl
        }
      });
      setDescriptions(desc);
    }).catch(() => {});
  }, []);

  return { descriptions };
}