import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";


const PaymentStudent = () => {
    const location = useLocation();
    const data = location.state;
    const price = parseFloat(data);


    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

    return (
        <div>
            <h2>payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentStudent;