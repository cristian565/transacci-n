import React, { useState, Dispatch, SetStateAction, useMemo, useEffect } from "react";

import { parseCurrency } from "../hooks/parse-currency";
import { parseDate } from "../hooks/parse-date";
import { Transaction } from "./interface/transaction";
import { imagenes } from "../assets/imagenes";
import {ClockIcon,CalendarIcon,CreditCardIcon,RefreshIcon} from "@heroicons/react/outline";
import { DetailsValue } from "./interface/detailsValue";

export interface TableTransactionProps {
  detailsValue: Dispatch<SetStateAction<DetailsValue>>;
  openTransaction: Dispatch<SetStateAction<boolean>>;
  order: Transaction;
  pageState:number
  setPageState: Dispatch<SetStateAction<number>>;
  setPageStart: Dispatch<SetStateAction<number>>;
  setPageLimit: Dispatch<SetStateAction<number>>;
  pagStart:number;
  pagLimit:number;
  onRefresh:()=>void;
  e2eAttr?: string;
}

export const TableTransaction = (props: TableTransactionProps) => {
  const [data, setdata] = useState(props.order.transactions);
  const [start, setStart] = useState(props.pagStart);
  const [limit, setLimit] = useState(props.pagLimit);
  const [pageIndex, setPageIndex] = useState(props.pageState);
  
  useEffect(() => {
    setStart(((props.pageState===0)?0:props.pagStart))
    setLimit(((props.pageState===0)?1:props.pagLimit))
    setPageIndex(((props.pageState===0)?0:props.pageState))
  }, [props.order])
  
  
  const handlePagination = (action: "next" | "previous") => {
    switch (action) {
      case "next":
        setStart(start + 1);
        setLimit(limit + 1);
       
        props.setPageState(pageIndex + 1);
        setPageIndex(pageIndex + 1);
        props.setPageStart(start + 1);
        props.setPageLimit(limit + 1);
        break;
      case "previous":
        setStart(start - 1);
        setLimit(limit - 1);

        props.setPageState(pageIndex- 1);
        setPageIndex(pageIndex - 1);
        props.setPageStart(start - 1);
        props.setPageLimit(limit - 1);
        break;
    }
  };

  const handleDetails = (valor: string) => {
    props.openTransaction(false);
  };

  const statusStyles: Record<string, string> = {
    DECLINED: "bg-red-200 text-red-700",
    ERROR: "bg-gray-200 text-gray-700",
    APPROVED: "bg-green-200 text-green-700",
    VOIDED: "bg-yellow-200 text-yellow-700",
    PENDING:"bg-orange-200 text-orange-700"
  };

  const statusOrder: Record<string, string> = {
    DECLINED: "Declinada",
    ERROR: "Error",
    APPROVED: "Aprobado",
    VOIDED: "Anulada",
    PENDING:"Pendiente",
  };


  return (
    <>
    {console.log("componente--tabla")}
    {console.log("componente--tabla-data",data)}
    {console.log("componente--tabla-data-props",props.order.transactions)}
    
      <div className="px-4 mt-8 sm:px-3 lg:px-2" data-cy={props.e2eAttr}>
        {/* escritorio*/}

        {
          (props.order.transactions.length>0)
            ?
        <div className="flex-col hidden mt-4 shadow-xl md:flex">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle md:px-1 lg:px-2 ">
            <div className="flex justify-end ">
            <div className="flex cursor-pointer shadow-md h-10 justify-center hover:bg-blue-400 hover:text-blue-800 top-0 right-0 items-center w-36 border-2 rounded-xl mb-2" onClick={()=>props.onRefresh()}>
                <span className="mr-1">Refresh</span>
               <RefreshIcon aria-hidden="true"
                                className="w-6 h-6"/>
               </div>
               </div>
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
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.order.transactions.map((item) => (
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
                        className="cursor-pointer hover:bg-gray-300 active:bg-gray-300 focus:ring h-auto"
                        dta-cy={`table-transaction__${item.reference}`}
                        id={item.reference}
                      >
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap md:pr-1 lg:pr-3 sm:pl-6 md:pl-4 lg:pl-6">
                          <span
                            data-cy={`${props.e2eAttr}__transaction_status-md`}
                            className={`${statusStyles[item.transactionStatus]}
                             font-semibold inline-block  rounded-lg h-1/2 px-3 md:px-1 lg:px-3 w-24 md:w-20 lg:w-24 text-center`}
                          >
                            {statusOrder[item.transactionStatus]}
                          </span>
                        </td>
                        <td className="px-3 py-4 text-sm font-semibold text-gray-600 ">
                          <div className="flex flex-row justify-center items-center">
                            <div className="flex justify-center flex-shrink-0 w-1/6 ">
                              {item.paymentType === "CARD" ? (
                                <CreditCardIcon
                                  aria-hidden="true"
                                  className="w-8 h-8"
                                />
                              ) : (
                                <img
                                  data-cy={`${props.e2eAttr}__image-md`}
                                  className="block w-auto h-8"
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
                              <span className=" break-all">{item.client}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4 text-sm font-semibold text-gray-600 ">
                          <div className="flex flex-col">
                            <span
                              className="font-bold"
                              data-cy={`${props.e2eAttr}__transactionId-md`}
                            >
                              {`#${item.transactionId}`}
                            </span>
                            <span className="break-all"
                              data-cy={`${props.e2eAttr}__reference-md`}
                            >{`Ref: ${item.reference}`}</span>
                            
                          </div>
                        </td>
                        <td className="px-3 py-4 text-sm font-semibold text-gray-600 whitespace-nowrap">
                          <div className="flex flex-col space-y-1">
                            <div className="flex flex-row content-center">
                              <ClockIcon
                                aria-hidden="true"
                                className="w-6 h-6"
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
                                className="w-6 h-6"
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
                  className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
                  aria-label="Pagination"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                      Mostrando pagina <span className="font-medium">{start + 1}</span>{" "}
                      de{" "}
                      <span className="font-medium">
                        {(props.order.totalTransactions%5===0)?props.order.totalTransactions/5:(Math.trunc(props.order.totalTransactions/5)+1)}
                      </span>{" "}
                     
                    </p>
                  </div>
                  <div className="flex justify-between flex-1 sm:justify-end">
                    <button
                      className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-300 rounded-md bg-blue-wompi hover:bg-blue-400"
                      disabled={start === 0}
                      onClick={() => handlePagination("previous")}
                    >
                      Anterior
                    </button>
                    <button
                      className={
                        "inline-flex relative items-center py-2 px-4 ml-3 text-sm font-medium text-white bg-blue-wompi hover:bg-blue-400 rounded-md border border-gray-300"
                      }
                      disabled={limit >= ((props.order.totalTransactions%5===0)?props.order.totalTransactions/5:(Math.trunc(props.order.totalTransactions/5)+1))}
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
          : <div className="text-white-wompi text-sm font-bold "> HO HAY NADA</div>
        }

{
          (props.order.transactions.length>0)
            ? <div>
          <div className="shadow md:hidden">
            <div className="flex px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-700 uppercase rounded-t-lg bg-pantone-blue-100">
              <span className="flex items-center justify-center flex-1">
                {" "}
                Transacciones{" "}
              </span>
            </div>
            <ul className="mt-2 overflow-hidden divide-y divide-gray-200 shadow ">
              {props.order.transactions.map((item) => (
                <li
                  key={item.reference}
                  className="mb-0 sm:relative "
                  onClick={() =>{
                    props.detailsValue(
                      {
                        transactionId:item.transactionId,
                        paymentGateway:item.paymentGateway
                      })
                    props.openTransaction(false)
                  }}
                >
                  <div className="flex flex-row justify-center mt-4 sm:py-2 sm:h-44 md:px-4 sm:mt-0">
                    <div className="w-11/12 flex flex-row justify-between px-4 py-4 text-sm sm:pb-4 sm:py-2 sm:justify-center sm:items-center sm:px-2 sm:w-full sm:h-48 md:justify-center md:items-center md:py-2 md:px-4 md:w-1/2 md:h-full">
                      <div className="flex flex-col mt-1 mr-2 space-y-1 text-sm sm:hidden ">
                        <span className="text-blue-400 truncate">Estado</span>
                        <span className="text-blue-400 truncate">Cliente:</span>
                        <span className="inline-block text-blue-400 truncate">
                          Hora
                        </span>
                        <span className="inline-block text-blue-400 truncate">
                          Fecha
                        </span>

                        <span className="inline-block h-10 py-3 text-blue-400 truncate">
                          Datos del pago
                        </span>
                        <span className="inline-block py-2 text-blue-400 truncate sm:py-1 ">
                          Metodo de pago
                        </span>
                      </div>
                      <div className="flex flex-col space-y-1 text-sm text-gray-700 sm:hidden bg-blue-600 w-10/12">
                        <span
                          className={`${statusStyles[item.transactionStatus]}
                             font-semibold inline-block  rounded-lg px-3 w-24 text-center h-5`}
                        >
                          {statusOrder[item.transactionStatus]}
                        </span>
                        <div className="flex flex-col w-full ">
                          <span className="bg-red-400 break-words">{item.client}</span>
                        </div>
                        <div className="flex flex-row content-center">
                          <ClockIcon aria-hidden="true" className="w-6 h-6" />
                          <span className="ml-1">
                            {parseDate(item.transactionDate).hour}
                          </span>
                        </div>

                        <div className="flex flex-row content-center">
                          <CalendarIcon
                            aria-hidden="true"
                            className="w-6 h-6"
                          />
                          <span className="ml-1">
                            {parseDate(item.transactionDate).date}
                          </span>
                        </div>

                        <div className="flex flex-col">
                          <span className="font-bold bg-red-400 break-words">
                            {`#${item.transactionId}`}
                          </span>
                          <span className="bg-red-400 break-words">{`Ref: ${item.reference}`}</span>
                        </div>
                        <div className="flex flex-col">
                          {item.paymentType === "CARD" ? (
                            <CreditCardIcon
                              aria-hidden="true"
                              className="w-8 h-8"
                            />
                          ) : (
                            <img
                              className="block w-8 h-8"
                              src={imagenes[item.paymentType]}
                              alt="LogoMetPago"
                            />
                          )}
                        </div>
                      </div>

                      <div className="flex-col justify-between hidden w-2/4 h-40 pl-12 text-sm text-gray-700 sm:flex md:hidden ">
                        <div className="flex flex-col w-full ">
                          <span className="text-blue-400 truncate">
                            Cliente
                          </span>
                          <span>{item.client}</span>
                        </div>

                        <div className="flex flex-col w-full ">
                          <span className="inline-block text-blue-400 truncate">
                            ID Transaccion
                          </span>
                          <span className="font-bold">
                            {item.transactionId}
                          </span>
                        </div>

                        <div className="flex flex-col w-full ">
                          <span className="inline-block text-blue-400 truncate">
                            Ref. Transaccion
                          </span>
                          <span >{item.reference}</span>
                        </div>
                      </div>
                      <div className="flex-col content-center justify-between hidden w-2/4 h-40 px-12 mr-2 text-sm sm:flex md:hidden">
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
                          <span className="inline-block text-blue-400 truncate">
                            Hora y Fecha
                          </span>
                          <div className="flex flex-row space-x-2 ">
                            <div className="flex flex-row content-center">
                              <ClockIcon
                                aria-hidden="true"
                                className="w-6 h-6"
                              />
                              <span className="ml-1">
                                {parseDate(item.transactionDate).hour}
                              </span>
                            </div>

                            <div className="flex flex-row content-center">
                              <CalendarIcon
                                aria-hidden="true"
                                className="w-6 h-6"
                              />
                              <span className="ml-1">
                                {parseDate(item.transactionDate).date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          {" "}
                          <span className="inline-block text-blue-400 truncate">
                            Metodo de pago
                          </span>
                          <div className="flex flex-col">
                            {item.paymentType === "CARD" ? (
                              <CreditCardIcon
                                aria-hidden="true"
                                className="w-8 h-8"
                              />
                            ) : (
                              <img
                                className="block w-8 h-8"
                                src={imagenes[item.paymentType]}
                                alt="LogoMetPago"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col h-auto bg-gray-200 rounded-lg sm:mt-4 sm:relative sm:bottom-0 sm:flex-row sm:justify-between">
                    <div className="px-2 py-1 text-sm font-bold text-gray-700 sm:order-last sm:p-2 sm:text-sm">
                      TOTAL: {parseCurrency(item.totalTransactionValue)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <nav
              className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200"
              aria-label="Pagination"
            >
              <div className="flex justify-between flex-1">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-300 rounded-md bg-blue-wompi hover:bg-blue-800"
                  disabled={start === 0}
                  onClick={() => handlePagination("previous")}
                >
                  Anterior
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white border border-gray-300 rounded-md bg-blue-wompi hover:bg-blue-800"
                  disabled={limit >= props.order.totalTransactions}
                  onClick={() => handlePagination("next")}
                >
                  Siguiente
                </button>
              </div>
            </nav>
          </div>
        </div>
         : <div className="text-red-400 text-sm absolute">holaaaa</div>
        }
      </div>
    </>
  );
};
