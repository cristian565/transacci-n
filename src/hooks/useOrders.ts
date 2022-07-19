import { Transaction } from "../components/interface/transaction";
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
  try {
    const res = await fetch(path, {
      headers: {
        "x-store-id": "hardtech",
        Authorization: `Bearer ${token}`,
        "Content-Type": "applicaton/json",
      },
    });

    if (!res.ok) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: { message: string; info?: any; status?: number } = {
        message: "An error occurred while fetching the data.",
      };
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (e.type === "error") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: { message: string; info?: any; status?: number } = {
        message: "An error occurred while fetching the data.",
      };
      // Attach extra info to the error object.
      error.info = "server timeout";
      error.status = 100;
      throw error;
    }
    throw e;
  }
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
  const { data, error, mutate } = useSWR<Transaction>(
    [
      `${path}?page=${page}&size=5${id ? "&id=" + id : ""}${
        reference ? "&reference=" + reference : ""
      }${status ? "&status=" + status : ""}${
        paymentMethod ? "&paymentMethod=" + paymentMethod : ""
      }${customer ? "&customer=" + customer : ""}${
        fromDate ? "&fromDate=" + fromDate : ""
      }${untilDate ? "&untilDate=" + untilDate : ""}&sort=createdAt,desc`,
      token,
    ],
    fetcher,
    {
      onErrorRetry: (lastError, key, config, revalidate, { retryCount }) => {
        if (retryCount >= 3) return;
      },
    }
  );

  return {
    orders: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
