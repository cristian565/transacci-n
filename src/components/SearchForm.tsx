import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import Select from "./Select";
import InputBasic from "./InputBasic";
import { useFormik } from "formik";
import { SearchFormValue } from "./interface/searchFormValue";
import { XIcon, SearchIcon, TrashIcon } from "@heroicons/react/outline";


export interface SearchFormProps {
  resPage: Dispatch<SetStateAction<number>>;
  resStart: Dispatch<SetStateAction<number>>;
  resLimit: Dispatch<SetStateAction<number>>;
  setFormValueData: Dispatch<SetStateAction<SearchFormValue>>;
  formValueData:SearchFormValue;
  stateFilter: Dispatch<SetStateAction<boolean>>;
  e2eAttr?: string;
}

export const SearchForm = (props: SearchFormProps) => {
  const statusOrderArray = ["Declinada", "Error", "Aprobado", "Anulada","Pendiente"];
  const statusOrderEnglish: Record<string, string> = { Declinada: "DECLINED", Error: "ERROR", Aprobado: "APPROVED", Anulada: "VOIDED",Pendiente:"PENDING" };
  const paymentMethodArray = ["Tarjeta", "Nequi", "Botón Bancolombia", "Corresponsal Bancario Bancolombia", "PSE"];
  const paymentMethodEnglish: Record<string, string> = { 1: "CARD", 2: "NEQUI", 3: "BANCOLOMBIA_TRANSFER", 4: "BANCOLOMBIA_COLLECT", 5: "PSE" };
  const [errorFullFields, setErrorFullFields] = useState<boolean>(false);


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
      props.setFormValueData({
        stateOrders: statusOrderEnglish[values.stateOrders] ?? "",
        paymentMethod: paymentMethodEnglish[paymentMethodArray.indexOf(values.paymentMethod) + 1] ?? "",
        idTransaction: values.idTransaction,
        refTransaction: values.refTransaction,
        emailUser: values.emailUser,
      });
    },
  });
  const resetValuesForm = () => {
    searchForm.resetForm();

    props.setFormValueData({
      stateOrders: "",
      paymentMethod: "",
      idTransaction: "",
      refTransaction: "",
      emailUser: "",
    });
    props.resPage(0)
    props.resStart(0)
    props.resLimit(1)
    setErrorFullFields(false)
  };

  useEffect(() => {
    if(props.formValueData.idTransaction.length!==0 || props.formValueData.stateOrders.length!==0 || props.formValueData.paymentMethod.length!==0 || props.formValueData.emailUser.length!==0 ||props.formValueData.refTransaction.length!==0){
      setErrorFullFields(true)
    }
  }, [])
  

  return (
    <>
    {(errorFullFields)?<div className="text-red-600 text-center mt-3 font-semibold">Haga click en <span className="my-auto underline font-bold">Limpiar filtro</span> para volver a las transacciones iniciales
          </div>:""}
          <div
        className="z-0 relative w-4/5 px-4 py-4 mx-auto mt-2 rounded-lg lg:px-0 lg:mt-0 lg:w-full sm:flex sm:items-center md:flex md:items-center sm:w-3/5 md:w-4/5 bg-gray-50 drop-shadow-lg"
        data-cy={props.e2eAttr}
      >
        <div
          onClick={() => {
            props.stateFilter(false)
          }}
          className="absolute right-0 flex flex-row px-2 cursor-pointer top-1 lg:top-0 "
        >
          <XIcon
            aria-hidden="true"
            className="w-5 h-5"
          />
          <span className="hidden text-sm font-bold lg:flex">Cerrar</span>
        </div>

        <form
          className="mx-auto md:w-full md:mt-3"
          onSubmit={searchForm.handleSubmit}
        >
          <div className="flex flex-col justify-between px-4 space-y-3 lg:space-y-0 md:flex-col xl:flex-row sm:px-0">
            <div className="flex flex-col order-last mt-2 space-y-2 md:flex-row md:justify-around xl:w-3/5 xl:order-last md:mt-0 md:space-y-0 md:order-none">
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

            <div className="flex flex-col space-y-2 md:flex-row md:w-3/4 md:mx-auto lg:space-y-2 xl:space-y-0 xl:justify-around xl:w-2/5 ">
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
              <div className="mt-2 md:w-2/5 md:mt-0 lg:mt-4 xl:w-44">
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

          <div className="flex flex-row content-center justify-center mt-6 space-x-8">
            <button
           /*  type="submit" */
              className="flex flex-row content-center justify-center w-32 py-2 mt-1 text-white border border-solid cursor-pointer bg-blue-wompi h-11 sm:h-auto sm:py-1 hover:bg-blue-800 rounded-xl md:w-32 md:h-9"
              onClick={() => {
                props.resPage(0)
                props.resStart(0)
                props.resLimit(1)
              }}
            >
              <SearchIcon
                aria-hidden="true"
                className="w-4 h-4 mt-1 mr-1"
              />
              <span>Buscar</span>
            </button>

            <div
              className="flex flex-row content-center justify-center py-2 ml-2 text-sm font-bold cursor-pointer "
              onClick={resetValuesForm}
            >
              <TrashIcon
                aria-hidden="true"
                className="w-6 h-6"
              />
              <span className="inline-block my-auto underline">
                Limpiar filtro
              </span>
            </div>
          </div>
        </form>
      </div>
      </> );
};
