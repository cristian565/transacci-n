import React from "react";
import { dataDetails } from "./interface/transactionDetails";


export interface AuthorizingDetailsCardProps {
  data: dataDetails;
}

export const AuthorizingDetailsCard = (props: AuthorizingDetailsCardProps) => {

  return (
    <>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6 lg:pb-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:gap-y-8 sm:grid-cols-2">

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Número de cuotas
            </dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">
              {props.data.paymentMethod.installments}
            </dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Franquicia
            </dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">
              {props.data.paymentMethod.extra.brand}
            </dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Número de tarjeta
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {props.data.paymentMethod.extra.bin}*****{props.data.paymentMethod.extra.last_four}
            </dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Fecha de vencimiento
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {props.data.paymentMethod.extra.exp_month}/{props.data.paymentMethod.extra.exp_year}
            </dd>
          </div>
        </dl>
      </div>
    </>
  )

}
