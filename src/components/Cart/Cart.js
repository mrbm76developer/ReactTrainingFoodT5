import {Fragment, useContext, useState} from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import './Cart.css';
import CartContext from "../Store/CartContext";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
        console.log(item)
    };
    const orderHandler = () => {
        setIsCheckout(true);
    }

    const cartItems = (
        <ul className='cart-items'>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );
    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-http-a17e2-default-rtdb.firebaseio.com/order.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };
    const modalActions = <div className="actions">
        <button className='button--alt' onClick={props.onClose}>
            Close
        </button>
        {hasItems && <button className="button" onClick={orderHandler}>Order</button>}
    </div>
    const cartModalContent = <Fragment>
        {cartItems}
        <div className="total">
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout addItemUser={cartItems} onConfirm={submitOrderHandler} OnCancel={props.onClose}/>}
        {!isCheckout && modalActions}
    </Fragment>
    const isSubmittingModalContent = <p>Sending order data...</p>;
    const didSubmittingModalContent = <Fragment>
        <p>Successfully sent the order!</p>
        <div className='actions'>
        <button className='button' onClick={props.onClose}>
            Close
        </button>
        </div>
    </Fragment>;
    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmittingModalContent}
        </Modal>
    );
};

export default Cart;