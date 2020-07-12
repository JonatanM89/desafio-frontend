import React, { useState, useEffect } from "react";
import { Grid, Typography, Link } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";

import youtube from "./api/youtube";
import HomePage from "./pages/home";

export default () => {
  const [videos, setVideos] = useState([]);
  const [favoritesVideos, setFavoritesVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [origin, setOrigin] = useState('home')
  const [searchedTerm, setsearchedTerm] = useState('pricipais noticias')

  useEffect(() => {
    const fetchData = async () => {
      const result = await handleSubmit('pricipais noticias', 'home', 28)
    };

    fetchData()

  }, []);

  async function handleSubmit(searchTerm, origin = 'home', qtd = 28) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: qtd,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      }
    });

    setOrigin(origin)
    setVideos(videos);
    setSelectedVideo(videos[0]);
    setsearchedTerm(searchTerm)
    addHistory(searchTerm)
  }

  function selectVideoByHome(video) {
    setOrigin('')
    setSelectedVideo(video);
  }

  function backToHome() {
    return (
      <Link style={{ marginBottom: 20 }} href="#" onClick={() => setOrigin('home')}>
        Voltar ao início
      </Link>
    )
  }


  function onAddFavorites(video) {
    let favorites = [];
    if (localStorage.getItem('favorites'))
      favorites = JSON.parse(localStorage.getItem('favorites'))

    let findItemfavorites = favorites.filter(
      function (data) { return data.id.videoId == video.id.videoId }
    );

    if (findItemfavorites.length == 0) {
      favorites.push(video)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    alert('Adicionados à favoritos!')

  }

  function showFavorites() {
    let favorites = [];
    if (localStorage.getItem('favorites'))
      favorites = JSON.parse(localStorage.getItem('favorites'))

    if (favorites.length > 0) {
      setFavoritesVideos(favorites)
      setOrigin('favorites')
      setSelectedVideo(favorites[0]);
    } else
      alert("Você não favoritou nenhum vídeo!");


  }

  function addHistory(searchTerm) {
    let history = [];
    if (localStorage.getItem('history'))
      history = JSON.parse(localStorage.getItem('history'))

    history.push(searchTerm)
    localStorage.setItem('history', JSON.stringify(history))
  }

  function home() {
    return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={10} sm={10} md={10}>
          <Grid container spacing={5}>
            <Grid item sm={12} md={12} xs={12}>
              <SearchBar onSubmit={handleSubmit} onShowFavorites={showFavorites} />
            </Grid>
            <Grid item sm={12} md={12} xs={12}>
              <Typography style={{ fontSize: 18, paddingBottom: 10, fontWeight: 'bold', color: '#333' }} variant="subtitle1">
                {searchedTerm.toUpperCase()}
              </Typography>
              <HomePage videos={videos} onVideoSelect={selectVideoByHome} />
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    );
  }

  function searchVideos() {
    return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={10}>
          <Grid container spacing={5}>
            <Grid item md={12} xs={12}>
              <SearchBar onSubmit={handleSubmit} onShowFavorites={showFavorites} />
              {backToHome()}
            </Grid>
            <Grid item md={8} sm={8} xs={12}>
              <VideoDetail video={selectedVideo} addFavorite={onAddFavorites} favorites={false} />
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography style={{ fontSize: 14, paddingBottom: 10, fontWeight: 'bold', color: '#333' }} variant="subtitle1">
                {"OUTROS VÍDEOS"}
              </Typography>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function showFavoritesVideos() {
    return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={10}>
          <Grid container spacing={5}>
            <Grid item md={12} xs={12} sm={12}>
              <SearchBar onSubmit={handleSubmit} onShowFavorites={showFavorites} />
              {backToHome()}
            </Grid>
            <Grid item md={8} sm={8} xs={12}>
              <VideoDetail video={selectedVideo} addFavorite={onAddFavorites} favorites={true} />
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography style={{ fontSize: 14, paddingBottom: 10, fontWeight: 'bold', color: '#333' }} variant="subtitle1">
                {"MEUS FAVORITOS"}
              </Typography>
              <VideoList videos={favoritesVideos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function pages() {
    //return origin == 'home' ? home() : searchVideos();

    switch (origin) {
      case 'home':
        return home();

      case '':
        return searchVideos();

      case 'favorites':
        return showFavoritesVideos();

      default:
        return home()
    }



  }


  return pages();






}





