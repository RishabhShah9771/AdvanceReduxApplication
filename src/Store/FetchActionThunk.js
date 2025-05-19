import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";
const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-demo-database-e2531-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Could not Fetch cart Data");
      }
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sent cart data failed",
        })
      );
    }
  };
};

export default fetchCartData;
