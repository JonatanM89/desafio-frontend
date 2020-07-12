import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Paper, Typography, Button } from "@material-ui/core";

export default ({ video, addFavorite, favorites }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  function showHiddenButton() {
    if (!favorites) {
      return (<Button variant="outlined" size="small" color="primary" style={{ marginTop: 10, float: 'right' }}
        variant="contained"
        size="small"
        onClick={() => addFavorite(video)}
        startIcon={<FavoriteIcon />}
      >
        Favoritar
      </Button>)
    }


    return ""
  }

  return (
    <React.Fragment>
      <Paper elevation={1} style={{ height: "17%", minHeight: 300 }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={0} style={{ padding: "15px" }}>
        <Typography variant="h6">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
        {showHiddenButton()}
      </Paper>
    </React.Fragment>
  );
}
