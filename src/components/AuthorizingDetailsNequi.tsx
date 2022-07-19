import React from "react";
import { dataDetails } from "./interface/transactionDetails";


export interface AuthorizingDetailsNequiProps {
  data: dataDetails;
}

export const AuthorizingDetailsNequi = (props: AuthorizingDetailsNequiProps) => {



  return (
    <>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6 lg:pb-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:gap-y-8 sm:grid-cols-2">

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
            Número celular usado
            </dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">
              {props.data.paymentMethod.phone_number}
            </dd>
          </div>
          
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
            ID Transacción Nequi
            </dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">
            {props.data.paymentMethod.extra.transaction_id}
            </dd>
          </div>

        </dl>
      </div>
    </>
  )

}
