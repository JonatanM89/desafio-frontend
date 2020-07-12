import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid style={{ border: 'none' }} item xs={12}>
      <Paper elevation={0} style={{ display: "flex", alignItems: "left", cursor: "pointer", padding: 0, border: 'none' }} onClick={() => onVideoSelect(video)} >

        <Grid container>
          <Grid xs={4}>
            <img style={{ marginRight: "10px", width: '100%' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
          </Grid>
          <Grid xs={8} >
            <Typography style={{ fontSize: 12, paddingLeft: 5, fontWeight: 'bold' }} variant="subtitle1">
              {video.snippet.title}
            </Typography>
            <Typography style={{ fontSize: 12, paddingLeft: 5, color: '#666' }} variant="subtitle1">
              {video.snippet.channelTitle.substring(0, 32)}
            </Typography>

          </Grid>

        </Grid>
      </Paper>
    </Grid>
  );
}
