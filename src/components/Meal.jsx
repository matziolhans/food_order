import classes from "./Meal.module.css";

function Meal({ image, name, price }) {
  return (
    <li className={classes.card}>
      <img src={image} alt={name} />
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <div>
          <h2>{name}</h2>
          <p>{price}€</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </li>
  );
}

export default Meal;
