import { createContext, useContext } from 'react';
import { useScenarioContent } from '../hooks/useScenarioContent';

const ScenarioContext = createContext(null);

export const ScenarioProvider = ({ children }) => {

  const { scenarios, isLoading } = useScenarioContent();

  return (
    <ScenarioContext.Provider value={{ scenarios, isLoading }}>
      {children}
    </ScenarioContext.Provider>
  );
};

export const useScenarioContext = () => {
  return useContext(ScenarioContext);
};