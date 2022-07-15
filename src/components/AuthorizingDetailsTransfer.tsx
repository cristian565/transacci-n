import React, { useEffect, useState, Dispatch, SetStateAction, } from "react";
import { dataDetails } from "./interface/orderDetails";


export interface AuthorizingDetailsTransferProps {
  data: dataDetails;
}

export const AuthorizingDetailsTransfer = (props: AuthorizingDetailsTransferProps) => {


  return (
    <>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6 lg:pb-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:gap-y-8 sm:grid-cols-2">

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
            ID Intención de compra en Bancolombia
            </dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">
              {props.data.paymentMethod.extra.external_identifier}
            </dd>
          </div>
          
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
            Tipo de usuario
            </dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">
            {(props.data.paymentMethod.user_type==="PERSON")?"Persona natural":"Persona jurídica"}
            </dd>
          </div>

        </dl>
      </div>
    </>
  )

}
