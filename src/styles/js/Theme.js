import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    // primary: {
    //   light: "#1686af",
    //   dark: "#201d2f",
    //   main: "#302b48",
    //   contrastText: "#FFFFFF",
    //   transparent: "#004862bd"
    // },

    secondary: {
      // light: "#118af8d9",
      main: "#f0931d",
      // dark: "#16538b"
    },
    textColor: {
      main: '#777',
      dark: '#ccc',
    }
  },
  overrides: {
    MuiMobileStepper: {
      // Name of the component ⚛️ / style sheet
      dotActive: {
        // Name of the rule
        backgroundColor: "#2272BA" // Some CSS
      }
    },
    MuiTableCell: {
      root: {
        padding: 20
      }
    }
  }
});

export default theme;