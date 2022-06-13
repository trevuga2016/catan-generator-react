import { GameBoard } from '../../components/game-board/game-board';
import { ScenarioLoading } from '../../components/scenario-loading/scenario-loading';
import { useScenarioContent } from '../../hooks/useScenarioContent';

export const Catan = () => {

    const { scenarioContent, isLoading } = useScenarioContent(process.env.NEXT_PUBLIC_CATAN_SCENARIO_ID);

    return(
        !isLoading ? <GameBoard props={scenarioContent} /> : <ScenarioLoading />
    );
};

export default Catan;

Catan.displayName = 'Catan';
