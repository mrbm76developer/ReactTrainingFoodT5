import React, {useContext} from 'react';
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/CartContext";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    return (<button className="button" onClick={props.onClick}>
        <span className="icon">
            <CartIcon/>
        </span>
        <span>Cart</span>
        <span className="badge">{numberOfCartItems}</span>
    </button>);
}
export default HeaderCartButton;