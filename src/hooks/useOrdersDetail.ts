import useSWR from 'swr';
import fetch from 'unfetch';
import { OrderDetails } from '../components/interface/orderDetails';

  
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

export function useOrdersDetail(
    path: string,
    token: string,
    paymentGateway:string,
    transactionId: string
) {
  
  const { data, error, mutate } = useSWR<OrderDetails>([
    `${path}${paymentGateway}/${transactionId}`,token],fetcher,
     {
        onErrorRetry: (lastError, key, config, revalidate, { retryCount }) => {
          // Only retry up to 3 times.
          if (retryCount >= 3) return;
        },
      } 
      );

  return {

    orders: data,
    isLoading: !data,
    isError: error,
    mutate,
  };
}
