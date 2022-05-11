import { createContext, useContext, useState } from 'react';

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {

  const [scenario, setScenario] = useState('');
  const [harbors, setHarbors] = useState('hide');

  return (
    <GameContext.Provider value={{ scenario, setScenario, harbors, setHarbors }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};