import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./component/Header";
import TagLine from "./component/TagLine";
import PlaceImageCard from "./component/PlaceImageCard";
import Footer from "./component/Footer";
import PlaceStatistic from "./component/PlaceStatistic";
import Gallery from "./component/Gallery";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80')`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "ro-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  root: {
    background: "#F7F9FC",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <CssBaseline />
        <Header />
        <TagLine />
      </div>

      <PlaceImageCard />
      <PlaceStatistic />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
