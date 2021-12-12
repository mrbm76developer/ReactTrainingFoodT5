import "./AvailableMeals.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import {useEffect, useState} from "react";

const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);
    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            const response = await fetch('https://react-http-a17e2-default-rtdb.firebaseio.com/meals.json');
            if (!response.ok){
                throw new Error('Something went wrong');
            }
            const responseData = await response.json();
            const loadingMeals = [];
            for (const key in responseData) {
                loadingMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                });
            }
            setMeals(loadingMeals);
            setIsLoading(false);
        }
        fetchMeals().catch(error => {
            setIsLoading(false);
            setHttpError(error.message)
        });
    }, []);
    const mealsList = meals.map(meal => <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />)

    if (isLoading) {
        return (
            <section className='loadingMeals'>
                <p>Loading...</p>
            </section>
        );
    }
    if (httpError){
        return (
            <section className='mealsError'>
                <p>{httpError}</p>
            </section>
        );
    }

    return (
        <section className="meals">
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>

    );

}
export default AvailableMeals;