import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },

  brand: {
    fontWeight: "bold",
    fonrSize: "1.5rem",
  },
  grow: { flex: 1 },
  main: {
    minHeight: "80vh",
  },
  footer: {
    margintTop: 10,
    textAlign: "center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial", 
  },
});

export default useStyles;
