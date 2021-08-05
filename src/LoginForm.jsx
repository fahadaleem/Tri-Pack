import { useState } from 'react';

const LoginForm = ({ Login, error }) => {
    
    const [details, setDetails] = useState({id:"", password:""})

    const onSubmit = (e) => {
        e.preventDefault();

        Login(details);
    }

    return(
        <>
        <form className="loginForm" onSubmit={onSubmit}>
            <h2>LOGIN</h2>
            <div>
                <label htmlFor="id">ID</label>
                <input name="id" placeholder="enter your ID" onChange={e => setDetails({...details, id: e.target.value})}   value={details.id} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="enter your Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.Password} />
            </div>
            <input className="loginBtn" type="submit" value="LOGIN" />
        </form>
        </>
    )
} 

export default LoginForm;