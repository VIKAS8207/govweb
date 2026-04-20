import React from 'react';
import { PaymentNow } from '../PayNow'; 

const PaymentDone = () => {
  return (
    <main className="min-h-screen bg-white">
      <PaymentNow />
    </main>
  );
}

// FIX: Export the component function name, NOT the < /> tags
export default PaymentDone;