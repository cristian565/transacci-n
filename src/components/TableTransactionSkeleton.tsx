import { useState, memo } from "react";
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline";

export interface TableReturnsSkeletonProps {
  e2eAttr?: string;
}

export const TableTransactionSkeleton = memo(function (
  props: TableReturnsSkeletonProps
) {
  
  return (
    <>
    <div className="px-4 sm:px-6 lg:px-2 mt-8 -z-20">
      <div className="hidden md:flex mt-4 flex-col shadow-xl ">
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
                <tbody className="divide-y divide-gray-200 bg-white animate-pulse">
                  <tr className="cursor-pointer hover:bg-gray-300 active:bg-gray-300 focus:ring">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 md:pr-1 lg:pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-4 lg:pl-6">
                      <span className="inline-block w-20 h-4 bg-gray-300 rounded-full px-3 md:px-1 lg:px-3  md:w-20 lg:w-24 text-center"></span>
                    </td>
                    <td className="whitespace-nowrap px-0 py-4 text-sm text-gray-600 font-semibold lg:w-72 xl:w-auto">
                      <div className="flex flex-row">
                        <div className="flex-shrink-0 flex justify-center w-1/6 ">
                          <div className="w-20 h-8 bg-gray-300 rounded-lg">
                            {/* aqui la imagen */}
                          </div>
                        </div>
                        <div className="flex flex-col w-full px-3 lg:w-full">
                          <span className="w-32 h-4 bg-gray-300 rounded-full">
                            {/* aqui la el monto*/}
                          </span>
                          <span className="w-32 h-4 mt-1 bg-gray-300 rounded-full">
                            {/* aqui el correo del cliente*/}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold ">
                      <div className="flex flex-col">
                        <span className="w-48 h-4 bg-gray-300 rounded-lg">
                          {/* aqui el ID*/}
                        </span>
                        <span className="w-24 h-4 bg-gray-300 rounded-lg mt-1">
                          {/* aqui la REFERENCIA */}
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold">
                      <div className="flex flex-col space-y-1">
                        <div className="flex flex-row content-center">
                          <ClockIcon aria-hidden="true" className="h-6 w-6" />
                          <span className="ml-1 mt-1 w-16 h-4 bg-gray-300 rounded-lg">
                            {/* aqui la HORA*/}
                          </span>
                        </div>

                        <div className="flex flex-row content-center">
                          <CalendarIcon
                            aria-hidden="true"
                            className="h-6 w-6"
                          />
                          <span className="ml-1 mt-1 w-16 h-4 bg-gray-300 rounded-lg">
                            {/* aqui la FECHA */}
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:bg-gray-300 active:bg-gray-300 focus:ring">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 md:pr-1 lg:pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-4 lg:pl-6">
                      <span className="inline-block w-20 h-4 bg-gray-300 rounded-full px-3 md:px-1 lg:px-3  md:w-20 lg:w-24 text-center"></span>
                    </td>
                    <td className="whitespace-nowrap px-0 py-4 text-sm text-gray-600 font-semibold lg:w-72 xl:w-auto">
                      <div className="flex flex-row">
                        <div className="flex-shrink-0 flex justify-center w-1/6 ">
                          <div className="w-20 h-8 bg-gray-300 rounded-lg">
                            {/* aqui la imagen */}
                          </div>
                        </div>
                        <div className="flex flex-col w-full px-3 lg:w-full">
                          <span className="w-32 h-4 bg-gray-300 rounded-full">
                            {/* aqui la el monto*/}
                          </span>
                          <span className="w-32 h-4 mt-1 bg-gray-300 rounded-full">
                            {/* aqui el correo del cliente*/}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold ">
                      <div className="flex flex-col">
                        <span className="w-48 h-4 bg-gray-300 rounded-lg">
                          {/* aqui el ID*/}
                        </span>
                        <span className="w-24 h-4 bg-gray-300 rounded-lg mt-1">
                          {/* aqui la REFERENCIA */}
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold">
                      <div className="flex flex-col space-y-1">
                        <div className="flex flex-row content-center">
                          <ClockIcon aria-hidden="true" className="h-6 w-6" />
                          <span className="ml-1 mt-1 w-16 h-4 bg-gray-300 rounded-lg">
                            {/* aqui la HORA*/}
                          </span>
                        </div>

                        <div className="flex flex-row content-center">
                          <CalendarIcon
                            aria-hidden="true"
                            className="h-6 w-6"
                          />
                          <span className="ml-1 mt-1 w-16 h-4 bg-gray-300 rounded-lg">
                            {/* aqui la FECHA */}
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:bg-gray-300 active:bg-gray-300 focus:ring">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 md:pr-1 lg:pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-4 lg:pl-6">
                      <span className="inline-block w-20 h-4 bg-gray-300 rounded-full px-3 md:px-1 lg:px-3  md:w-20 lg:w-24 text-center"></span>
                    </td>
                    <td className="whitespace-nowrap px-0 py-4 text-sm text-gray-600 font-semibold lg:w-72 xl:w-auto">
                      <div className="flex flex-row">
                        <div className="flex-shrink-0 flex justify-center w-1/6 ">
                          <div className="w-20 h-8 bg-gray-300 rounded-lg">
                            {/* aqui la imagen */}
                          </div>
                        </div>
                        <div className="flex flex-col w-full px-3 lg:w-full">
                          <span className="w-32 h-4 bg-gray-300 rounded-full">
                            {/* aqui la el monto*/}
                          </span>
                          <span className="w-32 h-4 mt-1 bg-gray-300 rounded-full">
                            {/* aqui el correo del cliente*/}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold ">
                      <div className="flex flex-col">
                        <span className="w-48 h-4 bg-gray-300 rounded-lg">
                          {/* aqui el ID*/}
                        </span>
                        <span className="w-24 h-4 bg-gray-300 rounded-lg mt-1">
                          {/* aqui la REFERENCIA */}
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold">
                      <div className="flex flex-col space-y-1">
                        <div className="flex flex-row content-center">
                          <ClockIcon aria-hidden="true" className="h-6 w-6" />
                          <span className="ml-1 mt-1 w-16 h-4 bg-gray-300 rounded-lg">
                            {/* aqui la HORA*/}
                          </span>
                        </div>

                        <div className="flex flex-row content-center">
                          <CalendarIcon
                            aria-hidden="true"
                            className="h-6 w-6"
                          />
                          <span className="ml-1 mt-1 w-16 h-4 bg-gray-300 rounded-lg">
                            {/* aqui la FECHA */}
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav
                className="flex justify-between items-center py-3 px-4 bg-white border-t border-gray-200 sm:px-6"
                aria-label="Pagination"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700">
                    Mostrando pagina<span className="font-medium">{1}</span>{" "}
                    de <span className="font-medium"></span>
                    <span className="font-medium"></span>
                  </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                  <button
                    className="inline-flex relative items-center py-2 px-4 text-sm font-medium text-white bg-blue-wompi hover:bg-blue-400 rounded-md border border-gray-300"
                  >
                    Anterior
                  </button>
                  <button
                    className={
                      "inline-flex relative items-center py-2 px-4 ml-3 text-sm font-medium text-white bg-blue-wompi hover:bg-blue-400 rounded-md border border-gray-300"
                    }
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
            <li className="sm:relative mb-0 ">
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
                  <div className="flex sm:hidden flex-col text-sm text-gray-700 animate-pulse">
                    <span className="w-24 mt-1 h-4 bg-gray-300 rounded-full">
                      {/* aqui el estado */}
                    </span>
                    <div className="w-32 h-4 bg-gray-300 rounded-full mt-2 ">
                      <span>{/* aqui el email */}</span>
                    </div>
                    <div className="flex flex-row content-center mt-1">
                      <ClockIcon aria-hidden="true" className="h-6 w-6" />
                      <span className="ml-1 w-14 h-4 bg-gray-300 rounded-full mt-1">
                        {/* aqui la hora*/}
                      </span>
                    </div>

                    <div className="flex flex-row content-center mb-1">
                      <CalendarIcon aria-hidden="true" className="h-6 w-6" />
                      <span className="ml-1 w-14 h-4 bg-gray-300 rounded-full mt-1">
                        {/* aqui la fecha */}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="w-32 h-4 bg-gray-300 rounded-full mt-2">
                        {/* aqui el id */}
                      </span>
                      <span className="w-16 h-4 bg-gray-300 rounded-full mt-1">
                        {/* aqui la refenerancia*/}
                      </span>
                    </div>
                    <div className="ml-1 w-14 h-6 bg-gray-300 rounded-lg mt-2">
                      <div>{/* aqui la imagen */}</div>
                    </div>
                  </div>

                  <div className="hidden sm:flex md:hidden flex-col text-sm text-gray-700  justify-between  pl-12  w-2/4 h-40 animate-pulse">
                    <div className="flex flex-col w-full ">
                      <span className="text-blue-400 truncate animate-none">
                        Cliente
                      </span>
                      <span className="w-32 h-4 bg-gray-300 rounded-full">
                        {/* aqui el email*/}
                      </span>
                    </div>

                    <div className="flex flex-col w-full ">
                      <span className="text-blue-400 inline-block truncate">
                        ID Transaccion
                      </span>
                      <span className="w-32 h-4 bg-gray-300 rounded-full">
                        {/* aqui el ID*/}
                      </span>
                    </div>

                    <div className="flex flex-col w-full ">
                      <span className="text-blue-400 inline-block truncate">
                        Ref. Transaccion
                      </span>
                      <span className="w-32 h-4 bg-gray-300 rounded-full">
                        {/* aqui la REFERENCIA*/}
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex md:hidden  flex-col content-center justify-between  text-sm mr-2 px-12  w-2/4 h-40 animate-pulse">
                    <div className="flex flex-col">
                      <span className="text-blue-400 truncate">Estado</span>
                      <span className="w-32 h-4 bg-gray-300 rounded-full">
                        {/* aqui EL STADO*/}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-blue-400 inline-block truncate">
                        Hora y Fecha
                      </span>
                      <div className=" flex flex-row space-x-2">
                        <div className="flex flex-row content-center">
                          <ClockIcon aria-hidden="true" className="h-6 w-6" />
                          <span className="ml-1 w-16 h-4 mt-1 bg-gray-300 rounded-full">
                            {/* aqui la HORA */}
                          </span>
                        </div>

                        <div className="flex flex-row content-center">
                          <CalendarIcon
                            aria-hidden="true"
                            className="h-6 w-6"
                          />
                          <span className="ml-1 w-16 h-4 mt-1 bg-gray-300 rounded-full">
                            {/* aqui la FECHA*/}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      {" "}
                      <span className="text-blue-400 inline-block truncate">
                        Metodo de pago
                      </span>
                      <div className="ml-1 w-14 h-6 bg-gray-300 rounded-lg">
                        <div>{/* aqui la imagen */}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col h-auto sm:mt-4 sm:relative sm:bottom-0 bg-gray-200 rounded-lg sm:flex-row sm:justify-between">
                <div className="py-2 px-2 text-sm font-bold text-gray-700 sm:order-last sm:p-2 sm:text-sm flex flex-row">
                  <span>TOTAL:</span>{" "}
                  <div className="ml-1 w-36 h-5 py-1 bg-gray-300 animate-pulse rounded-full inline-block"></div>
                  {/* aqui el monto */}
                </div>
              </div>
            </li>
          </ul>
          <nav
            className="flex justify-between items-center py-3 px-4 bg-white border-t border-gray-200"
            aria-label="Pagination"
          >
            <div className="flex flex-1 justify-between">
              <button
                type="button"
                className="bg-blue-wompi hover:bg-blue-800 inline-flex relative items-center py-2 px-4 text-sm font-medium text-white rounded-md border border-gray-300"
              >
                Anterior
              </button>
              <button
                type="button"
                className="bg-blue-wompi hover:bg-blue-800 inline-flex relative items-center py-2 px-4 ml-3 text-sm font-medium text-white rounded-md border border-gray-300"
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
});
