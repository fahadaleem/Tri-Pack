import {Grid, Typography, makeStyles, Button} from '@material-ui/core'
import Image from "../../../images/header.svg"
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme=>({
    container:{
        padding:"40px 40px",
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column-reverse"
        }
    },
    image:{
        width:"100%",
        margin:"0 15px"
    },
    mainHeading:{
        fontWeight:"600",
        color:"#343F56"
    },
    about:{
        color:"#343F56",
        fontWeight:"500"
    },
    aboutUsBtn:{
        backgroundColor:"#50CB93",
        padding:"10px 25px",
        color:"#fff", 
        borderRadius:"30px",
        fontSize:"1rem",
        margin:"10px 0",
        "&:hover": {
            backgroundColor: "#343F56",
            color: "#FFFAFA",
          },
    }
}))

const Header = () => {
    const classes = useStyles();
    return ( 
        <Grid container alignItems="center" className={classes.container}>
             <Grid item lg={6}>
                 <Fade left>
                 <Typography variant="h2" color="initial" className={classes.mainHeading}>
                     About Triviz
                 </Typography>
                <Typography variant="h6" color="initial" className={classes.about}>
                Tri-Pack Films Limited (Tri-Pack), a public limited company, is a joint venture between Mitsubishi Corporation of Japan and Packages Limited of Pakistan.
                </Typography>
                <Button variant="outlined" color="default" className={classes.aboutUsBtn}>
                  Know More About Us
                </Button>
                </Fade>
            </Grid>
            <Grid item lg={6}>
                <Fade right>
                <img src={Image} alt="pic" className={classes.image} />
                </Fade>
            </Grid>
        </Grid>
    );
}
 
export default Header;