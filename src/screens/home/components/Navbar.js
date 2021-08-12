import {
  Typography,
  Toolbar,
  AppBar,
  makeStyles,
  Button,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FFFFFF",
    padding: "0px 20px",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#343F56",
    fontWeight: "600",
  },
  tagline: {
    display: "block",
    fontSize: "0.8rem",
    color: "#50CB93",
  },
  button: {
    backgroundColor: "#50CB93",
    padding: "5px 70px",
    fontSize: "1.2rem",
    color: "#FFFAFA",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#343F56",
      color: "#FFFAFA",
    },
  },
  link: {
    color: "#343F56",
    padding: "10px 30px",
    fontWeight: "500 !important",
    "&:hover": {
      backgroundColor: "#50CB93",
      color: "#FFFAFA",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      color="primary"
      className={classes.appBar}
      elevation={3}
    >
      <Toolbar className={classes.toolBar}>
        <Box display="flex" alignItems="center">
          <Typography variant="h4" className={classes.title}>
            TriViz
            <label className={classes.tagline}>Make easy to meet!</label>
          </Typography>
          <Box mx={3} display="flex">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" color="initial" className={classes.link}>
                Home
              </Typography>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              {" "}
              <Typography variant="h6" color="initial" className={classes.link}>
                About Us
              </Typography>
            </Link>
          </Box>
        </Box>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="default"
            className={classes.button}
            endIcon={<ArrowForwardIosIcon />}
          >
            Login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
