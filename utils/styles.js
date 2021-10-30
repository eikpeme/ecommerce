import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#142d4c",
  },

  brand: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "1.5rem",
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
  confirmation: {
    margin: "0 auto",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "3.5rem",
    marginTop: 120,
  },
  cont: {
    margin: "0 auto",
    textAlign: "center",
    marginTop: 120,
  },
});

export default useStyles;
