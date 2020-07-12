import React, { useState } from "react";
import { Paper, TextField, Grid, Fab, makeStyles, Button } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteIcon from '@material-ui/icons/Favorite';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default ({ onSubmit, onShowFavorites }) => {
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
    <Paper elevation={0} style={{ padding: "10px" }}>
      <Grid container>
        <Grid xs={12} md={1} sm={1}>
          <center><img onClick={() => onSubmit('pricipais noticias')} style={{ marginRight: "10px", height: 70, marginTop: 0, cursor: 'pointer' }} alt="thumbnail" src={'logo_2.jpg'} /></center>
        </Grid>

        <Grid xs={12} md={8} sm={7}>
          <Paper component="form" style={{ padding: '2px 4px', display: 'flex', alignItems: 'center', width: "97%", marginTop: 5 }}>
            <InputBase
              style={{ marginLeft: 0, flex: 1, }}
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={handleChange}
              onKeyPress={onKeyPress}
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" style={{ padding: 10, }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>

        <Grid xs={12} md={3} sm={4}>
          <Button variant="outlined" size="small" color="primary" style={{ marginTop: 14, marginLeft: 5, }}
            variant="contained"
            size="small"
            className={classes.button}
            startIcon={<AccessTimeIcon />}
          >
            Histórico
          </Button>
          <Button variant="outlined" size="small" color="primary" style={{ marginTop: 14, marginLeft: 5, }}
            variant="contained"
            size="small"
            className={classes.button}
            onClick={() => onShowFavorites()}
            startIcon={<FavoriteIcon />}
          >
            Favoritos
          </Button>
        </Grid>

      </Grid>
    </Paper>

  );
}
