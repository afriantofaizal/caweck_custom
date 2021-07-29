import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#121212",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  footer: {
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 300,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer position="fixed">
      <Box className={classes.root}>
        <Container>
          <Typography variant="h6" className={classes.footer}>
            © 2021 - Caweck Custom
          </Typography>
        </Container>
      </Box>
    </footer>
  );
}
