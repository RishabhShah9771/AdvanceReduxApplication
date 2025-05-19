import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

// Thunk action creator for fetching cart data from the backend
const fetchCartData = () => {
  // Return an async function that receives dispatch from Redux Thunk middleware
  return async (dispatch) => {
    // Helper function to fetch cart data from the remote database
    const fetchData = async () => {
      // Make a GET request to the Firebase Realtime Database endpoint
      const response = await fetch(
        "https://my-demo-database-e2531-default-rtdb.firebaseio.com/cart.json"
      );
      // Parse the response JSON data
      const data = await response.json();
      // If the response is not OK, throw an error
      if (!response.ok) {
        throw new Error("Could not Fetch cart Data");
      }
      // Return the fetched data
      return data;
    };

    try {
      // Attempt to fetch the cart data
      const cartData = await fetchData();
      // Dispatch an action to replace the cart in the Redux store with the fetched data
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [], // Use an empty array if items are undefined
          totalQuantity: cartData.totalQuantity, // Set the total quantity from fetched data
        })
      );
    } catch (error) {
      // If an error occurs, dispatch a UI notification action to show an error message
      dispatch(
        uiActions.showNotification({
          status: "error", // Notification status
          title: "Error", // Notification title
          message: "Sent cart data failed", // Notification message
        })
      );
    }
  };
};

export default fetchCartData;
