import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#142d4c",
  },

  brand: {
    color: "#ffffff",
    fontWeight: "bold",
    fonrSize: "1.5rem",
    marginLeft: 10,
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
  transparentBackground: {
    backgroundColor: "transparent",
  },
});

export default useStyles;
