import classes from "./Header.module.css"

function Header() {
  return (
    <header className={classes.header}>
      <h1>Food Order App</h1>
      <button>Cart</button>
    </header>
  );
}

export default Header;
