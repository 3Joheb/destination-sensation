

import name_icon from '../../assets/name.jpg';
import email_icon from '../../assets/email.jpg';
import password_icon from '../../assets/password.jpg';

const LoginSignup = () => {

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={name_icon} alt="" />
                    <input type="name" placeholder='Name' />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email Address' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                <div className="submit-container">
                    <div className="submit">Signup</div>
                    <div className="submit">Login</div>
                </div>
            </div>
        </div>

    );
};
export default LoginSignup;
