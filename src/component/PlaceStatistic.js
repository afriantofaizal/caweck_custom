import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Card,
  CardContent,
  Typography
} from '@material-ui/core'
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
  card: {
    maxWidth: "100%",
    margin: "20px",
    borderRadius: "0",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  }
}));

export default function PlaceStatistic() {
  const classes = useStyles();
  console.log(StatisticContent)
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Paper elevation={0}>
          <Grid container spacing={3} className={classes.container}>
            {StatisticContent.map(item =>
              <Grid item xs={12} sm={12} md={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      className={classes.title}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.desc}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
}
