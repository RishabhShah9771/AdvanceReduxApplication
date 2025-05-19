import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/Notifications/Notification";
import sendCartData from "./Store/ActionThunk";
import fetchCartData from "./Store/FetchActionThunk";

let isInitial = true;
function App() {
  // Get the dispatch function from Redux to dispatch actions
  const dispatch = useDispatch();

  // Select the cart visibility state from the Redux store
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  // Select the cart data from the Redux store
  const cart = useSelector((state) => state.cart);

  // Select the notification state from the Redux store
  const notification = useSelector((state) => state.ui.notification);

  // Fetch cart data from the backend when the app loads for the first time
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // Send cart data to the backend whenever the cart changes (except on initial load)
  useEffect(() => {
    // Skip sending data on the initial render
    if (isInitial) {
      isInitial = false;
      return;
    }
    // Only send cart data if the cart has changed
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
