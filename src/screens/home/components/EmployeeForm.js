import React, { useState } from "react";
import axios from "axios";
import {
  makeStyles,
  Container,
  Paper,
  Typography,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 25px",
  },
  textBox: {
    margin: "10px 0;",
  },
}));

const EmployeeForm = () => {
  const [data, setData] = useState({
    email: "",
    hostName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.email &&
      data.hostName &&
      data.hostName.length > 0 &&
      data.email.length > 0
    ) {
        axios.post('http://localhost:3001/api/insert2',{
            NAME: data.hostName,
            EMAIL: data.email,
        }).then(function(response) {
            console.log(response);
            setData({
                email: "",
                hostName: "",
            })
        alert("Submitted Successfull")

        })
    }
    else{
        alert("Please Fill Out All The Field")

    }
  };

  const classes = useStyles();
  return (
    <Container
      elevation={5}
      component={Paper}
      maxWidth="sm"
      className={classes.root}
    >
      <form onSubmit={handleSubmit}>
        <Typography variant="h3" color="initial" align="center">
          Employee
        </Typography>
        <Typography variant="h4" color="initial" style={{ margin: "20px 0" }}>
          Enter Your Details
        </Typography>
        <FormControl fullWidth className={classes.textBox}>
          <TextField
            id="host"
            value={data.hostName}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            label="Enter Host Name"
          />
        </FormControl>
        <FormControl fullWidth className={classes.textBox}>
          <TextField
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            label="Enter Your Email"
          />
        </FormControl>
        <Button type="submit" variant="outlined" color="default">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default EmployeeForm;
