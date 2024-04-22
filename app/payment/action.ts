'use server'

import { checkoutAPI } from "@/lib/adyen";
import { randomUUID } from 'node:crypto';


export async function getSession(){
    // Create the request object(s)
    const createCheckoutSessionRequest = {
        merchantAccount: process.env.MERCHANT_ACCOUNT!,
        amount: {
        value: 1000,
        currency: "EUR"
        },
        returnUrl: "https://your-company.com/checkout?shopperOrder=12xy..",
        reference: "Testing payment",
        countryCode: "NL"
    }
  
  // Make the API call
  
  const response = await checkoutAPI.PaymentsApi.sessions(createCheckoutSessionRequest, { idempotencyKey: randomUUID() });

  return {
    id: response.id,
    sessionData: response.sessionData
  };
  
}

