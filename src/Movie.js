import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import axios from "./axios";
import requests from "./apicall";
function Movie() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 1000,
    },
    media: {
      height: 500,
    },
  });
  const [movie, setMovie] = useState(null);
  const [num, setNum] = useState(0);
  useEffect(() => {
    const genre = [
      "fetchNetflixOriginals",
      "fetchTrending",
      "fetchTopRated",
      "fetchRomanceMovies",
      "fetchActionMovies",
      "fetchComedyMovies",
      "fetchHorrorMovies",
    ];

    async function fetchData() {
      const request = await axios.get(requests[genre[num]]);
      setMovie(request.data.results);
      console.log(request.data.results);
    }
    fetchData();
  }, [num]);
  const classes = useStyles();
  return (
    <div style={{ padding: "30px" }}>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        >
          <MenuItem value={0}>Netflix Originals</MenuItem>
          <MenuItem value={1}>Trending</MenuItem>
          <MenuItem value={2}>Top Rated</MenuItem>
          <MenuItem value={3}>Romance</MenuItem>
          <MenuItem value={4}>Action</MenuItem>
          <MenuItem value={5}>Comedy</MenuItem>
          <MenuItem value={6}>Horror</MenuItem>
        </Select>
      </FormControl>
      {movie?.map((movie) => (
        <Card
          className={classes.root}
          style={{
            boxShadow: " -1px 4px 20px -6px #0b0a0a",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movie?.title || movie?.name || movie?.original_name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {movie?.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Movie;
