import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../Store/uiSlice";

const CartButton = (props) => {
  // Get the dispatch function from Redux to dispatch actions
  const dispatch = useDispatch();

  // Select the total quantity of items in the cart from the Redux store
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  // Handler function to toggle the cart's visibility
  // Prevents the default button behavior and dispatches the toggle action
  const toggleCartHandler = (event) => {
    event.preventDefault();
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
