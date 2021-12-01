import React, {Fragment} from 'react';
import "./Header.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className="header">
                <h1>React Food</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className="main-image">
                <img src={meals} alt="meals food"/>
            </div>
        </Fragment>
    );
}
export default Header;