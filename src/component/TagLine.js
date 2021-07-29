import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, IconButton, Typography } from "@material-ui/core";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    fontSize: "2rem",
  },
  container: {
    textAlign: "center",
  },
  title: {
    fontWeight: 800,
    color: "#fff",
    fontFamily: "'Poppins', sans-serif;",
    paddingTop: theme.spacing(14),
  },
  caption: {
    fontWeight: 300,
    color: "#fff",
    fontFamily: "'Poppins', sans-serif;",
    paddingBottom: theme.spacing(8),
  },
  goDown: {
    color: "#2196F3",
    fontSize: "3rem",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      transform: "translateY(20px)",
    },
  },
}));

export default function TagLine() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <Collapse
        className={classes.tagWrapper}
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <Typography
            variant="h2"
            className={classes.title}
            id="tagline"
            gutterBottom
          >
            {" "}
            CUSTOM KITBASH
            <br />
            YOUR TOYS
          </Typography>
          <Typography variant="h5" className={classes.caption}>
            Get this outfit only at caweck custom
          </Typography>
        </div>

        <Scroll to="place-to-visit" smooth="true">
          <IconButton color="primary">
            <ArrowDownwardRoundedIcon className={classes.goDown} />
          </IconButton>
        </Scroll>
      </Collapse>
    </div>
  );
}
