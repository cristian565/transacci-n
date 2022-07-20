import { CalendarIcon, ClockIcon } from "@heroicons/react/outline";
import React from "react";
import { parseDate } from "../hooks/parse-date";
import { dataDetails } from "./interface/transactionDetails";


export interface AuthorizingDetailsCollectProps {
  data: dataDetails;
  
}

export const AuthorizingDetailsCollect = (props: AuthorizingDetailsCollectProps) => {

  return (
    <>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6 lg:pb-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:gap-y-8 sm:grid-cols-2">

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Código de convenio
            </dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">
              {props.data.paymentMethod.extra.business_agreement_code}
            </dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Referencia de pago
            </dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">
              {props.data.paymentMethod.extra.external_identifier}
            </dd>
          </div>

          <div className="sm:col-span-1 content-center">
            <dt className="text-sm font-medium text-gray-500">
              Generación de referencia de pago:
            </dt>
            <div className="flex flex-col space-y-1">
                          <div className="flex flex-row content-center">
                            <ClockIcon
                              aria-hidden="true"
                              className="h-6 w-6"
                            />
                            <span className="ml-1">
                              {parseDate(props.data.createdAt).hour}
                            </span>
                          </div>

                          <div className="flex flex-row content-center">
                            <CalendarIcon
                              aria-hidden="true"
                              className="h-6 w-6"
                            />
                            <span className="ml-1">
                              {parseDate(props.data.createdAt).date}
                            </span>
                          </div>
                        </div>
          </div>

        </dl>
      </div>
    </>
  )

}
