'use client'
import { useEffect, useRef } from "react";
import { getSession } from "./action";
import AdyenCheckout from "@adyen/adyen-web";
import '@adyen/adyen-web/dist/adyen.css';

export default function Payment(){

  const paymentContainer = useRef(null);

    useEffect(() => {
        let ignore = false;
    
        const createCheckout = async () => {
            const session = await getSession();
          const checkout = await AdyenCheckout({
            environment: 'test',
            clientKey: 'test_MNS4HSPJVFD5LLI2QKZIES4EGEXMUOFA',
            analytics: {
                enabled: true // Set to false to not send analytics data to Adyen.
            },
            session,
            onPaymentCompleted: (result, component) => {
                console.info(result, component);
            },
            onError: (error, component) => {
                console.error(error.name, error.message, error.stack, component);
            },
            paymentMethodsConfiguration: {
                card: {
                  hasHolderName: true
                }
            },
          });
    
          // The 'ignore' flag is used to avoid double re-rendering caused by React 18 StrictMode
          // More about it here: https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data
          if (paymentContainer.current && !ignore) {
            checkout.create('card').mount(paymentContainer.current);
          }
        }
    
        createCheckout();
    
        return () => {
          ignore = true;
        }
      }, [])

    return (
        <div ref={paymentContainer} className="payment"></div>
    );
}