import classes from "./Menu.module.css"
import { useState } from "react";

function Menu() {
  const [meals, seatMenu] = useState([
    { id: "1", name: "Steak", price: "10", image: "src/assets/Steak.jpg" },
    { id: "2", name: "Burger", price: "8", image: "src/assets/Burger.jpg" },
  ]);

  return (
    <>
      <ul className={classes.menu_container}>{meals.map((meal) => <li key={meal.id}>{meal.name}</li>)}</ul>
    </>
  );
}

export default Menu;
