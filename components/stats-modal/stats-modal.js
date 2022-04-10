import { Avatar, Box, Grid, ListItem, ListItemAvatar, ListItemText, Modal, Typography } from '@mui/material';
import styles from './stats-modal.module.scss';

export const StatsModal = ({ open, onClose, stats }) => {

    const maResources = [stats?.[0]?.resource];
    const highestProb = stats?.[0]?.probability;
    const laResources = [stats?.[stats?.length - 1]?.resource];
    const lowestProb = stats?.[stats?.length - 1]?.probability;

    stats?.forEach((stat, i) => {
        if (i > 0 && stat?.probability === highestProb) {
            maResources.push(stat?.resource);
        }
    });

    for (let i = stats?.length - 1; i >= 0; i--) {
        if (i < stats?.length - 1 && stats?.[i]?.probability === lowestProb) {
            laResources.push(stats[i].resource);
        }
    }

    return(
        <Modal open={open} onClose={onClose}>
            <Box className={styles["modal"]}>
                <Grid container direction="column" className={styles["modal__container"]} p={5}>
                    <Typography variant="h4">Board Statistics</Typography>
                    <Typography variant="h6">Probability of Collecting Resource per Turn</Typography>
                    <Grid container direction="column" className={styles["modal__container__stats"]}>
                    {
                        stats?.map((stat, i) => {
                            return(
                                <Grid item key={i}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar src={`/${stat.resource}_icon.jpg`} />
                                        </ListItemAvatar>
                                        <ListItemText>
                                            <Typography variant="h6">Probability of {stat.resource}: {stat.probability}%</Typography>
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                            );
                        })
                    }
                    {
                        highestProb !== '0.000' &&
                            <>
                            <Typography variant="h6">The Most Abundant Resource{maResources.length > 1 ? 's:' : ':'}</Typography>
                            <Grid container direction="row" className={styles["modal__container__stats"]}>
                                {
                                    maResources.map((resource, i) => {
                                        return(
                                            <Grid item key={i}>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar src={`/${resource}_icon.jpg`} />
                                                    </ListItemAvatar>
                                                    <ListItemText>
                                                        <Typography variant="h6">{resource}</Typography>
                                                    </ListItemText>
                                                </ListItem>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            </>
                    }
                    {
                        lowestProb !== '0.000' &&
                        <>
                            <Typography variant="h6">The Least Abundant Resource{laResources.length > 1 ? 's:' : ':'}</Typography>
                            <Grid container direction="row" className={styles["modal__container__stats"]}>
                                {
                                    laResources.map((resource, i) => {
                                        return(
                                            <Grid item key={i}>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar src={`/${resource}_icon.jpg`} />
                                                    </ListItemAvatar>
                                                    <ListItemText>
                                                        <Typography variant="h6">{resource}</Typography>
                                                    </ListItemText>
                                                </ListItem>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </>
                    }
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}

StatsModal.displayName = 'StatsModal';