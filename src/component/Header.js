import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarTransparent: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  appBarSolid: {
    backgroundColor: "rgba(0, 0, 0)",
  },
  navBar: {
    background: "none",
  },
  appbarWrapper: {
    width: "90%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    fontFamily: "'Open Sans', sans-serif;",
    fontWeight: 800,
    color: "#F87B03",
  },
  iconMenu: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#6F35F1",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState("appBarTransparent");

  const navRef = React.useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 320;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes[navRef.current]}
        elevation={0}
      >
        <Toolbar className={classes.appbarWrapper}>
          <Typography variant="h5" className={classes.appbarTitle}>
            <span className={classes.colorText}>Caweck</span>custom
          </Typography>
          <IconButton>
            <SortIcon className={classes.iconMenu} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
