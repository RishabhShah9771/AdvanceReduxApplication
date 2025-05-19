import { uiActions } from "./uiSlice";
// Thunk action creator for sending cart data to the backend
const sendCartData = (cart) => {
  // Returns an async function for Redux Thunk middleware
  return async (dispatch) => {
    // Dispatch a notification to indicate sending is in progress
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending Data to Firebase",
      })
    );

    // Helper function to send the HTTP request
    const sendRequest = async () => {
      // Send a PUT request to update the cart data in Firebase
      const response = await fetch(
        "https://my-demo-database-e2531-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT", // Use PUT to overwrite the cart data
          body: JSON.stringify({
            items: cart.items, // Cart items to be sent
            totalQuantity: cart.totalQuantity, // Total quantity to be sent
          }),
        }
      );
      // If the response is not OK, throw an error
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      // Attempt to send the cart data
      await sendRequest();
      // Dispatch a success notification if sending succeeds
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      // Dispatch an error notification if sending fails
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

export default sendCartData;
