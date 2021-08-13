import { Container, Typography, makeStyles, Grid } from "@material-ui/core";
import Shake from 'react-reveal/Shake';
import ScrollAnimation from 'react-animate-on-scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontWeight: "600",
    color:"#343F56",
    [theme.breakpoints.down("sm")]:{
      fontSize:"2rem"
    }
  },
  cards:{
      backgroundColor:"#50CB93",
      // background: 'linear-gradient(253deg, rgba(255,255,255,1) 0%, rgba(80,203,147,1) 0%, rgba(51,115,116,1) 81%, rgba(15,4,76,1) 100%)',
      // margin:"50px 0px",
      padding:"100px 10px",
      borderLeft:"10px solid #50CB93",
     margin:"55px 25px",
    width:"100%",
      transition:".300s",
        cursor:"pointer",
      '&:hover':{
         borderLeft:"10px solid #0F044C",
         borderLeftColor:"#0F044C !important",
     boxShadow:"2px 2px 10px #343F56",
     

     },
     color:"#FFFFFF",
     borderRadius:"10px",
  },
  cardTitle:{
      fontWeight:"600",
      fontSize:"2.5em",
  }
}));

const Main = (props) => {
    const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography variant="h3" color="initial" align="center" className={classes.title}>
        Tell Us About Yourself By Joining!
      </Typography>
      <Typography variant="h6" align="center" color="initial">You can join by creating your account as an Employee or as a guest!</Typography>
      <Grid container justifyContent="center" alignItems="center">
        <Grid lg={5} md={5} sm={10} xs={10} className={classes.cards} onClick={()=>{
          props.handleSetFormName("guest");
        }}>
            <Typography variant="h3" color="initial" align="center" className={classes.cardTitle}>I'm a Guest!</Typography>
        </Grid>
        <Grid lg={5} md={5} sm={10} xs={10} className={classes.cards} onClick={()=>{
          props.handleSetFormName("employee");
          window.scrollY = window.scrollY + 40;
        }}>
            <Typography variant="h3" color="initial" align="center" className={classes.cardTitle}>I'm an Employee!</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
