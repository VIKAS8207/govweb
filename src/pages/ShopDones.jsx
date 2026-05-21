import React from 'react';
import { ShopPaymentDone } from '../ShopeDone'; 

const ShopPaymentIsDone = () => {
  return (
    <main className="min-h-screen bg-white">
      <ShopPaymentDone />
    </main>
  );
}

// FIX: Export the component function name, NOT the < /> tags
export default ShopPaymentIsDone;