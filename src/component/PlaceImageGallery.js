import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Gallery from "./Gallery";
import ImageGalleryContent from "../static/ImageGalleryContent";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
  },
}));

export default function PlaceImageFallery() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Gallery place={ImageGalleryContent[0]} />
    </Container>
  );
}
