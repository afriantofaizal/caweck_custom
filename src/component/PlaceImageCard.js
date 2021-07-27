import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import ImageCardContent from "../static/ImageCardContent";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "0 auto",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  catalogTitle: {
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 400,
    paddingBottom: theme.spacing(3),
  },
}));

export default function PlaceImageCard() {
  const classes = useStyles();
  const checked = useWindowPosition("tagline");
  return (
    <Container id="place-to-visit">
      <div className={classes.root}>
        <Typography variant="h3" className={classes.catalogTitle}>
          Catalog
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <ImageCard place={ImageCardContent[0]} checked={checked} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ImageCard place={ImageCardContent[1]} checked={checked} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ImageCard place={ImageCardContent[2]} checked={checked} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ImageCard place={ImageCardContent[3]} checked={checked} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ImageCard place={ImageCardContent[4]} checked={checked} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ImageCard place={ImageCardContent[5]} checked={checked} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ImageCard place={ImageCardContent[6]} checked={checked} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ImageCard place={ImageCardContent[7]} checked={checked} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
