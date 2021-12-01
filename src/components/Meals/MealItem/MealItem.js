import React, {useContext} from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../Store/CartContext";

const MealItem = (props) => {
    const ctxContext = useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`;
    const addToCartHandler = (amount) => {
      ctxContext.addItem({
          id:props.id,
          name:props.name,
          price:props.price,
          amount:amount
      });
    }
  return(
      <li className="meal">
      <div>
          <h3>{props.name}</h3>
          <div className="description">{props.description}</div>
          <div className="price">{price}</div>
      </div>
      <div><MealItemForm onAddToCart={addToCartHandler}/></div>
      </li>
  );
}
export default MealItem;