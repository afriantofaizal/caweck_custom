import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, IconButton } from "@material-ui/core";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif;",
    height: "100vh",
    fontSize: "2rem",
  },
  container: {
    textAlign: "center",
  },
  title: {
    fontWeight: 800,
    color: "#fff",
  },
  goDown: {
    color: "#2196F3",
    fontSize: "4rem",
    "&:hover": {
      color: "#FFFFFF",
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
          <h2 className={classes.title} id="tagline">
            CUSTOM KITBASH
            <br />
            YOUR TOYS
          </h2>
          <Scroll to="place-to-visit" smooth="true">
            <IconButton color="primary">
              <DetailsRoundedIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
