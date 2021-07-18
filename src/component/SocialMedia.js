import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  iconMenu: {
    color: "#fff",
    fontSize: "2rem~",
  },
}));

export default function SocialMedia() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton>
        <InstagramIcon className={classes.iconMenu} />
        <FacebookIcon className={classes.iconMenu} />
        <YouTubeIcon className={classes.iconMenu} />
        <WhatsAppIcon className={classes.iconMenu} />
      </IconButton>
    </div>
  );
}
