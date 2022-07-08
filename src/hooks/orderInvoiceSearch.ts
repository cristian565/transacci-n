import React, { useState, Dispatch, useMemo } from "react";
import { Order } from "../components/interface/order";
import { SearchFormValue } from "../components/interface/searchFormValue";

const statusOrder: Record<string, string> = {
  Declinada:"DECLINED",
  Error:"ERROR",
  Aprobado:"APPROVED",
  Anulada:"VOIDED",
};

const paymentMethod: Record<string, string> = {
  Tarjeta:"CARD",
  Nequi:"NEQUI",
  PSE:"PSE",
  Bancolombia:"BANCOLOMBIA",
};

export function orderInvoiceSearch(searchValue:SearchFormValue, data: Order){
 return data.transactions.filter(
   (item)=>( (item.transactionStatus===statusOrder[searchValue.stateOrders] || searchValue.stateOrders=="" )
    && (item.reference== searchValue.refTransaction.toString() || searchValue.refTransaction=="") 
    && (item.paymentType==paymentMethod[searchValue.paymentMethod] || searchValue.paymentMethod=="") 
    && (item.client==searchValue.emailUser || searchValue.emailUser=="" )
    && (item.transactionId==searchValue.idTransaction.toString() || searchValue.idTransaction=="")
    )
    )
}