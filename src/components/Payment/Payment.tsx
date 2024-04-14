import '../../index.css'


const Payment = () => {

    return (
        <div className = 'container'>
        <div className = "header">
        <div className="text">Payment</div>
                </div>
                
                <div className="inputs">
         <div className="input">
        <input type="Full name" placeholder='Full name'/>
        </div>
         <div className="input">
        <input type="Card number" placeholder='Card number'/>
        </div>
         <div className="input">
        <input type="Expiry date" placeholder='Expiry Date' />
        </div>
        <div className="input">
        <input type="Security number" placeholder='Security Number' />
        </div>
        <div className="submit-container">
            <div className="submit">Pay Now</div>
   </div>
   </div>
   </div>
   
    );
}

export default Payment