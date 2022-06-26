import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { parseCurrency } from "../hooks/parse-currency";
import { parseDate } from "../hooks/parse-date";
import { imagenes } from "../assets/imagenes";
import {ArrowLeftIcon,ClockIcon,CalendarIcon} from "@heroicons/react/outline";



export interface DetailsProps {
  onClose: () => void;
  e2eAttr?: string;
}

export const Details = (props: DetailsProps) => {
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

  /* const navegate = useNavigate();
  const handleHome = () => {
    navegate("/Login");
  };
 */
  return (
    <>
      <div className="min-h-full">
        {/*    <button onClick={handleHome}>
ATRAS
        </button> */}
        <main className="py-2 md:py-9 ">
          {/* Page header */}
          <div className="mx-auto px-4 h-10 sm:px-6  md:flex md:content-center  md:space-x-2 lg:max-w-7xl lg:px-8">
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
                          330221125356
                        )}`}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Estado
                        </dt>
                        <span
                          className={`${statusStyles["DECLINED"]}
                             font-semibold inline-block  rounded-lg h-1/2 px-3 w-24 text-center`}
                        >
                          {statusOrder["DECLINED"]}
                        </span>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Detalle del estado
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Denegada en ruta
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Transacción #
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          555-555-5555
                        </dd>
                      </div>
                      <div className="sm:col-span-1 ">
                        <dt className="text-sm font-medium text-gray-500">
                          Medio de pago
                        </dt>
                        <div className="flex flex-row">
                          <img
                            className="block h-8 w-auto"
                            src={imagenes["VISA"]}
                            alt="MetodoPago"
                          />
                          <dd className="mt-1 text-sm text-gray-900">-3342</dd>
                        </div>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Referencia
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">3545</dd>
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
                              {parseDate("2022-04-26T14:40:35.227Z").hour}
                            </span>
                          </div>

                          <div className="flex flex-row content-center">
                            <CalendarIcon
                              aria-hidden="true"
                              className="h-6 w-6"
                              />
                            <span className="ml-1">
                              {parseDate("2022-04-26T14:40:35.227Z").date}
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
                              {parseDate("2022-04-26T14:40:35.227Z").hour}
                            </span>
                          </div>

                          <div className="flex flex-row content-center">
                            <CalendarIcon
                            aria-hidden="true"
                              className="h-6 w-6"
                              
                            />
                            <span className="ml-1">
                              {parseDate("2022-04-26T14:40:35.227Z").date}
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
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6 lg:pb-8">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Número de cuotas
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-gray-900">
                          1
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Franquicia
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-gray-900">
                          VISA
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Número de tarjeta
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          128343*****1843
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Fecha de vencimiento
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">01/22</dd>
                      </div>
                    </dl>
                  </div>
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
                  Entradas contables
                </h2>
                <div className="mt-3 sm:mt-4 flow-root border-t border-gray-200">
                  <div className="sm:py-4 mt-2 sm:mt-0">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm font-semibold text-gray-900">
                      Juan445@gmail.com
                    </dd>
                  </div>
                  <div className="sm:sm:py-4 mt-4 sm:mt-0">
                    <dt className="text-sm font-medium text-gray-500">
                      Nombres y apellidos
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-gray-900">
                      Pepito Juan Perez Ramos
                    </dd>
                  </div>
                  <div className="sm:sm:py-4 mt-4 sm:mt-0">
                    <dt className="text-sm font-medium text-gray-500">
                      Número de contacto
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-gray-900">
                      3002458760
                    </dd>
                  </div>
                </div>
              </div>

              <div className="px-4 py-5 mx-4 sm:mx-0 sm:rounded-lg sm:px-6 shadow-xl">
                <h2
                  id="timeline-title"
                  className="text-lg font-medium text-gray-900 sm:mt-2 md:mt-2"
                >
                  Infromación del comprador
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
    </>
  );
};
