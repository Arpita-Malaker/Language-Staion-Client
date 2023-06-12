import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

// import './CheckoutFORM.css'





const CheckoutForm = ({data}) => {

  // console.log(data);
    
    const stripe = useStripe();
    const {user}= useAuth();
   
 
  const price= data.price;
  

    const elements =  useElements();
    
    const [cardError, setcardError] = useState();
    const [processing,setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId,setTransactionId]= useState('');

   
    useEffect(() => {
     if(price>0){
       // Create PaymentIntent as soon as the page loads
       fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price}),
      })
        .then((res) => res.json())
        .then((data) => {
        setClientSecret(data.clientSecret)});
     }
    }, []);

   
    const handleSubmit = async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
          
            return;
          }

          const card = elements.getElement(CardElement);

          if (card === null) {
            return;
          }

          console.log('card',card);
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setcardError(error.message)
          } else {
            setcardError('')
            console.log('[PaymentMethod]', paymentMethod);
          }

          setProcessing(true);

          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknownn',
                        name: user?.displayName || 'anonymooous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }

        console.log(paymentIntent);

        setProcessing(false);

        if(paymentIntent.status =='succeeded'){
          setTransactionId(paymentIntent.id);
          const transactionId = paymentIntent.id;

          // const payment ={
          


          // }

          fetch("http://localhost:5000/payments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({  email:user?.email,
              date:new Date(),
              transactionId,
              price,
             itemiD:data.itemId,
             itemName:data.classNme,
             cartId:data._id,
             instuctorName:data.
             instructor,
             img:data.classImg,
             instructorEmail:data.instructorEmai,
             priceclass:data.price,
             seats:data.seats
            }),
          })
            .then((res) => res.json())
            .then((data) => {
            console.log(data)});


            fetch(`http://localhost:5000/classesInfo/${data.itemId}`,{
              method:'PUT',
              headers:{"Content-Type": "application/json"},
              body:JSON.stringify({seats:data.seats})
            })
            .then(res=>res.json())
            .then(data=>{
              console.log('j',data)
            })

        }

        ///
       

        //
          
    }

  



    
    return (
    <>
        <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-warning mt-6 btn-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>

      {cardError &&  <p className="text-red-600 ml-16">{cardError}</p>}
      {transactionId && <p className="text-green-600 ml-16"> Succesfully transaction through id: {transactionId} </p>}
    </>
    );
};

export default CheckoutForm;