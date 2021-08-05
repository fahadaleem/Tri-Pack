import Routing from './Routing'
import { Link } from 'react-router-dom'
import ScrollToTop from './Footer'

const Header = () => {

    

    return(
        <>
            <div className="header">
                <div className="headback">
                </div>
                <div className="brandName">
                    <h1>Tri-Pack Films Limited</h1>
                    <p>One of the Leading BOPP Producer in Pakistan</p>
                    <p>We belive in our Values to Care Honestly about our People,to Respect them and to lead them Courageously</p>
                </div>
                <Link to="login" className="login">
                    <button>Login</button>
                </Link>
            </div>
            <Routing />
            <div className="scroll"><ScrollToTop /></div>
        </>
    )
}

export default Header;