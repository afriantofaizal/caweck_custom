import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: "20px",
    borderRadius: "0",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    height: 280,
  },
  title: {
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 500,
  },
  desc: {
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 300,
  },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={place.imageUrl} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
