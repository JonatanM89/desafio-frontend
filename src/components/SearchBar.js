import React, { useState } from "react";
import { Paper, TextField, Grid, Fab, makeStyles } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <Paper elevation={0} style={{ padding: "25px" }}>
      <Grid container>
      <Grid xs={1}>
       <img style={{ marginRight: "10px", height:40, width:'100%', marginTop:15 }} alt="thumbnail" src={'icon.jpeg'} />
      </Grid>

      <Grid xs={8}>
      <TextField style={{marginLeft: '5%', width:'70%'}}
        label="Pesquisar..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
      </Grid>

      <Grid style={{float:'right'}} xs={2}>
        <Fab style={{marginRight:10}} color="primary" aria-label="history">
          <AccessTimeIcon />
        </Fab>
        <Fab color="primary" aria-label="like">
          <FavoriteIcon />
        </Fab>

      </Grid>
      
      </Grid>
    </Paper>
    
  );
}
