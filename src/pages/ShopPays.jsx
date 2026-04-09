import React from 'react';
import { RentPaymentGateway } from '../ShopPay'; 

const ShopbillPay = () => {
  return (
    <main className="min-h-screen bg-white">
      <RentPaymentGateway />
    </main>
  );
}

// FIX: Export the component function name, NOT the < /> tags
export default ShopbillPay;