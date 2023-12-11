import classes from "./Menu.module.css";
import { useState } from "react";
import Meal from "../components/Meal";
import { forwardRef } from "react";

import Pizza from "../assets/pizza.jpg";
import Burger from "../assets/burger.jpg";
import Steak from "../assets/steak.jpg";
import Salad from "../assets/salad.jpg";
import Pasta from "../assets/pasta.jpg";
import Soup from "../assets/soup.jpg";

const Menu = forwardRef((props, ref) => {
  const [meals, seatMenu] = useState([
    { id: "1", name: "Steak", price: "10", image: Steak },
    { id: "2", name: "Burger", price: "8", image: Burger },
    { id: "3", name: "Pizza", price: "15", image: Pizza },
    { id: "4", name: "Salad", price: "5", image: Salad },
    { id: "5", name: "Pasta", price: "10", image: Pasta },
    { id: "6", name: "Soup", price: "7", image: Soup },
  ]);

  return (
    <div ref={ref}>
      <h2 className={classes.menu_headline}>Menu</h2>
      <ul className={classes.menu_container}>
        {meals.map((meal) => (
          <Meal
            key={meal.id}
            id={meal.id}
            image={meal.image}
            name={meal.name}
            price={meal.price}
          />
        ))}
      </ul>
    </div>
  );
});

export default Menu;
