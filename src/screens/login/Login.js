import React, { useState, useContext, useEffect } from "react";
// import "./style.css"
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Loader from "../../utils/Loader";
import Navbar from "../home/components/Navbar";
import LoginCard from "../../LoginCard";
const useStyles = makeStyles({
  root: {
    // backgroundColor: "#E9EAED",
    // backgroundColor: "#50CB93",
    // background: 'linear-gradient(253deg, rgba(80,203,147,1) 79%, rgba(51,115,116,1) 100%)',
    background:
      "linear-gradient(0deg, rgba(80, 203, 147, 0.8), rgba(52, 63, 86, 0.8)), url(bg2.jpg)",
    position: "absolute",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    // paddingBottom:"40px"
  },
  mainHeading: {
    fontWeight: "bold",
    color: "#343F56",
  },
  form: {
    padding: "45px 35px",
    marginTop: "3rem",
  },
  textField: {
    margin: "10px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#343F56 !important",
    },
  },
  inputLabel: {
    color: "#343F56 !important",
    fontWeight: "500",
  },
  submitBtn: {
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#343F56",
    "&:hover": {
      backgroundColor: "#50CB93",
    },
  },
  linkBtn: {
    textDecoration: "none",
    fontSize: "18px",
    color: "#29524A",
  },
  checkbox: {
    color: "#343F56 !important",
  },
});

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const [login, setLogin] = useState(false);

  const handleToggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    const credentials = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };

    if (credentials.email && credentials.password) {
      if (
        credentials.email === "abcd1234" &&
        credentials.password === "specialForce"
      ) {
        setLogin(true);
        if(rememberMe) {
          localStorage.setItem("login", true);
        };
        alert("Login");
      }
      else{
        alert("Password or Email is incorrect")
      }
    } else {
      alert("fill out all the field");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const localStorageVal = localStorage.getItem("login");
    setLogin(localStorageVal?true:false);
  }, []);

  return (
    <div className={classes.root}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar loginBtnShow={false} />
         {login?
         <LoginCard />: <Container
         maxWidth="xs"
         className={classes.container}
         component={Paper}
         elevation={3}
       >
         <form onSubmit={handleLoginUser} className={`${classes.form}`}>
           <Box my={2}>
             <Typography
               variant="h3"
               color="initial"
               align="center"
               className={`${classes.customFont} ${classes.mainHeading}`}
             >
               Login Your Account
             </Typography>
           </Box>
           <Box my={1}>
             {/* {error.isError ? (
           <Alert severity="error">{error.errorMessage}</Alert>
         ) : (
           ""
         )} */}
           </Box>
           <TextField
             id="email"
             label="Email"
             variant="outlined"
             fullWidth
             className={`${classes.textField} ${classes.customFont}`}
             InputLabelProps={{ className: classes.inputLabel }}
             onChange={(e) => setEmail(e.target.value)}
             value={email}
           />
           <TextField
             id="password"
             label="Password"
             variant="outlined"
             type="password"
             fullWidth
             value={password}
             InputLabelProps={{ className: classes.inputLabel }}
             className={classes.textField}
             onChange={(e) => setPassword(e.target.value)}
           />
           <FormControlLabel
             label="Remember Me"
             control={
               <Checkbox
                 value="Remember Me"
                 checked={rememberMe}
                 onChange={handleToggleRememberMe}
                 className={classes.checkbox}
               />
             }
           />

           <Box style={{ textAlign: "center" }}>
             {false ? (
               <Button
                 variant="contained"
                 color="primary"
                 className={classes.submitBtn}
                 size="large"
                 type="submit"
               >
                 <CircularProgress style={{ color: "white" }} />
               </Button>
             ) : (
               <Button
                 variant="contained"
                 color="primary"
                 endIcon={<KeyboardArrowRightIcon />}
                 className={classes.submitBtn}
                 size="large"
                 type="submit"
               >
                 Login
               </Button>
             )}
           </Box>
         </form>
       </Container>}
        </>
      )}
    </div>
  );
};

export default Login;
