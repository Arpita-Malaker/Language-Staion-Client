import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";




const PaymentStudent = () => {
    const location = useLocation();
    const data = location.state;
   
    const{user}= useAuth();
    console.log(user.email)
  


    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

    return (
        <div>
            <h2 className="mt-16 text-center font-bold text-3xl text-blue-600">payment page</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm data={data}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentStudent;