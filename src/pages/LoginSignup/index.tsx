
import { useState } from 'react';

const LoginSignup = () => {

    const [action] = useState("Sign Up");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="input">
                <input type="fullName" placeholder='Name' />
            </div>
            <div className="input">
                <input type="email" placeholder='Email Address' />
            </div>
            <div className="input">
                <input type="password" placeholder='Password' />
            </div>
            <div className="submit-container">
            <button onClick={LoginSignup}>Sign in!</button>
            </div>
        </div>
    )
}

export default LoginSignup