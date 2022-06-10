import { GameBoard } from '../../components/game-board/game-board';
import { useScenarioContext } from '../../contexts/scenario-context';
import { ScenarioLoading } from '../../components/scenario-loading/scenario-loading';

export const Catan5_6Ext = () => {

    const { scenarios, isLoading } = useScenarioContext();
    const props = scenarios !== null ? scenarios.find(scenario => scenario?.scenarioUrl === 'catan5_6ext') : undefined;

    return(
      !isLoading ? <GameBoard props={props} /> : <ScenarioLoading />
    );
};

export default Catan5_6Ext;

Catan5_6Ext.displayName = 'Catan5_6Ext';
