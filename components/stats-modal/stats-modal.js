import { Avatar, Box, Grid, ListItem, ListItemAvatar, ListItemText, Modal, Typography } from '@mui/material';
import styles from './stats-modal.module.scss';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

export const StatsModal = ({ open, onClose, stats }) => {

    const maResource = stats?.length > 0 ? stats?.[0]?.resource : '--';
    const laResource = stats?.length > 0 ? stats?.[stats?.length - 1]?.resource : '--';

    return(
        <Modal open={open} onClose={onClose}>
            <Box className={styles["modal"]} sx={{ transform: `translate(-50%, -50%) scale()`}}>
                <Grid container direction="column" className={styles["modal__container"]} p={5}>
                    <Typography variant="h4">Board Statistics</Typography>
                    <Typography variant="h6">Frequency of Resource per Turn</Typography>
                    <Grid container direction="column" className={styles["modal__container__stats"]}>
                    { stats?.length === 0 &&
                        <Grid item className={styles["modal__container__stats"]}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar><InsertPhotoOutlinedIcon /></Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography variant="h6">--</Typography>
                                </ListItemText>
                            </ListItem>
                        </Grid>
                    }
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
                    <Typography variant="h6">The Most Abundant Resource:</Typography>
                    <Grid item className={styles["modal__container__stats"]}>
                        <ListItem>
                            <ListItemAvatar>
                                { maResource !== '--' ? <Avatar src={`/${maResource}_icon.jpg`} /> : <Avatar><InsertPhotoOutlinedIcon /></Avatar> }
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="h6">{maResource}</Typography>
                            </ListItemText>
                        </ListItem>
                    </Grid>
                    <Typography variant="h6">The Least Abundant Resource:</Typography>
                    <Grid item className={styles["modal__container__stats"]}>
                        <ListItem>
                            <ListItemAvatar>
                                { laResource !== '--' ? <Avatar src={`/${laResource}_icon.jpg`} /> : <Avatar><InsertPhotoOutlinedIcon /></Avatar> }
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="h6">{laResource}</Typography>
                            </ListItemText>
                        </ListItem>
                    </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}

StatsModal.displayName = 'StatsModal';