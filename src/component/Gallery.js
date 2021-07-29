import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ImageGalleryContent from "../static/ImageGalleryContent";
import {
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(20),
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    paddingTop: theme.spacing(5),
  },
  title: {
    fontFamily: "'Poppins', sans-serif;",
  },
  icon: {
    color: "#fff",
  },
}));

export default function Gallery() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Categories
      </Typography>
      <Container>
        <GridList container cellHeight={400} cols={3} className={classes.grid}>
          {ImageGalleryContent.map((data) => (
            <GridListTile key={data.id} cols={data.cols || 1}>
              <img src={data.image} alt={data.title} />
              <GridListTileBar
                className={classes.title}
                title={data.title}
                subtitle={data.description}
                actionIcon={
                  <IconButton>
                    <InfoOutlinedIcon className={classes.icon} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </Container>
  );
}
