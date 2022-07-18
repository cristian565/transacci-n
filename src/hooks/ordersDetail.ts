import useSWR from 'swr';
import fetch from 'unfetch';
import { OrderDetails } from '../components/interface/orderDetails';
import axios  from 'axios';
import { json } from 'node:stream/consumers';
import axiosRetry from 'axios-retry'
const fetcher = async (path: string,token: string, headers?: Record<string, string>) => {
  
  const res = await fetch(path, {
    headers: {
      'x-store-id': 'hardtech',
      Authorization:
      `Bearer ${token}`,
      'Content-Type': 'applicaton/json',
    },
  });

  return res.json();
};



export async function getOrdersDetail(
    path: string,
    token: string,
    paymentGateway:string,
    transactionId: string,
    setLoading: Function,
    setData: Function,
    setIsError:Function,
){  //Cambio de contrasena
 
/*   const rax = axiosRetry;
const axios = require('axios');

  try {
    const myConfig = {
      headers: {
        'x-store-id': 'hardtech',
        Authorization:
        `Bearer ${token}`,
        'Content-Type': 'applicaton/json',
      },
      raxConfig: {
        retry: 5, // number of retry when facing 4xx or 5xx
        noResponseRetries: 5, // number of retry when facing connection error
        onRetryAttempt: (err:any) => {
          const cfg = rax.getConfig(err);
          console.log(`Retry attempt #${cfg.currentRetryAttempt}`); // track current trial
        }
      },
      timeout: 50 // don't forget this one
    }
    const req = await axios.get(`${path}${paymentGateway}/${transactionId}`, myConfig);
    console.log(req.data);
  } catch (error) {
    console.log(error);
  }
 */
   axiosRetry(axios, {
    retries: 3, // number of retries
    retryDelay: (retryCount) => {
      return retryCount * 1000;
    }});
    

    setLoading(true);
    axios.get(`${path}${paymentGateway}/${transactionId}`, {
      headers: {
        'x-store-id': 'hardtech',
        Authorization:
        `Bearer ${token}`,
        'Content-Type': 'applicaton/json',
      },
  
    }).then(response=>{
      setLoading(false);
      setData(response.data);
      setIsError(false)
    }).catch(error=>{
     
    setLoading(false);
    setIsError(true)
    console.log('ERROR ',error)
    })
    
   
  
  
    
  
}
