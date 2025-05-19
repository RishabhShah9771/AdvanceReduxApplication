import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

// Define the Cart component, receiving props if needed
const Cart = (props) => {
  // Get the cart items from the Redux store using useSelector
  const cartItems = useSelector((state) => state.cart.items);

  // Render the cart UI inside a Card component
  return (
    <Card className={classes.cart}>
      {/* Cart title */}
      <h2>Your Shopping Cart</h2>
      {/* List of cart items */}
      <ul>
        {/* Map through each cart item and render a CartItem component */}
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id} // Unique key for each item
              item={{
                id: item.id, // Item ID
                title: item.name, // Item name as title
                quantity: item.quantity, // Quantity of the item
                total: item.totalPrice, // Total price for this item
                price: item.price, // Price per item
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
