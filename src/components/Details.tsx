import React, { useEffect, useState } from "react";
import { parseCurrency } from "../hooks/parse-currency";
import { parseDate } from "../hooks/parse-date";
import { imagenes } from "../assets/imagenes";
import { ArrowLeftIcon, ClockIcon, CalendarIcon } from "@heroicons/react/outline";
import { getOrdersDetail } from "../hooks/ordersDetail";
import { DetailsValue } from "./interface/detailsValue";
import { AuthorizingDetailsCard } from "./AuthorizingDetailsCard";
import { AuthorizingDetailsPse } from "./AuthorizingDetailsPse";
import { AuthorizingDetailsTransfer } from "./AuthorizingDetailsTransfer";
import { AuthorizingDetailsCollect } from "./AuthorizingDetailsCollect";
import { AuthorizingDetailsNequi } from "./AuthorizingDetailsNequi";
import { DetailsSkeleton } from "./DetailsSkeleton";
import Modal from "./Modal";
import ServerDown from "./ServerDow";

const URI = "https://bizzhub-gateway.hardtech.co:8098/engine-api/transactions/";
export interface DetailsProps {
  detailsValue: DetailsValue
  token: string;
  onClose: () => void;
  e2eAttr?: string;
}

export const Details = (props: DetailsProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<any>({});
  const [isError, setIsError] = useState<any>(false);
  const { detailsValue: { transactionId, paymentGateway }, token } = props;

  const statusStyles: Record<string, string> = {
    DECLINED: "bg-red-400 text-red-700",
    ERROR: "bg-red-400 text-red-700",
    APPROVED: "bg-green-400 text-green-700",
    VOIDED: "bg-yellow-400 text-yellow-700",
    PENDING: "bg-orange-400 text-orange-700"
  };

  const statusOrder: Record<string, string> = {
    DECLINED: "Declinada",
    ERROR: "Error",
    APPROVED: "Aprobado",
    VOIDED: "Anulada",
  };

  const loadOrderDetails = () => {
    getOrdersDetail(URI, token, paymentGateway, transactionId, setLoading, setData, setIsError);
  }

  useEffect(() => {
    loadOrderDetails();
  }, [])

  useEffect(() => {
    if (isError) {
      const interval = setInterval(() => {
        console.log("Error al cargar la información");
        loadOrderDetails();
        clearInterval(interval);
      }, 9000);
    }
  }, [isError, loading]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data])


  return (
    <>
      <div>
        {(!loading && !isError) ? <div className="min-h-full -z-40">
          <main className="py-2 md:py-9"
            data-cy={props.e2eAttr}>
            {/* Page header */}
            <div className=" mx-auto px-4 h-10 sm:px-6  md:flex md:content-center  md:space-x-2 lg:max-w-7xl lg:px-8">
              <ArrowLeftIcon
                aria-hidden="true"
                onClick={() => {
                  props.onClose();
                }}
                className="h-7 w-6 my-1 cursor-pointer"
              />
              <h1 className="text-2xl text-center md:text-left font-semibold text-gray-900">
                Detalle de la transacción
              </h1>
            </div>
            <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                {/* Description list*/}
                <section aria-labelledby="applicant-information-title">
                  <div className="mx-4 sm:mx-0 shadow-xl sm:rounded-lg mt-2 sm:mt-0">
                    <div className="px-4 py-5 sm:px-6">
                      <h2
                        id="applicant-information-title"
                        className="text-lg leading-6 font-medium text-gray-900 mt-2 sm:mt-0"
                      >
                        Detalles de pago
                      </h2>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6 lg:pb-8">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Monto
                          </dt>
                          <dd className="mt-1 text-sm font-semibold text-gray-900">{`COP ${parseCurrency(
                            data.amountInCents / 100
                          )}`}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Estado
                          </dt>
                          <span
                            className={`${statusStyles[data.status]}
                             font-semibold inline-block  rounded-lg h-1/2 px-3 w-24 text-center`}
                          >
                            {statusOrder[data.status]}
                          </span>
                        </div>
                        {(data.paymentMethodType === "DECLINED" || data.paymentMethodType === "PENDING") ?
                          (<div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Detalle del estado
                            </dt>
                            {(data.statusMessage) ? data.statusMessage : "-------"}
                          </div>) : ""}
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Transacción #
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {data.id}
                          </dd>
                        </div>
                        <div className="sm:col-span-1 ">
                          <dt className="text-sm font-medium text-gray-500">
                            Medio de pago
                          </dt>
                          <div className="flex flex-row ">
                            <img
                              data-cy={`${props.e2eAttr}__image-md`}
                              className="block h-9 mt-1 w-auto"
                              src={imagenes[(data.paymentMethodType === "CARD") ?
                                data.paymentMethod.extra.brand
                                : data.paymentMethodType]}
                              alt="LogoMetPago"
                            />

                            {(data.paymentMethodType === "CARD") ?
                              <dd className="self-center text-sm text-gray-900"> - {data.paymentMethod.extra.last_four}</dd>
                              : ""}


                          </div>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Referencia
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 break-words pr-8">
                            {data.reference}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Fecha
                          </dt>
                          <div className="flex flex-col space-y-1">
                            <div className="flex flex-row content-center">
                              <ClockIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                              <span className="ml-1">
                                {parseDate(data.createdAt).hour}
                              </span>
                            </div>

                            <div className="flex flex-row content-center">
                              <CalendarIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                              <span className="ml-1">
                                {parseDate(data.createdAt).date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Fecha de finalización
                          </dt>
                          <div className="flex flex-col space-y-1">
                            <div className="flex flex-row content-center">
                              <ClockIcon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                              <span className="ml-1">
                                {parseDate(data.finalizedAt).hour}
                              </span>
                            </div>

                            <div className="flex flex-row content-center">
                              <CalendarIcon
                                aria-hidden="true"
                                className="h-6 w-6"

                              />
                              <span className="ml-1">
                                {parseDate(data.finalizedAt).date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </dl>
                    </div>
                  </div>
                </section>

                {/* Detalles del autorizador*/}
                <section aria-labelledby="applicant-information-title">
                  <div className="bg-white mx-4 sm:mx-0 shadow-xl sm:rounded-lg ">
                    <div className="px-4 py-5 sm:px-6">
                      <h2
                        id="applicant-information-title"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Detalles del autorizador
                      </h2>
                    </div>
                    {(data.paymentMethodType === "CARD") ? <AuthorizingDetailsCard data={data} /> : ""}
                    {(data.paymentMethodType === "PSE") ? <AuthorizingDetailsPse data={data} /> : ""}
                    {(data.paymentMethodType === "BANCOLOMBIA_TRANSFER") ? <AuthorizingDetailsTransfer data={data} /> : ""}
                    {(data.paymentMethodType === "BANCOLOMBIA_COLLECT") ? <AuthorizingDetailsCollect data={data} /> : ""}
                    {(data.paymentMethodType === "NEQUI") ? <AuthorizingDetailsNequi data={data} /> : ""}
                  </div>
                </section>
              </div>

              <section
                aria-labelledby="timeline-title"
                className="flex flex-col space-y-4"
              >
                <div className="px-4 py-5 mx-4 sm:mx-0 sm:rounded-lg sm:px-6 shadow-xl">
                  <h2
                    id="timeline-title"
                    className="text-lg font-medium text-gray-900 mt-2 md:mt-0"
                  >
                    Infromación del comprador
                  </h2>
                  <div className="mt-3 sm:mt-4 flow-root border-t border-gray-200">
                    <div className="sm:py-4 mt-2 sm:mt-0">
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm font-semibold text-gray-900">
                        {data.customerEmail}
                      </dd>
                    </div>
                    <div className="sm:sm:py-4 mt-4 sm:mt-0">
                      <dt className="text-sm font-medium text-gray-500">
                        Nombres y apellidos
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-gray-900">
                        {(data.customerData.full_name) ? data.customerData.full_name : '------'}
                      </dd>
                    </div>
                    <div className="sm:sm:py-4 mt-4 sm:mt-0">
                      <dt className="text-sm font-medium text-gray-500">
                        Número de contacto
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-gray-900">
                        {(data.customerData.phone_number) ? data.customerData.phone_number : '------'}
                      </dd>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-5 mx-4 sm:mx-0 sm:rounded-lg sm:px-6 shadow-xl">
                  <h2
                    id="timeline-title"
                    className="text-lg font-medium text-gray-900 sm:mt-2 md:mt-2"
                  >
                    Entradas contables
                  </h2>
                  <div className="mt-3 md:mt-4 lg:mt-6 flow-root border-t border-gray-200 ">
                    <div className="sm:py-4 mt-4 sm:mt-0">
                      <dt className="text-sm font-medium text-gray-500">
                        Concepto
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-gray-900">
                        Sin datos
                      </dd>
                    </div>
                    <div className="sm:sm:py-4 mt-4 sm:mt-0 ">
                      <dt className="text-sm font-medium text-gray-500">Monto</dt>
                      <dd className="mt-1 text-sm font-semibold text-gray-900">
                        Sin datos
                      </dd>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
          : ""}
          {(!loading && !isError) ?<DetailsSkeleton e2eAttr="Details-skeleton__md" />:""}
        
        {(!loading && isError) ?
         <Modal
          open={!loading && isError}
          backdropClose={true}
          onClose={() => {
            console.warn('clicked for closed');
          }}
          style={{
            container:
              "z-50 inline-block overflow-hidden px-4 pt-5 pb-4 text-left align-bottom bg-gray-50 rounded-lg shadow-xl transition-all transform sm:p-6 sm:my-8 sm:w-full sm:max-w-lg sm:align-middle",
            opacity:
              " fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
          }}
          e2eAttr="modal-server-down"
        >
          <ServerDown />
        </Modal> : ""}
      </div>
    </>
  );
};
