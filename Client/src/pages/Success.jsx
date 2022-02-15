import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const location = useNavigate();
  const { state } = useLocation();
  const cart = state.products;
  const data = state.stripeData;
  console.log(data || cart || "data not here");
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const token = useSelector((state) => state.user.currentUser.accessToken);

  const config = { headers: { token: `Bearer ${token}` } };
  useEffect(() => {
    const createOrder = async () => {
      try {
        console.log("starting");
        const res = await axios.post(
          "http://localhost:5000/api/orders",
          {
            userId: currentUser._id,
            products: cart.products.map((item) => ({
              productId: item._id,
              quantity: item._quantity,
            })),
            amount: cart.total,
            address: data.billing_details.address,
          },
          config
        );
        setOrderId(res.data._id);
      } catch (err) {}
    };
    data && createOrder();
  }, [cart, data, , currentUser]);
  const goToHome = () => {
    location("/", { replace: true });
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully, Your order number is ${orderId}`
        : `Successful, Your order is being prepared..`}
      <button style={{ padding: 10, marginTop: 20 }} onClick={goToHome}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
