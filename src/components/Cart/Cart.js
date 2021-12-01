import React, {useContext} from 'react';
import "./Cart.css";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {};

    const cartItemAddHandler = (item) => {};

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

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onClose}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    );
}
export default Cart;