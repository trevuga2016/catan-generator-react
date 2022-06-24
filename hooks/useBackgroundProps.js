import { useEffect, useState } from 'react';

export const useBackgroundProps = () => {

  const [backgroundImage, setBackgroundImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(null);

  const updateBackgroundProps = () => {
    if (typeof window !== "undefined") {
      document.getElementById("background-image").style.background = `url(https:${backgroundImage}) no-repeat center center`;
      document.getElementById("background-image").style.backgroundSize = "cover";
      document.getElementsByTagName('html').item(0).style.backgroundColor = `#${backgroundColor}`;
      document.getElementsByTagName('body').item(0).style.backgroundColor = `#${backgroundColor}`;
    }
  }

  useEffect(() => {
    backgroundImage && updateBackgroundProps();
    return(() => {
      setBackgroundImage(null);
      setBackgroundColor(null);
    })
  }, [backgroundImage]);

  return { setBackgroundImage, setBackgroundColor };
}