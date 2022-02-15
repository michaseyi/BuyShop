import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Button = styled.button`
  color: white;
  background-color: black;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
const KEY =
  "pk_test_51KB7tLEBvsvzFR745j9dkLs7zo6d61Ae68wWw03zX120bXeTdSZF2IqMVhb3sBmsii8E5loMHMTw6kXgyKCTx43800VxsH7GKm";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      console.log(stripeToken);
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          { tokenId: stripeToken.id, amount: 2000 }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <Container>
      <StripeCheckout
        name="Shop Me"
        image="https://i.etsystatic.com/6449624/r/il/56d4e2/555917688/il_794xN.555917688_aem6.jpg"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </Container>
  );
};

export default Pay;
