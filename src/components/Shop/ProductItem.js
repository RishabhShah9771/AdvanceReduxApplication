import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../Store/cartSlice";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  // Get the dispatch function from react-redux to dispatch actions to the Redux store
  const disptach = useDispatch();

  // Handler function to add the current product to the cart
  const addToCartHandler = () => {
    // Dispatch the addItemToCart action with the product's id, title, and price
    disptach(
      cartActions.addItemToCart({
        id, // Unique identifier for the product
        title, // Name of the product
        price, // Price of the product
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
