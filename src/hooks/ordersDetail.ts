import useSWR from 'swr';
import fetch from 'unfetch';
import { OrderDetails } from '../components/interface/orderDetails';
import axios  from 'axios';
import { json } from 'node:stream/consumers';
  
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
){  //Cambio de contrasena
  try {
    setLoading(true);
    const response = await axios.get(`${path}${paymentGateway}/${transactionId}`, {
      headers: {
        'x-store-id': 'hardtech',
        Authorization:
        `Bearer ${token}`,
        'Content-Type': 'applicaton/json',
      },
  
    });
    
    setLoading(false);
    setData(response.data);
  }
  catch (error) {
    setLoading(false);
    console.log('ERROR ',error)
  }
}
