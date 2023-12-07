import classes from "./Meal.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";

function Meal({ id, image, name, price }) {

  const context = useContext(CartContext)

  function handleAddMeal() {
    context.addItem({ id, image, name, price })
  }

  return (
    <li className={classes.card}>
      <img src={image} alt={name} />
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <div>
          <h2>{name}</h2>
          <p>{price}€</p>
        </div>
        <button onClick={handleAddMeal}>Add</button>
      </div>
    </li>
  );
}

export default Meal;
