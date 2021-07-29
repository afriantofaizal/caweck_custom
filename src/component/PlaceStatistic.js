import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import StatisticContent from "../static/StatisticContent";
import Statistic from "./Statistic";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "0 auto",
    backgroundColor: "#fff",
  },
  container: {
    minWidth: 275,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default function PlaceStatistic() {
  const classes = useStyles();
  console.log(StatisticContent);
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <section>
          <Container>
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={12} sm={4}>
                <Statistic place={StatisticContent[0]} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Statistic place={StatisticContent[1]} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Statistic place={StatisticContent[2]} />
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
    </React.Fragment>
  );
}
