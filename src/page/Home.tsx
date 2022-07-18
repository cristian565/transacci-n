import React from "react";
import { useState, useEffect, useMemo } from "react";
import { Transition } from "@headlessui/react";
import {
  HomeIcon,
  LogoutIcon,
  SearchCircleIcon,
  SearchIcon,
  FilterIcon,
} from "@heroicons/react/outline";
import { TableTransaction } from "../components/TableTransaction";
import { Details } from "../components/Details";
import { imagenes } from "../assets/imagenes";
import { SearchForm } from "../components/SearchForm";
import { TableTransactionSkeleton } from "../components/TableTransactionSkeleton";
import Modal from "../components/Modal";
import OrderNotFound from "../components/OrderNotFound";
import { useOrders } from "../hooks/useOrders";
import { useKeycloak } from "@react-keycloak/web";
import { useHistory } from "react-router-dom";
import { DetailsValue } from "../components/interface/detailsValue";
import { SearchFormValue } from "../components/interface/searchFormValue";
import { DateSearch } from "../components/DateSearch";
import ServerDown from "../components/ServerDow";


export const Home = () => {
  const navigation = [
    { name: "Transacciones", href: "#", icon: HomeIcon, current: true },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const [dataOrder, setDataOrder] = useState<any>({});
  const [showNoDateFilter, setShowNoDateFilter] = useState<boolean>(false);
  const [openTransaction, setOpenTransaction] = useState<boolean>(true);
  const [removeSearch, setremoveSearch] = useState<boolean>(false);
  const [openFilter, setopenFilter] = useState<boolean>(false);
  const { keycloak} = useKeycloak();
  const history = useHistory();
  const [detailsValue, setDetailsValue] = useState<DetailsValue>({
    transactionId: "",
    paymentGateway: "",
  });
  const [pagination, setpagination] = useState<number>(0);
  const [start, setStart] = useState<number>(0);
  const [limit, setLimit] = useState<number>(1);
  const a=new Date()
  const [startDate, setstartDate] = useState<string>( a.getFullYear()+"-"+ String(a.getMonth() + 1).padStart(2, '0')+"-"+String(a.getDate()-1).padStart(2, '0'));
  const [endDate, setendDate] = useState<string>( a.getFullYear()+"-"+ String(a.getMonth() + 1).padStart(2, '0')+"-"+String(a.getDate()).padStart(2, '0'));
  
 

  const [searchValue, setSearchValue] = useState<SearchFormValue>({
    stateOrders: "",
    paymentMethod: "",
    idTransaction: "",
    refTransaction: "",
    emailUser: "",
  });

  const { orders, isLoading, isError,mutate } = useOrders(
    "https://bizzhub-gateway.hardtech.co:8098/engine-api/transactions/",
    keycloak.token ? keycloak.token : "",
    pagination,
    searchValue.idTransaction,
    searchValue.refTransaction,
    searchValue.stateOrders,
    searchValue.paymentMethod,
    searchValue.emailUser,
    (startDate!=="") ? startDate : "",
    (endDate!=="") ? endDate : ""
  );


  useEffect(() => {
    if (orders && !isLoading) { setDataOrder(orders); }

      if(orders?.totalTransactions===0 && !isLoading && !isError){
        setShowNoDateFilter(true)
        handleReset()
   }
  }, [orders, showNoDateFilter]);

  useEffect(() => {
    setpagination(0)
      setStart(0)
      setLimit(1)
  }, [endDate,startDate]);

  const handleClosedSession = () => {
    keycloak.logout();
    history.push("/");
  };

  const handleReset =()=>{
    setstartDate("")
      setendDate("")
      setSearchValue({
        stateOrders: "",
        paymentMethod: "",
        idTransaction: "",
        refTransaction: "",
        emailUser: "",
      })
      setpagination(0)
      setStart(0)
      setLimit(1)
  }

  return (
    <>
      {console.log(isLoading, "isLoading")}
      <div className="h-screen">
        {/* Componente para movil */}

        <div className="w-full h-screen lg:hidden">
          <div className="relative bg-white">
            <div
              className="absolute inset-0  shadow pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative ">
              <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                <div>
                  <span className="sr-only">BellaPiel</span>
                  <img
                    className="w-auto h-8 sm:h-10"
                    src={imagenes["BELLAPIEL"]}
                    alt="LogoBellaPiel"
                  />
                </div>

                <div className="flex flex-row justify-between w-24 md:hidden">
                  <div
                    className={openTransaction ? "cursor-pointer" : "hidden"}
                    onClick={() => setopenFilter(true)}
                  >
                    <SearchCircleIcon
                      aria-hidden="true"
                      className="w-10 h-10"
                    />
                  </div>
                  <div onClick={() => handleClosedSession()}>
                    <LogoutIcon aria-hidden="true" className="w-10 h-10 " />
                  </div>
                </div>
                <div className="hidden md:flex-1 md:flex md:items-center md:justify-end">
                  <div className="flex w-auto">
                    <div
                      onClick={() => setopenFilter(true)}
                      className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-blue-wompi hover:bg-indigo-700"
                      data-cy="search--form-button-normal__md"
                    >
                      <SearchIcon aria-hidden="true" className="w-4 h-4 mr-1" />
                      <span>Buscar</span>
                    </div>
                    <div
                      onClick={() => handleClosedSession()}
                      className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-blue-wompi hover:bg-indigo-700"
                    >
                      <span>Salir</span>
                      <LogoutIcon aria-hidden="true" className="w-6 h-6 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*contenedor  */}
     <Transition
     show={openTransaction && openFilter}
     >
     <DateSearch endDate={setendDate} startDate={setstartDate} restValue={showNoDateFilter} onReset={()=>handleReset()}/>
     </Transition>
          <Transition
            show={openTransaction && openFilter}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <SearchForm
              resPage={setpagination}
              resStart={setStart}
              resLimit={setLimit}
              formvalue={setSearchValue}
              noDateFilter={setShowNoDateFilter}
              dataOrder={setDataOrder}
              token={keycloak.token ? keycloak.token : ""}
              stateFilter={setopenFilter}
              e2eAttr={"search-form"}
            />
          </Transition>

          <div>
            <Transition
              show={openTransaction && !isLoading}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <TableTransaction
                detailsValue={setDetailsValue}
                openTransaction={setOpenTransaction}
                order={dataOrder}
                pageState={pagination}
                page={setpagination}
                pageStart={setStart}
                pageLimit={setLimit}
                pagStart={start}
                pagLimit={limit}
                onRefresh={()=>mutate()}
                e2eAttr="table-transaction"
              />
            </Transition>

            <Transition show={isLoading}>
              <TableTransactionSkeleton e2eAttr="table-transaction" />
            </Transition>
          </div>

          <Transition
            show={!openTransaction}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >

            <Details
              token={keycloak.token ? keycloak.token : ""}
              detailsValue={{
                transactionId: detailsValue.transactionId,
                paymentGateway: detailsValue.paymentGateway,
              }}
              onClose={() => {
                setOpenTransaction(true);
              }}
              e2eAttr="details--transaction"
            />
          </Transition>
        </div>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex">
          <div className="hidden lg:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col flex-1 min-h-0 bg-gray-800">
              <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto bg-white border-r-2 border-gray-200">
                <div className="flex justify-center flex-shrink-0 px-4">
                  <img
                    className="w-auto h-10 "
                    src={imagenes["BELLAPIEL"]}
                    alt="logoBellaPiel"
                  />
                </div>
                <nav className="flex-1 px-2 mt-5 space-y-1">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      /* href={item.href} */
                      className={classNames(
                        item.current
                          ? "bg-gray-300 shodow-sm text-gray-700"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-700"
                            : "text-gray-400 group-hover:text-gray-300",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                  ))}
                </nav>
              </div>
              <div className="flex flex-shrink-0 p-4 border-t-2 border-r-2 border-gray-200 bg-white-wompi">
                <div className="flex-shrink-0 block w-full group">
                  <div
                    className="flex justify-center cursor-pointer"
                    onClick={() => handleClosedSession()}
                  >
                    <div className="mr-2">
                      <p className="text-xl font-semibold text-blue-wompi hover:text-blue-300 active:bg-gray-300 focus:ring">
                        Cerrar Sesión
                      </p>
                    </div>
                    <div>
                      <LogoutIcon
                        aria-hidden="true"
                        className="w-6 h-6 mt-1 hover:bg-gray-300 active:bg-gray-300 focus:ring"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col flex-1 hidden lg:flex lg:pl-64 ">
            {/*  <div className="fixed z-50 flex justify-center h-8 bg-gray-400 lg:w-4/5">
            <span className="inline-block w-1/2 px-8 ml-auto mr-auto font-semibold text-white ">
              Sucursal calle 9 #18-40 Simon Bolivar
            </span>
          </div> */}

            <main className="flex-1  ">
              <div className="relative py-4 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:mx-auto lg:px-4">
                  {/* Reemplazar aca los componenetes par rendizar en el home*/}
                  <div >
                    <div className="flex flex-col">

                    <div className="z-10">
                      <Transition
                        show={openTransaction}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <div className="px-4 mt-4">
                          <div className="w-full  texte-center">
                            <h1 className="left-0 text-2xl font-semibold text-gray-900 h-14">
                              Transacciones
                            </h1>
                          </div>
                          <div className="flex flex-row justify-between items-center">
                          <DateSearch endDate={setendDate} startDate={setstartDate} restValue={showNoDateFilter} onReset={()=>handleReset()}/>
                          <div
                            className={
                              openFilter
                                ? "hidden"
                                : "sm:flex sm:flex-row sm:justify-center py-1 content-center flex-4 hover:bg-gray-300 border border-solid px-2 rounded-xl cursor-pointer md:w-28 md:h-8"
                            }
                            onClick={() => setopenFilter(true)}
                          >
                            <FilterIcon
                              className="w-6 h-6 text-lg"
                              aria-hidden="true"
                            />
                            <span className="font-bold text-gray-700 text-md">
                              Filtros
                            </span>
                          </div>
                          </div>
                        </div>
                      </Transition>
                      </div>
                 
                      <Transition
                        show={openTransaction && openFilter}
                        enter="transition ease-out duration-150"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <SearchForm
                          resPage={setpagination}
                          resStart={setStart}
                          resLimit={setLimit}
                          formvalue={setSearchValue}
                          noDateFilter={setShowNoDateFilter}
                          dataOrder={setDataOrder}
                          token={keycloak.token ? keycloak.token : ""}
                          stateFilter={setopenFilter}
                          e2eAttr={"search-form"}
                        />
                      </Transition>

                      <div>
                        <Transition
                          show={openTransaction && !isLoading && !isError}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <TableTransaction
                            detailsValue={setDetailsValue}
                            openTransaction={setOpenTransaction}
                            order={dataOrder}
                            pageState={pagination}
                            page={setpagination}
                            pageStart={setStart}
                            pageLimit={setLimit}
                            pagStart={start}
                            pagLimit={limit}
                            onRefresh={()=>mutate()}
                            e2eAttr="table-transaction"
                          />
                        </Transition>
                        <Transition show={isLoading}>
                          <TableTransactionSkeleton e2eAttr="table-transaction-skeleton" />
                        </Transition>
                      </div>
                      <Transition
                        show={!openTransaction}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >

                        <Details
                          token={keycloak.token ? keycloak.token : ""}
                          detailsValue={{
                            transactionId: detailsValue.transactionId,
                            paymentGateway: detailsValue.paymentGateway,
                          }}
                          onClose={() => {
                            setOpenTransaction(true);
                          }}
                          e2eAttr="details--transaction"

                        />
                      </Transition>

                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

      {(isError?.status === 100 && !isLoading) ?

     
          <Modal
          open={!isLoading && isError?.status === 100}
          backdropClose={true}
          onClose={() => {
            console.warn('clicked for closed');
          }}
          style={{
            container:
              'inline-block align-bottom bg-gray-50 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6',
            opacity:
              'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity',
          }}
          e2eAttr="modal-server-down"
        >
          <ServerDown />
        </Modal> 
      :
      <Modal
      open={showNoDateFilter && !isError}
      backdropClose={true}
      onClose={() => {
        setShowNoDateFilter(false);
      }}
      style={{
        container:
          "z-50 inline-block overflow-hidden px-4 pt-5 pb-4 text-left align-bottom bg-gray-50 rounded-lg shadow-xl transition-all transform sm:p-6 sm:my-8 sm:w-full sm:max-w-lg sm:align-middle",
        opacity:
          " fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
      }}
    >
      <OrderNotFound
        onClick={() => {
          setShowNoDateFilter(false);
          setremoveSearch(true);
        }}
        button={{
          className:
            "bg-blue-400 inline-flex justify-center py-2 px-4 w-full text-base font-medium text-white bg-pantone-blue-100 hover:bg-pantone-blue-300 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm sm:text-sm",
        }}
      />
    </Modal>
      }

       

   
      </div>
    </>
  );
};
