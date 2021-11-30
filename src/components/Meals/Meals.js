import SummaryMeals from "./SummaryMeals";
import AvailableMeals from "./AvailableMeals";
import {Fragment} from "react";

const Meals = (props) => {
    return (
        <Fragment>
            <SummaryMeals/>
            <AvailableMeals/>
        </Fragment>
    );
}
export default Meals;