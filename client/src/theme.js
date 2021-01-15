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
      fontFamily: "Rubik,sans-serif"
    },
    h2: {
      fontFamily: "Rubik,sans-serif"
    },
    h3: {
      fontFamily: "Rubik,sans-serif",
      "@media only screen and (max-width: 770px)": {
        fontSize: "2rem"
      },
      "@media only screen and (max-width: 426px)": {
        fontSize: "1.8rem"
      }
    },
    h4: {
      fontFamily: "Rubik,sans-serif",
      "@media only screen and (max-width: 426px)": {
        fontSize: "1.6rem"
      }
    },
    h5: {
      fontFamily: "Rubik,sans-serif"
    },
    h6: {
      fontFamily: "Rubik,sans-serif"
    },
    button: {
      fontFamily: "Rubik,sans-serif"
    }
  }
};
