

import name_icon from '../../assets/name.jpg'
import password_icon from '../../assets/password.jpg'

const Payment = () => {

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Payment</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={name_icon} alt="" />
                    <input type="Full name" placeholder='Full name' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="Card number" placeholder='Card number' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="Expiry date" placeholder='Expiry Date' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="Security number" placeholder='Security Number' />
                </div>
                <div className="submit-container">
                    <div className="submit">Pay Now</div>
                </div>
            </div>
        </div>

    )
}

export default Payment