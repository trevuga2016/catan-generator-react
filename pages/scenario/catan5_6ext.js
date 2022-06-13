import { GameBoard } from '../../components/game-board/game-board';
import { ScenarioLoading } from '../../components/scenario-loading/scenario-loading';
import { useScenarioContent } from '../../hooks/useScenarioContent';

export const Catan5_6Ext = () => {

    const { scenarioContent, isLoading } = useScenarioContent(process.env.NEXT_PUBLIC_CATAN5_6EXT_SCENARIO_ID);

    return(
      !isLoading ? <GameBoard props={scenarioContent} /> : <ScenarioLoading />
    );
};

export default Catan5_6Ext;

Catan5_6Ext.displayName = 'Catan5_6Ext';
