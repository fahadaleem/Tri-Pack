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

const Guest = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    country: "",
    CNIC: "",
    hostName: "",
    message: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.email &&
      data.name &&
      data.country &&
      data.CNIC &&
      data.hostName &&
      data.dateFrom &&
      data.dateTo
    ) {
      axios.post("http://localhost:3001/api/mail", {
        NAME: data.name,
        EMAIL: data.email,
        CNIC: data.CNIC,
        HOST: data.hostName,
        MESSAGE: data.message,
        FROM: data.dateFrom,
        TO: data.dateTo,
      });
      axios.post("http://localhost:3001/api/insert", {
        NAME: data.name,
        EMAIL: data.email,
        CNIC: data.CNIC,
        HOST: data.hostName,
        MESSAGE: data.message,
        FROM: data.dateFrom,
        TO: data.dateTo,
      }).then((response) => {
        const hostList = response.data;
        hostList.map((val, key) => {
          // console.log(val.email);
          const emailing = val.email;
          if (emailing !== "") {
            axios.post("http://localhost:3001/api/emailToHost", {
              NAME: data.name,
              EMAIL: data.email,
              CNIC: data.CNIC,
              HOST: data.hostName,
              MESSAGE: data.message,
              EMAILING: emailing,
            });
          } else {
            console.log("The host name you entered is not in the list");
          }
        });
      });

      setData({
        name: "",
        email: "",
        country: "",
        CNIC: "",
        hostName: "",
        message: "",
        dateFrom: "",
        dateTo: "",
      });

      alert("data submitted");
    } else {
      alert("Please fill all fields");
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
          Guest
        </Typography>
        <Typography variant="h4" color="initial" style={{ margin: "20px 0" }}>
          Enter Your Details
        </Typography>
        <FormControl fullWidth className={classes.textBox}>
          <TextField
            id="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            label="Enter Your Name"
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
        <FormControl fullWidth className={classes.textBox}>
          <TextField
            id="country"
            value={data.country}
            onChange={(e) => setData({ ...data, country: e.target.value })}
            label="Enter Your Country"
          />
        </FormControl>
        <FormControl fullWidth className={classes.textBox}>
          <TextField
            id="CNIC"
            value={data.CNIC}
            onChange={(e) => setData({ ...data, CNIC: e.target.value })}
            label="Enter Your CNIC"
          />
        </FormControl>
        <FormControl fullWidth className={classes.textBox}>
          <TextField
            id="host-name"
            value={data.hostName}
            onChange={(e) => setData({ ...data, hostName: e.target.value })}
            label="Enter Host Name"
          />
        </FormControl>
        <FormControl multiLine={true} fullWidth className={classes.textBox}>
          <TextField
            id="message"
            multiline={true}
            label="Enter Your Message"
            rows={4}
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
        </FormControl>
        <Typography variant="h6" color="initial">
          Duration Of Stay?
        </Typography>
        <FormControl fullWidth className={classes.textBox}>
          <TextField
            id="date"
            label="From"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            value={data.dateFrom}
            onChange={(e) => setData({ ...data, dateFrom: e.target.value })}
          />
        </FormControl>
        <FormControl fullWidth className={classes.textBox}>
          <TextField
            id="date"
            label="To"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            value={data.dateTo}
            onChange={(e) => setData({ ...data, dateTo: e.target.value })}
          />
        </FormControl>
        <Button type="submit" variant="outlined" color="default">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Guest;
