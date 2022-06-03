import { createContext, useContext, useState } from 'react';

const ExpansionContext = createContext(null);

export const ExpansionProvider = ({ children }) => {

  const [expansion, setExpansion] = useState(null);

  return (
    <ExpansionContext.Provider value={{ expansion, setExpansion }}>
      {children}
    </ExpansionContext.Provider>
  );
};

export const useExpansionContext = () => {
  return useContext(ExpansionContext);
};