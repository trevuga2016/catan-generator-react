import { Avatar, Box, Divider, Grid, ListItemAvatar, Modal, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './building-costs.module.scss';

export const BuildingCosts = ({ open, onClose }) => {

    const buildingCosts = [
      { buildType: 'Road', costs: ['Lumber', 'Brick'], points: '0' },
      { buildType: 'Settlement', costs: ['Lumber', 'Brick', 'Grain', 'Wool'], points: '1' },
      { buildType: 'City', costs: ['Grain', 'Grain', 'Ore', 'Ore', 'Ore'], points: '2' },
      { buildType: 'Development Card', costs: ['Wool', 'Grain', 'Ore'], points: '?'}
    ];

    const useStyles = makeStyles(() => ({
      divider: {
        background: '#000',
      },
    }));

    const classes = useStyles();

    return(
        <Modal open={open} onClose={onClose}>
            <Box className={styles["modal"]}>
                <Grid container direction="column" className={styles["modal__container"]} p={5}>
                    <Typography variant="h4" p={1}>Building Costs</Typography>
                    <Grid item py={2} width="100%">
                        <Divider classes={{root: classes.divider}} variant="middle" />
                    </Grid>
                    {
                        buildingCosts.map((cost, i) => {
                            return(
                                <Grid item key={i} width="100%">
                                    <Typography variant="h6">{cost.buildType}</Typography>
                                    <Grid container direction="row" wrap="nowrap" justifyContent="center">
                                        {
                                            cost.costs.map((resource, k) => {
                                                return(
                                                    <Grid item align="center" key={k}>
                                                        <ListItemAvatar>
                                                          <Avatar src={`/${resource}/icon.jpg`} />
                                                        </ListItemAvatar>
                                                    </Grid>
                                                );
                                            })
                                        }
                                    </Grid>
                                    <Typography variant="body1" pt={1}>{cost.points} Victory {cost.points === '1' ? 'Point' : 'Points'}</Typography>
                                    <Grid item py={2}>
                                      <Divider classes={{root: classes.divider}} variant="middle" />
                                    </Grid>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Box>
        </Modal>
    )
}

BuildingCosts.displayName = 'BuildingCosts';