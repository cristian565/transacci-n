import { Order } from "../components/interface/order";
import useSWR from "swr";
import fetch from "unfetch";
import { useKeycloak } from "@react-keycloak/web";

export interface RepaymentEmailParams {
  userId: number;
}

const fetcher = async (
  path: string,
  token: string,
  headers?: Record<string, string>
) => {
  const res = await fetch(path, {
    headers: {
      "x-store-id": "hardtech",
      Authorization: `Bearer ${token}`,
      "Content-Type": "applicaton/json",
    },
  });

  return res.json();
};

export function useOrders(
  path: string,
  token: string,
  page: number,
  id?: string,
  reference?: string,
  status?: string,
  paymentMethod?: string,
  customer?: string,
  fromDate?: string,
  untilDate?: string
) {
  const { data, error, mutate } = useSWR<Order>(
    [
      `${path}?page=${page}&size=5&${id ? "id=" + id : ""}${
        reference ? "&reference=" + reference : ""
      }${status ? "status=" + status : ""}${
        paymentMethod ? "&paymentMethod=" + paymentMethod : ""
      }${customer ? "&customer=" + customer : ""}${
        fromDate ? "&fromDate=" + fromDate : ""
      }${untilDate ? "&untilDate=" + untilDate : ""}&sort=createdAt,desc`,
      token,
    ],
    fetcher,
    {
      onErrorRetry: (lastError, key, config, revalidate, { retryCount }) => {
        // Only retry up to 3 times.
        if (retryCount >= 3) return;
      },
      // refreshInterval: 1000
    }
  );

  return {
    orders: data,
    isLoading: !data,
    isError: error,
    mutate,
  };
}
