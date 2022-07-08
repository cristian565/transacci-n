import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import Select from "./Select";
import InputBasic from "./InputBasic";
import { useFormik } from "formik";
import { SearchFormValue } from "./interface/searchFormValue";
import {XIcon,SearchIcon,TrashIcon} from "@heroicons/react/outline";
export interface SearchFormProps {
  stateFilter: Dispatch<SetStateAction<boolean>>;
  searchValue: Dispatch<SetStateAction<SearchFormValue>>;
  cleanSeacrh: Dispatch<SetStateAction<boolean>>;
  e2eAttr?: string;
}

export const SearchForm = (props: SearchFormProps) => {
  const statusOrderArray = ["Declinada", "Error", "Aprobado", "Anulada"];
  const paymentMethodArray = ["Tarjeta", "Nequi", "Bancolombia", "PSE"];

  const searchForm = useFormik({
    initialValues: {
      stateOrders: "",
      paymentMethod: "",
      idTransaction: "",
      refTransaction: "",
      emailUser: "",
    },
    validateOnChange: true,
    validateOnMount: false,

    onSubmit: (values) => {
      props.searchValue(values);

      props.cleanSeacrh(false);
    },
  });
  const resetValuesForm = () => {
    searchForm.resetForm();

    props.searchValue({
      stateOrders: "",
      paymentMethod: "",
      idTransaction: "",
      refTransaction: "",
      emailUser: "",
    });
    props.cleanSeacrh(true);
  };

  return (
    <div 
    className="relative mt-2 px-4 lg:px-0 lg:mt-0 lg:w-full sm:flex sm:items-center md:flex md:items-center py-4 rounded-lg w-4/5 sm:w-3/5 md:w-4/5 mx-auto bg-gray-50 drop-shadow-lg"
    data-cy={props.e2eAttr}
    >
      <div
        onClick={() => {props.stateFilter(false)
        props.cleanSeacrh(true)}}
        className="absolute top-1 lg:top-0 right-0 cursor-pointer flex flex-row px-2 "
      >
        <XIcon
         aria-hidden="true"
          className="h-5 w-5"
          />
        <span className="hidden lg:flex font-bold text-sm">Cerrar</span>
      </div>

      <form
        className="md:w-full md:mt-3 mx-auto"
        onSubmit={searchForm.handleSubmit}
      >
        <div className="flex space-y-3 lg:space-y-0  md:flex-col flex-col xl:flex-row justify-between px-4 sm:px-0">
          <div className="flex flex-col md:flex-row md:justify-around space-y-2 order-last mt-2 xl:w-3/5 xl:order-last md:mt-0 md:space-y-0 md:order-none">
            <div>
              <InputBasic
                metadata={{
                  type: "text",
                  name: "idTransaction",
                  id: "idTransaction",
                  className:
                    "block py-2 pl-2 mt-1 w-full rounded border border-gray-400 focus:border-blue-500 focus:ring-blue-500 shadow-sm sm:text-sm",
                  placeholder: "6227",
                  onChange: (e) => {
                    searchForm.setFieldTouched("idTransaction");
                    searchForm.handleChange(e);
                  },
                  value: searchForm.values.idTransaction,
                }}
                label={{
                  text: "ID de la transacción",
                  className:
                    "block text-sm font-medium text-gray-700 capitalize",
                }}
                touched={searchForm.touched.idTransaction}
                e2eAttr={`${props.e2eAttr}__idTransaction`}
              />
            </div>

            <div>
              <InputBasic
                metadata={{
                  type: "text",
                  name: "refTransaction",
                  id: "refTransaction",
                  className:
                    "block py-2 pl-2 mt-1 w-full rounded border border-gray-400 focus:border-blue-500 focus:ring-blue-500 shadow-sm sm:text-sm",
                  placeholder: "6778",
                  onChange: (e) => {
                    searchForm.setFieldTouched("refTransaction");
                    searchForm.handleChange(e);
                  },
                  value: searchForm.values.refTransaction,
                }}
                label={{
                  text: "Referencia de la transacción",
                  className:
                    "block text-sm font-medium text-gray-700 capitalize",
                }}
                touched={searchForm.touched.refTransaction}
                e2eAttr={`${props.e2eAttr}__refTransaction`}
              />
            </div>

            <div>
              <InputBasic
                metadata={{
                  type: "email",
                  name: "emailUser",
                  id: "emailUser",
                  className:
                    "block py-2 pl-2 mt-1 w-full rounded border border-gray-400 focus:border-blue-500 focus:ring-blue-500 shadow-sm sm:text-sm",
                  placeholder: "user@gmail.com",
                  onChange: (e) => {
                    searchForm.setFieldTouched("emailUser");
                    searchForm.handleChange(e);
                  },
                  value: searchForm.values.emailUser,
                }}
                label={{
                  text: "Email del cliente",
                  className:
                    "block text-sm font-medium text-gray-700 capitalize",
                }}
                touched={searchForm.touched.emailUser}
                e2eAttr={`${props.e2eAttr}__emailUser`}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:w-3/4 md:mx-auto space-y-2 lg:space-y-2 xl:space-y-0 xl:justify-around xl:w-2/5 ">
            <div className="md:w-2/5 md:mr-14 md:mt-2 xl:mr-0 xl:mt-0 xl:w-40">
              <Select
                label={{
                  text: "Estado",
                  className: "block text-sm font-medium text-gray-700",
                }}
                data={[
                  {
                    id: 0,
                    text: "Seleccione",
                    disabled: false,
                    hidden: true,
                  },
                  ...statusOrderArray.map((state) => ({
                    id: state,
                    text: state,
                    disabled: false,
                    hidden: false,
                  })),
                ]}
                metadata={{
                  name: "stateOrders",
                  id: "stateOrders",
                  disabled: false,
                  className:
                    "block py-2 px-4 mt-1 w-full bg-white rounded-md border border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 shadow-sm sm:text-sm",
                  onChange: (e) => {
                    searchForm.setFieldTouched("stateOrders");
                    searchForm.handleChange(e);
                  },
                  value: searchForm.values.stateOrders,
                }}
                touched={searchForm.touched.stateOrders}
                e2eAttr={`${props.e2eAttr}__stateOrders`}
              />
            </div>
            <div className="md:w-2/5 mt-2 md:mt-0 lg:mt-4 xl:w-44">
              <Select
                label={{
                  text: "Método de pago",
                  className: "block text-sm font-medium text-gray-700",
                }}
                data={[
                  {
                    id: 0,
                    text: "Seleccione",
                    disabled: false,
                    hidden: true,
                  },
                  ...paymentMethodArray.map((paymethod) => ({
                    id: paymethod,
                    text: paymethod,
                    disabled: false,
                    hidden: false,
                  })),
                ]}
                metadata={{
                  name: "paymentMethod",
                  id: "paymentMethod",
                  disabled: false,
                  className:
                    "block py-2 px-4 mt-1 w-full bg-white rounded-md border border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 shadow-sm sm:text-sm",
                  onChange: (e) => {
                    searchForm.setFieldTouched("paymentMethod");
                    searchForm.handleChange(e);
                  },
                  value: searchForm.values.paymentMethod,
                }}
                touched={searchForm.touched.paymentMethod}
                e2eAttr={`${props.e2eAttr}__paymentMethod`}
/>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-8 content-center justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-wompi w-32 flex flex-row justify-center py-2 h-11 sm:h-auto sm:py-1 content-center mt-1 hover:bg-blue-800 text-white border border-solid rounded-xl cursor-pointer md:w-32 md:h-9"
          >
            <SearchIcon
              aria-hidden="true"
              className="h-4 w-4 mt-1 mr-1"
             />
            <span>Buscar</span>
          </button>

          <div
            className="text-sm font-bold cursor-pointer flex flex-row justify-center ml-2 py-2 content-center "
            onClick={resetValuesForm}
          >
            <TrashIcon
              aria-hidden="true"
              className="h-6 w-6"
             />
            <span className="inline-block my-auto underline">
              Limpiar filtro
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
