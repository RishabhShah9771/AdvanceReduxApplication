import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../Store/cartSlice";

const CartItem = (props) => {
  // Get the dispatch function from react-redux to dispatch actions
  const dispatch = useDispatch();

  // Destructure item properties from props for easier access
  const { title, quantity, total, price, id } = props.item;

  // Handler to add an item to the cart
  const addItemHandler = () => {
    // Dispatch the addItemToCart action with item details
    dispatch(
      cartActions.addItemToCart({
        id, // Unique identifier for the item
        title, // Name of the item
        price, // Price per item
      })
    );
  };

  // Handler to remove an item from the cart
  const removeItemHandler = () => {
    // Dispatch the removeItemFromCart action with the item's id
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
