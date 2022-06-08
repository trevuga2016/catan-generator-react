import { useEffect, useState } from 'react';

export const useBackgroundImage = () => {

  const [backgroundImage, setBackgroundImage] = useState('catan_backdrop.png');

  const updateBackgroundImage = () => {
    if (typeof window !== "undefined") {
      document.getElementById("background-image").style.background = `url(../${backgroundImage}) no-repeat center center`;
      document.getElementById("background-image").style.backgroundSize = "cover";
    }
  }

  useEffect(() => {
    updateBackgroundImage();
  }, [backgroundImage]);

  return { setBackgroundImage };
}