import SummaryMeals from "./SummaryMeals";
import AvailableMeals from "./AvailableMeals";
import {Fragment} from "react";
import Cart from "../Cart/Cart";

const Meals = (props) => {
    return (
        <Fragment>
            <SummaryMeals/>
            <AvailableMeals/>
        </Fragment>
    );
}
export default Meals;