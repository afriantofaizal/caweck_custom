import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "40px",
  },
  title: {
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 500,
  },
  desc: {
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 300,
  },
  icon: {
    margin: "0 auto",
    marginBottom: 30,
  },
}));

export default function Statistic({ place }) {
  const classes = useStyles();

  return (
    <div className={classes.root} variant="outlined">
      <Avatar
        gutterBottom
        alt="icon"
        variant="square"
        className={classes.icon}
        src={place.iconUrl}
      />
      <Typography
        gutterBottom
        variant="h6"
        component="h2"
        className={classes.title}
      >
        {place.title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        component="p"
        className={classes.desc}
      >
        {place.description}
      </Typography>
    </div>
  );
}
