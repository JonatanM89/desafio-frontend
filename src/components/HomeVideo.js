import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
    return (
        <Grid style={{ border: 'none' }} item xs={12} md={3} sm={4}>
            <Paper elevation={0} style={{ display: "flex", alignItems: "left", cursor: "pointer", padding: 0, border: 'none' }} onClick={() => onVideoSelect(video)} >

                <Grid container>
                    <Grid xs={12}>
                        <img style={{ marginRight: "10px", width: '100%' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                    </Grid>
                    <Grid xs={12} >
                        <Typography style={{ fontSize: 15, paddingLeft: 5, fontWeight: 'bold' }} variant="subtitle1">
                            {video.snippet.title}
                        </Typography>
                        <Typography variant="subtitle1" style={{ textAling: 'right', float: 'right' }}>
                            {video.snippet.channelTitle}
                        </Typography>
                    </Grid>

                </Grid>
            </Paper>
        </Grid>
    );
}
