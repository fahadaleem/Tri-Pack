import LoaderImage from "../images/loader.svg"
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    loader: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "100%",
        width: "100%",
    }
}));
const Loader = () => {
    const classes = useStyles();
    return (  
        <img src={LoaderImage} alt="Loader"  className={classes.loader} />
    );
}
 
export default Loader;