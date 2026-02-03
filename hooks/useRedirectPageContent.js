import { useEffect, useState } from 'react';

export const useRedirectPageContent = () => {

  const [redirectPageContent, setRedirectPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const content =
      {
        title: "Catan Board Generator",
        redirectUrl: "",
        message: "Redirecting...",
        backgroundImage: "",
        backgroundColor: "c21f26"
      }
    setRedirectPageContent(content);
    setIsLoading(false);
    return(() => {
      setRedirectPageContent(null);
    });
  }, []);

  return { redirectPageContent, isLoading };
}