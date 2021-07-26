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
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "0 auto",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 200,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Box className={classes.root}>
        <Container>
          <Typography>© 2021-2022 . Caweck Custom</Typography>
        </Container>
      </Box>
    </footer>
  );
}
