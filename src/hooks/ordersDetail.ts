import useSWR from 'swr';
import fetch from 'unfetch';
import { OrderDetails } from '../components/interface/orderDetails';
import axios  from 'axios';
  
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

export async function ordersDetail(
    path: string,
    token: string,
    paymentGateway:string,
    transactionId: string
){  //Cambio de contrasena
    
   return (axios.get(`${path}${paymentGateway}/${transactionId}`, {
      headers: {
        'x-store-id': 'hardtech',
        Authorization:
        `Bearer ${token}`,
        'Content-Type': 'applicaton/json',
      },
    
    }).then((respuesta)=>{
      //sessionStorage.setItem('resetPass',respuesta.status)
      //console.log('JS ',respuesta)
      return respuesta
    }).catch((error)=>{
      console.log('ERROR ',error)
      return error
    }))
  
    // console.log("Peticion ",respons)
  

  /* const { data, error, mutate } = useSWR<OrderDetails>([
    `${path}${paymentGateway}/${transactionId}`,token],fetcher);

  return {

    orders: data,
    isLoading: !data,
    isError: error,
    mutate,
  }; */
}
