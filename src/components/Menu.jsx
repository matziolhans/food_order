import classes from "./Menu.module.css";
import { useState } from "react";
import Meal from "./Meal";

function Menu() {
  const [meals, seatMenu] = useState([
    { id: "1", name: "Steak", price: "10", image: "src/assets/Steak.jpg" },
    { id: "2", name: "Burger", price: "8", image: "src/assets/Burger.jpg" },
    { id: "3", name: "Pizza", price: "15", image: "src/assets/Pizza.jpg" },
    { id: "4", name: "Salad", price: "5", image: "src/assets/Salad.jpg" },
    { id: "5", name: "Pasta", price: "10", image: "src/assets/Pasta.jpg" },
  ]);

  return (
    <>
      <ul className={classes.menu_container}>
        {meals.map((meal) => (
          <Meal key={meal.id} id={meal.id} image={meal.image} name={meal.name} price={meal.price} />
        ))}
      </ul>
    </>
  );
}

export default Menu;
