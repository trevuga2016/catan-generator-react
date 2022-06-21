import { Avatar, Stack, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { useGameContext } from '../../contexts/game-context';

export const ResourceStats = ({ stats }) => {

  const { scenario } = useGameContext();

  return (
    <Table>
      <TableBody>
        {
          stats?.map((stat, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Avatar src={`https:${stat?.icon}?fm=webp`} title={stat?.resource}/>
                    {
                      scenario?.scenarioUrl?.includes('ck') && stat?.commodity?.icon &&
                      <Avatar src={`https:${stat?.commodity?.icon}?fm=webp`} title={stat?.commodity?.name}/>
                    }
                  </Stack>
                </TableCell>
                <TableCell>
                  {
                    scenario?.scenarioUrl?.includes('ck') && stat?.commodity?.icon ?
                      <Typography variant="body1">Probability of {stat?.resource}/{stat?.commodity?.name}: {stat?.probability}%</Typography> :
                      <Typography variant="body1">Probability of {stat?.resource}: {stat?.probability}%</Typography>
                  }
                </TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  );
}

ResourceStats.displayName = "ResourceStats";