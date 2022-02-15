import axios from "axios";
import { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 220000,
  publicKey: "pk_test_dee91b0c6d4e281e21170dc3dd862d3c32caa7d8",
};

const Paystack = () => {
  const [paystackReference, setPaystackReference] = useState(null);
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    // setPaystackReference(reference);
    console.log(reference)
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/pay/payment", {
          reference: paystackReference.reference,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    paystackReference && makeRequest();
  }, [paystackReference]);

  return <PaystackButton {...componentProps} />;
};

export default Paystack;
