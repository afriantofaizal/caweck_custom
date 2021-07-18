import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  catalogContainer: {
    paddingTop: theme.spacing(6),
  },
  catalogTitle: {
    fontFamily: "'Open Sans', sans-serif;",
    fontWeight: 800,
  },
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("tagline");
  return (
    <Container
      maxWidth="lg"
      className={classes.catalogContainer}
      id="place-to-visit"
    >
      <Typography variant="h4" className={classes.catalogTitle}>
        Catalog
      </Typography>
      <Grid Container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.root}>
            <Grid item xs={12} sm={6} md={4}>
              <ImageCard place={places[0]} checked={checked} />
              <Grid item xs={12} sm={6} md={4}>
                <ImageCard place={places[1]} checked={checked} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ImageCard place={places[2]} checked={checked} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ImageCard place={places[3]} checked={checked} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
