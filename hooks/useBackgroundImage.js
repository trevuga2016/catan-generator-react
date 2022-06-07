import { useEffect, useState } from 'react';

export const useBackgroundImage = () => {

  const [backgroundImage, setBackgroundImage] = useState('catan_backdrop.png');

  const updateBackgroundImage = () => {
    if (typeof window !== "undefined") {
      document.getElementsByTagName("html").item(0).style.background = `url(../${backgroundImage}) no-repeat center center fixed`;
      document.getElementsByTagName("body").item(0).style.background = `url(../${backgroundImage}) no-repeat center center fixed`;
      document.getElementsByTagName("html").item(0).style.backgroundSize = "cover";
      document.getElementsByTagName("body").item(0).style.backgroundSize = "cover";
    }
  }

  useEffect(() => {
    updateBackgroundImage();
  }, [backgroundImage]);

  return { setBackgroundImage };
}