import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";

const theme = createMuiTheme({
  pallete: {
    primary: {
      main: "#F73A05",
    },
  },
  background: {
    default: "ffffff",
  },
});

export default theme;
