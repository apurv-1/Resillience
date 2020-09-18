export default {
  overrides: {
    // Style sheet name ⚛️
    MuiPaper: {
      // Name of the rule
      elevation24: {
        boxShadow: "none"
      }
    }
  },
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#232127", //F5DEB3 (wheat) #3f3f3f
      dark: "#008394",
      contrastText: "#fff"
    },
    secondary: {
      light: "",
      main: "#0F7DC2",
      dark: "",
      contrastText: "#fff"
    }
  },
  typography: {
    fontFamily: ["muli", "sans-serif"].join(","),
    h1: {
      fontFamily: "Rubik"
    },
    h2: {
      fontFamily: "Rubik"
    },
    h3: {
      fontFamily: "Rubik",
      "@media only screen and (max-width: 770px)": {
        fontSize: "2rem"
      }
    },
    h4: {
      fontFamily: "Rubik"
    },
    h5: {
      fontFamily: "Rubik"
    },
    h6: {
      fontFamily: "Rubik"
    },
    button: {
      fontFamily: "Rubik"
    }
  }
};
