import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Statistic from "./PlaceStatistic";
import StatisticContent from "../static/StatisticContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    "& > *": {
      margin: theme.spacing(0),
      width: theme.spacing(200),
      height: theme.spacing(30),
    },
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default function PlaceStatistic() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Paper elevation={0}>
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} sm={12} md={3}>
              <Statistic place={StatisticContent[0]} />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Statistic place={StatisticContent[1]} />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Statistic place={StatisticContent[2]} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
}
