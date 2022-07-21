import React from "react";
import { ArrowLeftIcon, ClockIcon, CalendarIcon } from "@heroicons/react/outline";


export interface DetailsSkeletonProps {
  e2eAttr?: string;
}

export const DetailsSkeleton = (props: DetailsSkeletonProps) => {

  return (
    <>
    {console.log("componente--detailsSkeleton")}
      <div className="min-h-full -z-30">
        <main className="py-2 md:py-9"
          data-cy={props.e2eAttr}>
          <div className=" mx-auto px-4 h-10 sm:px-6  md:flex md:content-center  md:space-x-2 lg:max-w-7xl lg:px-8">
            <ArrowLeftIcon
              aria-hidden="true"
              className="h-7 w-6 my-1 cursor-pointer"
            />
            <h1 className="text-2xl text-center md:text-left font-semibold text-gray-900">
              Detalle de la transacción
            </h1>
          </div>
          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
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
                  <div className="animate-pulse border-t border-gray-200 px-4 py-5 sm:px-6 lg:pb-8">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Monto
                        </dt>
                        <div className="flex flex-row ">
                          <span className="w-24 h-4 bg-gray-300 rounded-full">
                          </span>
                        </div>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Estado
                        </dt>
                        <div className="flex flex-row ">
                          <span className="w-20 h-4 bg-gray-300 rounded-full">
                          </span>
                        </div>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Detalle del estado
                        </dt>
                        <div className="flex flex-row ">
                          <span className="w-32 h-4 bg-gray-300 rounded-full">
                          </span>
                        </div>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Transacción #
                        </dt>
                        <div className="flex flex-row ">
                          <span className="w-32 h-4 bg-gray-300 rounded-full">
                          </span>
                        </div>
                      </div>
                      <div className="sm:col-span-1 ">
                        <dt className="text-sm font-medium text-gray-500">
                          Medio de pago
                        </dt>
                        <div className="flex flex-row ">
                          <span className="w-12 h-10 bg-gray-300 rounded-lg">
                          </span>

                        </div>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Referencia
                        </dt>
                        <div className="flex flex-row ">
                          <span className="w-28 h-4 bg-gray-300 rounded-full">
                          </span>
                        </div>
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
                            <span className="w-12 h-4 mt-1 bg-gray-300 rounded-full">
                            </span>
                          </div>

                          <div className="flex flex-row content-center">
                            <CalendarIcon
                              aria-hidden="true"
                              className="h-6 w-6"
                            />
                            <span className="w-12 h-4 mt-1 bg-gray-300 rounded-full">
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
                            <span className="w-12 h-4 mt-1 bg-gray-300 rounded-full">
                            </span>
                          </div>

                          <div className="flex flex-row content-center">
                            <CalendarIcon
                              aria-hidden="true"
                              className="h-6 w-6"

                            />
                            <span className="w-12 h-4 mt-1 bg-gray-300 rounded-full">
                            </span>
                          </div>
                        </div>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>


              <section aria-labelledby="applicant-information-title">
                <div className="bg-white mx-4 sm:mx-0 shadow-xl sm:rounded-lg ">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Detalles del autorizador
                    </h2>
                    <div className=" animate-pulse border-t border-gray-200 px-4 py-5 sm:px-6 lg:pb-8">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:gap-y-8 sm:grid-cols-2">

                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Número de cuotas
                          </dt>
                          <div className="flex flex-row ">
                            <span className="w-28 h-4 bg-gray-300 rounded-full">
                            </span>
                          </div>
                        </div>

                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Franquicia
                          </dt>
                          <div className="flex flex-row ">
                            <span className="w-28 h-4 bg-gray-300 rounded-full">
                            </span>
                          </div>
                        </div>
                      </dl>
                    </div>
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
                  Infromación del comprador
                </h2>
                <div className="animate-pulse mt-3 sm:mt-4 flow-root border-t border-gray-200">
                  <div className="sm:py-4 mt-2 sm:mt-0">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <div className="flex flex-row ">
                      <span className="w-28 h-4 bg-gray-300 rounded-full">
                      </span>
                    </div>
                  </div>
                  <div className="sm:sm:py-4 mt-4 sm:mt-0">
                    <dt className="text-sm font-medium text-gray-500">
                      Nombres y apellidos
                    </dt>
                    <div className="flex flex-row ">
                      <span className="w-28 h-4 bg-gray-300 rounded-full">
                      </span>
                    </div>
                  </div>
                  <div className="sm:sm:py-4 mt-4 sm:mt-0">
                    <dt className="text-sm font-medium text-gray-500">
                      Número de contacto
                    </dt>
                    <div className="flex flex-row ">
                      <span className="w-28 h-4 bg-gray-300 rounded-full">
                      </span>
                    </div>
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
                <div className="animate-pulse mt-3 md:mt-4 lg:mt-6 flow-root border-t border-gray-200 ">
                  <div className="sm:py-4 mt-4 sm:mt-0">
                    <dt className="text-sm font-medium text-gray-500">
                      Concepto
                    </dt>
                    <div className="flex flex-row ">
                      <span className="w-28 h-4 bg-gray-300 rounded-full">
                      </span>
                    </div>
                  </div>
                  <div className="sm:sm:py-4 mt-4 sm:mt-0 ">
                    <dt className="text-sm font-medium text-gray-500">Monto</dt>
                    <div className="flex flex-row ">
                      <span className="w-28 h-4 bg-gray-300 rounded-full">
                      </span>
                    </div>
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
