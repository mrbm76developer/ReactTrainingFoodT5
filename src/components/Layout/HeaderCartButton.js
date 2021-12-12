import {useContext, useEffect, useState} from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from "../Store/CartContext";
import './HeaderCartButton.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnAnimation, setBtnAnimation] = useState(false);
    const {items} = cartCtx;
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnAnimation(true);
        const timer = setTimeout(() => {
            setBtnAnimation(false)
        }, 300)
        return () => {
            clearTimeout(timer);
        }
    }, [items])
    const classes = `${"button"} ${btnAnimation ? "bump" : ""}`;
    return (
        <button className={classes} onClick={props.onClick}>
      <span className="icon">
        <CartIcon/>
      </span>
            <span>Your Cart</span>
            <span className="badge">{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;