import classes from "./Menu.module.css";
import { useState } from "react";
import Meal from "./Meal";

function Menu() {
  const [meals, seatMenu] = useState([
    { id: "1", name: "Steak", price: "10", image: "src/assets/Steak.jpg" },
    { id: "2", name: "Burger", price: "8", image: "src/assets/Burger.jpg" },
  ]);

  return (
    <>
      <ul className={classes.menu_container}>
        {meals.map((meal) => (
          <Meal image={meal.image} name={meal.name} price={meal.price} />
        ))}
      </ul>
    </>
  );
}

export default Menu;
