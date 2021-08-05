import { Container, Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontWeight: "600",
    color:"#343F56"
  },
  cards:{
      backgroundColor:"#F54748",
      margin:"50px 0px",
      padding:"100px 10px",
      borderLeft:"10px solid #F54748",
        cursor:"pointer",
      '&:hover':{
         borderLeft:"10px solid #343F56",
         borderLeftColor:"#343F56 !important",
     boxShadow:"2px 2px 10px #343F56"

     },
     color:"#FFFFFF",
     borderRadius:"10px",
  },
  cardTitle:{
      fontWeight:"600",
      fontSize:"2.5em",
  }
}));

const Main = () => {
    const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography variant="h3" color="initial" align="center" className={classes.title}>
        Tell Us About Yourself By Joining!
      </Typography>
      <Typography variant="h6" align="center" color="initial">You can join by creating your account as an Employee or as a guest!</Typography>
      <Grid container justifyContent="space-between">
        <Grid lg={5} className={classes.cards}>
            <Typography variant="h3" color="initial" align="center" className={classes.cardTitle}>I'm a Guest!</Typography>
        </Grid>
        <Grid lg={5} className={classes.cards}>
            <Typography variant="h3" color="initial" align="center" className={classes.cardTitle}>I'm an Employee!</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
