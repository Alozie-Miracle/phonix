import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function Flutter({ price, cartItems }) {
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLISHABLE_KEY,
    tx_ref: Date.now(),
    amount: price,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'miracleoliver8@gmail.com',
      phone_number: '09125130883',
      name: 'miracle',
      cartItems: [...cartItems]
    },
    customizations: {
      title: 'Phonix Payment',
      description: 'Payment for PHONIX',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
      <button className='btn'
        onClick={() => {
          handleFlutterPayment({
            callback: () => {
                closePaymentModal() // this will close the modal programmatically
                window.location.assign('/success')

            },
            onClose: () => {
                // window.location.assign('/success')
            },
          });
        }}
      >
        Proceed to Payment
      </button>
  );
}
