import { GameBoard } from '../../components/game-board/game-board';
import { ScenarioLoading } from '../../components/scenario-loading/scenario-loading';
import { useScenarioContent } from '../../hooks/useScenarioContent';
import { useGameContext } from '../../contexts/game-context';
import { useEffect } from 'react';

export const Catan5_6Ext = () => {

    const { scenarioContent, isLoading } = useScenarioContent('catan5_6ext');
    const { setScenario } = useGameContext();

    useEffect(() => {
        setScenario(scenarioContent);
    });

    return(
      !isLoading ? <GameBoard props={scenarioContent} /> : <ScenarioLoading />
    );
};

export default Catan5_6Ext;

Catan5_6Ext.displayName = 'Catan5_6Ext';
