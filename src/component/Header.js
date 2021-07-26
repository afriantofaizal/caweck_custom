import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarTransparent: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  appBarSolid: {
    backgroundColor: "#121212",
  },
  navBar: {
    background: "none",
  },
  appbarWrapper: {
    width: "86%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 800,
  },
  logo: {
    paddingTop: theme.spacing(1),
  },

  instagram: {
    color: "#fff",
    "&:hover": {
      color: "#C03E7A",
    },
  },
  facebook: {
    color: "#fff",
    "&:hover": {
      color: "#3B5998",
    },
  },
  twitter: {
    color: "#fff",
    "&:hover": {
      color: "#00ACEE",
    },
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
            <img src={logo} alt="Caweck Custom" className={classes.logo} />
          </Typography>
          <IconButton>
            <a
              className={classes.instagram}
              href="https://www.instagram.com/caweck_custom/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </IconButton>
          <IconButton>
            <a
              className={classes.facebook}
              href="https://www.instagram.com/caweck_custom/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </IconButton>
          <IconButton>
            <a
              className={classes.twitter}
              href="https://twitter.com/vikivikicaw"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
