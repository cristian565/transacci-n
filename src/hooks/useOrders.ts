import { Order } from '../components/interface/order';
import useSWR from 'swr';
import fetch from 'unfetch';

export interface RepaymentEmailParams {
    userId: number;
  }
  
const fetcher = async (path: string, headers?: Record<string, string>) => {
  const res = await fetch(path, {
    headers: {
      'x-store-id': 'bellapiel',
      Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoiY2FybG9zIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTYyMDY3MzY2NX0.1gqBPBzN7w42HF5QDjkJTjIN7w1qTYSVWBxB3GxN-3BjQE4tEHEswqULD3A7-UjIfzLMMVsuseDSQ5h2Jz8JoA',
      'Content-Type': 'applicaton/json',
    },
  });

  return res.json();
};

export function useOrders(
    path: string,
  params: RepaymentEmailParams
) {
  const { data, error, mutate } = useSWR<Order>(
    params.userId ? [`${path}${params.userId}?page=0&size=6`] : null,
    fetcher,
    {
        onErrorRetry: (lastError, key, config, revalidate, { retryCount }) => {
          // Only retry up to 3 times.
          if (retryCount >= 3) return;
        },
      }
  );

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    orders: data,
    isLoading: !data,
    isError: error,
    mutate,
  };
}
