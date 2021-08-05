import { useState } from "react"
import LoginCard from "./LoginCard"
import LoginForm from "./LoginForm"

function Login1 () {
    const adminUser = {
        id: "abcd1234",
        password: "specialForce"
    }

    const [user, setUser] = useState({id:"", password:""})
    const [error, setError] = useState("")

    const Login = details => {
        // console.log(details)

        if(details.id === adminUser.id && details.password === adminUser.password){
            setUser({
                id: details.id,
                password: details.password
            })
        }
        else{
            alert("Incorrect Id or Password")
        }
    }

    return(
        <div>
            {(user.id !== "") ? (
                <LoginCard />
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
    )

}

export default Login1;