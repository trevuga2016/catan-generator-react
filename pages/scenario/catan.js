import { GameBoard } from '../../components/game-board/game-board';
import { ScenarioLoading } from '../../components/scenario-loading/scenario-loading';
import { useScenarioContent } from '../../hooks/useScenarioContent';
import { useGameContext } from '../../contexts/game-context';
import { useEffect } from 'react';

export const Catan = () => {

    const { scenarioContent, isLoading } = useScenarioContent('catan');
    const { setScenario } = useGameContext();

    useEffect(() => {
        setScenario(scenarioContent);
    });

    return(
        !isLoading ? <GameBoard props={scenarioContent} /> : <ScenarioLoading />
    );
};

export default Catan;

Catan.displayName = 'Catan';
