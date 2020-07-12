import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomeVideo from '../components/HomeVideo';

export default ({ videos, onVideoSelect }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
    }));

    const classes = useStyles();


    return (

        <Grid container className={classes.root} spacing={6}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={6}>
                    {videos.map((video) => (
                        <HomeVideo
                            onVideoSelect={onVideoSelect}
                            key={video.id.videoId}
                            video={video}
                        />
                    ))}
                </Grid>
            </Grid>
        </Grid>

    );
}