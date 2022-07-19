import React from "react";
import { imagenes } from "../assets/imagenes";
import { useCallback } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

export interface LoginProps {
  e2eAttr?: string;
}

export const Login = (props: LoginProps) => {
  const location = useLocation<{ [key: string]: unknown }>()
  const currentLocationState = location.state || {
    from: { pathname: '/home' },
  }

  const { keycloak } = useKeycloak()

  const login = useCallback(() => {
    keycloak?.login()
  }, [keycloak])

  if (keycloak?.authenticated)
    return <Redirect to={currentLocationState?.from as string} />


  return (
    <>
      <div className="h-screen flex flex-col justify-center">

        <div className=" flex justify-center">
          <img
            className="h-full w-1/2 bg-white-wompi"
            src={imagenes["BELLAPIEL"]}
            alt="logoBellaPiel"
          />
        </div>

        <h2 className="mt-6 text-3xl text-center font-extrabold text-blue-wompi">
          Bienvenido al modulo de transacciones
        </h2>
        <button
          type="button"
          className="mx-auto py-2 px-4 mt-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          data-cy={"login-send__button-normal"}
          onClick={login}
        >
          Iniciar sesión
        </button>
      </div>

    </>
  );
};
