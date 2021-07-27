import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "40px",
    borderRadius: "0",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  title: {
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 500,
  },
  desc: {
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 400,
  },
});

export default function Statistic({ place }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          {place.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
