import React from "react";
import { dataDetails } from "./interface/transactionDetails";


export interface AuthorizingDetailsPseProps {
  data: dataDetails;
}

export const AuthorizingDetailsPse = (props: AuthorizingDetailsPseProps) => {

  return (
    <>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6 lg:pb-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:gap-y-8 sm:grid-cols-2">

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
            Tipo de cliente
            </dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">
              {(props.data.paymentMethod.user_type===0)?"Persona natural":"Persona jurídica"}
            </dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
            Documento
            </dt>
            <dd className="mt-1 text-sm font-semibold text-gray-900">
              {props.data.paymentMethod.user_legal_id_type} {props.data.paymentMethod.user_legal_id}
            </dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
            Descripción del pago
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {props.data.paymentMethod.payment_description}
            </dd>
          </div>
          
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
            CUS (Código Único de Servicio)
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {props.data.paymentMethod.extra.external_identifier}
            </dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
            Ticket ID
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {props.data.paymentMethod.extra.ticket_id}
            </dd>
          </div>
        </dl>
      </div>
    </>
  )

}
