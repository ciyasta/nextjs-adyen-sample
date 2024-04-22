// Adyen Node API Library v16.2.0
// Require the parts of the module you want to use
import { Client, CheckoutAPI } from '@adyen/api-library';

// Initialize the client object
// For the live environment, additionally include your liveEndpointUrlPrefix.
export const client = new Client({apiKey: 'AQE5hmfxK4/JaBJFw0m/n3Q5qf3VYI5VDIRLSmBiw3ujkGlHkcB/FdUyV2AobhKpkFuqYnwZvqh9b1TpEMFdWw2+5HzctViMSCJMYAc=-8aHvlSfxdhmVFGQWx6p4pRvPbqVcgqRitEye/AMvYac=-@yR#$U,m$LI6.$L6', environment: "TEST"});
export const checkoutAPI = new CheckoutAPI(client);