import React from 'react';
import { PaymentConfirmation } from '../EpfoPay'; 

const Pay = () => {
  return (
    <main className="min-h-screen bg-white">
      <PaymentConfirmation />
    </main>
  );
}

// FIX: Export the component function name, NOT the < /> tags
export default Pay;