import React, { useState, Dispatch, SetStateAction, useMemo } from "react";

import { parseCurrency } from "../hooks/parse-currency";
import { parseDate } from "../hooks/parse-date";
import { Order } from "./interface/order";
import { imagenes } from "../assets/imagenes";
import {
  ClockIcon,
  CalendarIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
import { DetailsValue } from "./interface/detailsValue";

export interface TableTransactionProps {
  detailsValue: Dispatch<SetStateAction<DetailsValue>>;
  openTransaction: Dispatch<SetStateAction<boolean>>;
  order: Order;
  e2eAttr?: string;
}

export const TableTransaction = (props: TableTransactionProps) => {
  const data = useMemo(() => props.order.transactions, [props.order]);

  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);

  const handlePagination = (action: "next" | "previous") => {
    switch (action) {
      case "next":
        setStart(start + 10);
        setLimit(limit + 10);
        break;
      case "previous":
        setStart(start - 10);
        setLimit(limit - 10);
        break;
    }
  };

  const handleDetails = (valor: string) => {
    console.log(valor);
    props.openTransaction(false);
  };

  const statusStyles: Record<string, string> = {
    DECLINED: "bg-red-400 text-red-700",
    ERROR: "bg-red-400 text-red-700",
    APPROVED: "bg-green-400 text-green-700",
    VOIDED: "bg-yellow-400 text-yellow-700",
  };

  const statusOrder: Record<string, string> = {
    DECLINED: "Declinada",
    ERROR: "Error",
    APPROVED: "Aprobado",
    VOIDED: "Anulada",
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-2 mt-8 " data-cy={props.e2eAttr}>
        <div className="hidden md:flex mt-4 flex-col shadow-xl">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle md:px-3 lg:px-2">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-6"
                      >
                        Estado
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                      >
                        Monto y cliente
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                      >
                        Datos del pago
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                      >
                        Hora y Fecha
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.slice(start, limit).map((item) => (
                      <tr
                        key={item.reference}
                        onClick={() =>{
                          props.detailsValue(
                            {
                              transactionId:item.transactionId,
                              paymentGateway:item.paymentGateway
                            })
                          props.openTransaction(false)
                        }}
                        className="cursor-pointer hover:bg-gray-300 active:bg-gray-300 focus:ring"
                        dta-cy={`table-transaction__${item.reference}`}
                        id={item.reference}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 md:pr-1 lg:pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-4 lg:pl-6">
                          <span
                            data-cy={`${props.e2eAttr}__transaction_status-md`}
                            className={`${statusStyles[item.transactionStatus]}
                             font-semibold inline-block  rounded-lg h-1/2 px-3 md:px-1 lg:px-3 w-24 md:w-20 lg:w-24 text-center`}
                          >
                            {statusOrder[item.transactionStatus]}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold">
                          <div className="flex flex-row">
                            <div className="flex-shrink-0 flex justify-center w-1/6 ">
                              {item.paymentType === "CARD" ? (
                                <CreditCardIcon
                                  aria-hidden="true"
                                  className="h-8 w-8"
                                />
                              ) : (
                                <img
                                  data-cy={`${props.e2eAttr}__image-md`}
                                  className="block h-8 w-auto"
                                  src={imagenes[item.paymentType]}
                                  alt="LogoMetPago"
                                />
                              )}
                            </div>
                            <div className="flex flex-col w-full px-3 lg:w-full">
                              <span
                                className="font-bold"
                                data-cy={`${props.e2eAttr}__money-md`}
                              >
                                {parseCurrency(item.totalTransactionValue/100)}
                              </span>
                              <span>{item.client}</span>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold">
                          <div className="flex flex-col">
                            <span
                              className="font-bold"
                              data-cy={`${props.e2eAttr}__transactionId-md`}
                            >
                              {`#${item.transactionId}`}
                            </span>
                            <span
                              data-cy={`${props.e2eAttr}__reference-md`}
                            >{`Ref: ${item.reference}`}</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold">
                          <div className="flex flex-col space-y-1">
                            <div className="flex flex-row content-center">
                              <ClockIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                              <span
                                data-cy={`${props.e2eAttr}__date_hour-md`}
                                className="ml-1"
                              >
                                {parseDate(item.transactionDate).hour}
                              </span>
                            </div>

                            <div className="flex flex-row content-center">
                              <CalendarIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                              <span
                                data-cy={`${props.e2eAttr}__date-md`}
                                className="ml-1"
                              >
                                {parseDate(item.transactionDate).date}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <nav
                  className="flex justify-between items-center py-3 px-4 bg-white border-t border-gray-200 sm:px-6"
                  aria-label="Pagination"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                      Mostrando <span className="font-medium">{start + 1}</span>{" "}
                      de{" "}
                      <span className="font-medium">
                        {limit > props.order.transactions.length
                          ? props.order.transactions.length
                          : limit}
                      </span>{" "}
                      de{" "}
                      <span className="font-medium">
                        {props.order.transactions.length}
                      </span>{" "}
                      resultados
                    </p>
                  </div>
                  <div className="flex flex-1 justify-between sm:justify-end">
                    <button
                      className="inline-flex relative items-center py-2 px-4 text-sm font-medium text-white bg-blue-wompi hover:bg-blue-400 rounded-md border border-gray-300"
                      disabled={start === 0}
                      onClick={() => handlePagination("previous")}
                    >
                      Anterior
                    </button>
                    <button
                      className={
                        "inline-flex relative items-center py-2 px-4 ml-3 text-sm font-medium text-white bg-blue-wompi hover:bg-blue-400 rounded-md border border-gray-300"
                      }
                      disabled={limit >= props.order.transactions.length}
                      onClick={() => handlePagination("next")}
                    >
                      Siguiente
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="shadow md:hidden">
            <div className="flex py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase bg-pantone-blue-100 rounded-t-lg">
              <span className="flex flex-1 justify-center items-center">
                {" "}
                Transacciones{" "}
              </span>
            </div>
            <ul className="overflow-hidden mt-2 divide-y divide-gray-200 shadow ">
              {data.slice(start, limit).map((item) => (
                <li
                  key={item.reference}
                  className="sm:relative mb-0 "
                  onClick={() => handleDetails(item.reference)}
                >
                  <div className="sm:py-2 sm:h-44 flex flex-row md:px-4 justify-center mt-4 sm:mt-0">
                    <div className="py-4  flex flex-row justify-between px-4 sm:pb-4 text-sm sm:py-2 sm:justify-center sm:items-center sm:px-2 sm:w-full sm:h-48 md:justify-center md:items-center md:py-2 md:px-4 md:w-1/2 md:h-full">
                      <div className="flex sm:hidden flex-col space-y-1 text-sm mt-1 mr-2 ">
                        <span className="text-blue-400 truncate">Estado</span>
                        <span className="text-blue-400 truncate">Cliente:</span>
                        <span className="text-blue-400 inline-block truncate">
                          Hora
                        </span>
                        <span className="text-blue-400 inline-block truncate">
                          Fecha
                        </span>

                        <span className="text-blue-400 inline-block h-10 py-3 truncate">
                          Datos del pago
                        </span>
                        <span className="text-blue-400 inline-block truncate py-2 sm:py-1 ">
                          Metodo de pago
                        </span>
                      </div>
                      <div className="flex sm:hidden flex-col text-sm text-gray-700 space-y-1 ">
                        <span
                          className={`${statusStyles[item.transactionStatus]}
                             font-semibold inline-block  rounded-lg px-3 w-24 text-center h-5`}
                        >
                          {statusOrder[item.transactionStatus]}
                        </span>
                        <div className="flex flex-col w-full ">
                          <span>{item.client}</span>
                        </div>
                        <div className="flex flex-row content-center">
                          <ClockIcon aria-hidden="true" className="h-6 w-6" />
                          <span className="ml-1">
                            {parseDate(item.transactionDate).hour}
                          </span>
                        </div>

                        <div className="flex flex-row content-center">
                          <CalendarIcon
                            aria-hidden="true"
                            className="h-6 w-6"
                          />
                          <span className="ml-1">
                            {parseDate(item.transactionDate).date}
                          </span>
                        </div>

                        <div className="flex flex-col">
                          <span className="font-bold">
                            {`#${item.transactionId}`}
                          </span>
                          <span>{`Ref: ${item.reference}`}</span>
                        </div>
                        <div className="flex flex-col">
                          {item.paymentType === "CARD" ? (
                            <CreditCardIcon
                              aria-hidden="true"
                              className="h-8 w-8"
                            />
                          ) : (
                            <img
                              className="block h-8 w-8"
                              src={imagenes[item.paymentType]}
                              alt="LogoMetPago"
                            />
                          )}
                        </div>
                      </div>

                      <div className="hidden sm:flex md:hidden flex-col text-sm text-gray-700  justify-between  pl-12  w-2/4 h-40 ">
                        <div className="flex flex-col w-full ">
                          <span className="text-blue-400 truncate">
                            Cliente
                          </span>
                          <span>{item.client}</span>
                        </div>

                        <div className="flex flex-col w-full ">
                          <span className="text-blue-400 inline-block truncate">
                            ID Transaccion
                          </span>
                          <span className="font-bold">
                            {item.transactionId}
                          </span>
                        </div>

                        <div className="flex flex-col w-full ">
                          <span className="text-blue-400 inline-block truncate">
                            Ref. Transaccion
                          </span>
                          <span>{item.reference}</span>
                        </div>
                      </div>
                      <div className="hidden sm:flex md:hidden  flex-col content-center justify-between  text-sm mr-2 px-12  w-2/4 h-40">
                        <div className="flex flex-col">
                          <span className="text-blue-400 truncate">Estado</span>
                          <span
                            className={`${statusStyles[item.transactionStatus]}
                             font-semibold inline-block  rounded-lg px-3 w-24 text-center h-5`}
                          >
                            {statusOrder[item.transactionStatus]}
                          </span>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-blue-400 inline-block truncate">
                            Hora y Fecha
                          </span>
                          <div className=" flex flex-row space-x-2">
                            <div className="flex flex-row content-center">
                              <ClockIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                              <span className="ml-1">
                                {parseDate(item.transactionDate).hour}
                              </span>
                            </div>

                            <div className="flex flex-row content-center">
                              <CalendarIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                              <span className="ml-1">
                                {parseDate(item.transactionDate).date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          {" "}
                          <span className="text-blue-400 inline-block truncate">
                            Metodo de pago
                          </span>
                          <div className="flex flex-col">
                            {item.paymentType === "CARD" ? (
                              <CreditCardIcon
                                aria-hidden="true"
                                className="h-8 w-8"
                              />
                            ) : (
                              <img
                                className="block h-8 w-8"
                                src={imagenes[item.paymentType]}
                                alt="LogoMetPago"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col h-auto sm:mt-4 sm:relative sm:bottom-0 bg-gray-200 rounded-lg sm:flex-row sm:justify-between">
                    <div className="py-1 px-2 text-sm font-bold text-gray-700 sm:order-last sm:p-2 sm:text-sm">
                      TOTAL: {parseCurrency(item.totalTransactionValue)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <nav
              className="flex justify-between items-center py-3 px-4 bg-white border-t border-gray-200"
              aria-label="Pagination"
            >
              <div className="flex flex-1 justify-between">
                <button
                  type="button"
                  className="bg-blue-wompi hover:bg-blue-800 inline-flex relative items-center py-2 px-4 text-sm font-medium text-white rounded-md border border-gray-300"
                  disabled={start === 0}
                  onClick={() => handlePagination("previous")}
                >
                  Anterior
                </button>
                <button
                  type="button"
                  className="bg-blue-wompi hover:bg-blue-800 inline-flex relative items-center py-2 px-4 ml-3 text-sm font-medium text-white rounded-md border border-gray-300"
                  disabled={limit >= props.order.totalTransactions}
                  onClick={() => handlePagination("next")}
                >
                  Siguiente
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
