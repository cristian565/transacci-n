import { Transaction } from "../components/interface/transaction";
import useSWR from "swr";
import fetch from "unfetch";
import { useKeycloak } from "@react-keycloak/web";


const fetcher = async (
  path: string,
  token: string,
  storeAcces:string,
  headers?: Record<string, string>
) => {
  try {
    const res = await fetch(path, {
      headers: {
        "x-store-id": `${storeAcces}`,
        Authorization: `Bearer ${token}`,
        "Content-Type": "applicaton/json",
      },
    });

    if (!res.ok) {
      const error: { message: string; info?: any; status?: number } = {
        message: "An error occurred while fetching the data.",
      };
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  } catch (e: any) {
    if (e.type === "error") {
      const error: { message: string; info?: any; status?: number } = {
        message: "An error occurred while fetching the data.",
      };
      error.info = "server timeout";
      error.status = 100;
      throw error;
    }
    throw e;
  }
};

export function useTransactions(
  path: string,
  token: string,
 storeAcces:string,
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
    storeAcces?[
      `${path}?page=${page}&size=10${id ? "&id=" + id : ""}${
        reference ? "&reference=" + reference : ""
      }${status ? "&status=" + status : ""}${
        paymentMethod ? "&paymentMethod=" + paymentMethod : ""
      }${customer ? "&customer=" + customer : ""}${
        fromDate ? "&fromDate=" + fromDate : ""
      }${untilDate ? "&untilDate=" + untilDate : ""}&sort=createdAt,desc`,
      token,
      storeAcces,
    ]:null,
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
