import { makeStyles } from "@material-ui/core";
import { borderRadius } from "@mui/system";

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
  context: {
    display: "flex",
    "align-items": "center",
  },
  navButton: { marginLeft: 10, marginRight: 15 },

  filterButton: {
    backgroundColor: '#142d4c',
    color: 'white',
    borderRadius : "0.7rem",
    fontWeight: "bold",
    "box-shadow": "5px 5px 1px 0.1px rgba(0, 0, 255, .2)",
    fontSize: "0.8rem",
  },

  filterButtonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
    gap: "100px",
  
   
  },
});

export default useStyles;
