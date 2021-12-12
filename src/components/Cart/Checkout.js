import React, {useRef, useState} from 'react';
import './Checkout.css';

const isEmpty = value => value.trim() === '';
const notFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [isFormInputValidity, setIsFormInputValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true,
    });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();

        const nameEntered = nameInputRef.current.value;
        const streetEntered = streetInputRef.current.value;
        const postalEntered = postalInputRef.current.value;
        const cityEntered = cityInputRef.current.value;

        const enteredNameValid = !isEmpty(nameEntered);
        const enteredStreetValid = !isEmpty(streetEntered);
        const enteredPostalValid = !isEmpty(postalEntered);
        const enteredCityValid = notFiveChars(cityEntered);

        setIsFormInputValidity({
            name: enteredNameValid,
            street: enteredStreetValid,
            postalCode: enteredPostalValid,
            city: enteredCityValid,
        });

    }
    return (
        <form onSubmit={submitHandler} className='form1'>
            <div className={`${'control1'} ${isFormInputValidity.name ? '' : 'invalid1'} `}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name' placeholder='Your Name' ref={nameInputRef}/>
                {!isFormInputValidity.name && <p>Please Entered Name</p>}
            </div>
            <div className={`${'control1'} ${isFormInputValidity.street ? '' : 'invalid1'} `}>
                <label htmlFor="street">Street</label>
                <input type="text" id='street' placeholder='Street' ref={streetInputRef}/>
                {!isFormInputValidity.street && <p>Please Entered Street</p>}
            </div>
            <div className={`${'control1'} ${isFormInputValidity.postalCode ? '' : 'invalid1'} `}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id='postal' placeholder='Postal Code' ref={postalInputRef}/>
                {!isFormInputValidity.postalCode && <p>Please Entered Postal Code</p>}
            </div>
            <div className={'control1' + (isFormInputValidity.city ? '' : ' invalid1')}>
                <label htmlFor="city">City</label>
                <input type="text" id='city' placeholder='City' ref={cityInputRef}/>
                {!isFormInputValidity.city && <p>Please Entered City</p>}
            </div>
            <div className='actions1'>
                <button type='button' onClick={props.OnCancel}>Cancel</button>
                <button className='submit1'>Confirm</button>
            </div>
        </form>
    );
};
export default Checkout;