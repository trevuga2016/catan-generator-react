import { createContext, useContext } from 'react';
import { useResources } from '../hooks/useResources';
import { useHarbors } from '../hooks/useHarbors';

const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {

  const { resources } = useResources();
  const { harbors } = useHarbors();

  return (
    <ContentContext.Provider value={{ resources, harbors }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => {
  return useContext(ContentContext);
};