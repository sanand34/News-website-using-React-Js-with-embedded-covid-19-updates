import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 500,
  },
});

export default function MediaCard({ news }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ boxShadow: " -1px 4px 20px -6px #0b0a0a" }}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={news.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {news.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={news.url} rel="noreferrer" target="_blank">
          <Button size="small" color="primary">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
