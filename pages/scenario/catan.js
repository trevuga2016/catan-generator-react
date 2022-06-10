import { GameBoard } from '../../components/game-board/game-board';
import { useScenarioContext } from '../../contexts/scenario-context';
import { ScenarioLoading } from '../../components/scenario-loading/scenario-loading';

export const Catan = () => {

    const { scenarios, isLoading } = useScenarioContext();
    const props = scenarios !== null ? scenarios.find(scenario => scenario?.scenarioUrl === 'catan') : undefined;

    return(
        !isLoading ? <GameBoard props={props} /> : <ScenarioLoading />
    );
};

export default Catan;

Catan.displayName = 'Catan';
