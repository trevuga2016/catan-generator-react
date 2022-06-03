import { createContext, useContext, useState } from 'react';

const TitleContext = createContext(null);

export const TitleProvider = ({ children }) => {

  const [title, setTitle] = useState(null);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitleContext = () => {
  return useContext(TitleContext);
};