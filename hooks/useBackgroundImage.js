import { useEffect, useState } from 'react';

export const useBackgroundImage = () => {

  const [backgroundImage, setBackgroundImage] = useState('catan_backdrop.webp');

  const updateBackgroundImage = () => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 600px)").matches && backgroundImage?.includes('ck-backdrop')) {
        document.getElementById("background-image").style.background = `url(../ck-backdrop_600px.png) no-repeat center center`;
        document.getElementById("background-image").style.backgroundSize = "cover";
      }  else {
        document.getElementById("background-image").style.background = `url(../${backgroundImage}) no-repeat center center`;
        document.getElementById("background-image").style.backgroundSize = "cover";
      }
      if (backgroundImage?.includes('ck-backdrop')) {
        document.getElementsByTagName('html').item(0).style.backgroundColor = "#ffef68";
        document.getElementsByTagName('body').item(0).style.backgroundColor = "#ffef68";
      } else {
        document.getElementsByTagName('html').item(0).style.backgroundColor = "#c21f26";
        document.getElementsByTagName('body').item(0).style.backgroundColor = "#c21f26";
      }
    }
  }

  useEffect(() => {
    backgroundImage && updateBackgroundImage();
  }, [backgroundImage]);

  return { setBackgroundImage };
}