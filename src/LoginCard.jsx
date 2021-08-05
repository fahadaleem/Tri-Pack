import { NavLink } from 'react-router-dom'

const LoginCard = () =>{


    return(
        <>
            <div className="main">
                <NavLink to="guestdata" className="navlink">
                    <button className="home" >
                            <h2>Guest Data</h2>  
                    </button>
                </NavLink>
                <NavLink exact to="employeedata" className="navlink">
                    <button className="home">
                        <div>
                            <h2>Employeedata</h2>
                        </div>
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default LoginCard;