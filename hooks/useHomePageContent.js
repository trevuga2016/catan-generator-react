import { useEffect, useState } from 'react';

export const useHomePageContent = () => {

  const [homePageContent, setHomePageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const content =
      {
        title: "Catan Board Generator",
        description: "Generate a random Catan board setup by selecting from one of the scenarios below",
        backgroundImage: "/assets/catan_backdrop.webp",
        backgroundColor: "c21f26"
      }
    setHomePageContent(content);
    setIsLoading(false);
    return(() => {
      setHomePageContent(null);
    });
  }, []);

  return { homePageContent, isLoading };
}