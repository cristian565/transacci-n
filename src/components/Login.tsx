import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoBellaPiel from "../assets/logo-BellaPiel.svg";
import { imagenes } from "../assets/imagenes";
import { useFormik } from "formik";
import InputBasic from "./InputBasic";
import { accesUserLogin } from "../hooks/accesUserLogin";

export const Login = () => {
  const [valuesFormt, setValuesFormt] = useState({user:"",
  password:"",})
  /*const navegate = useNavigate();
   const handleLogin = () => {
    navegate("/Home", {
      replace: true,
    });
  }; */

  const searchForm = useFormik({
    initialValues: {
      user:"",
      password:"",
    },
    validateOnChange: true,
    validateOnMount: false,

    onSubmit: (values) => {
     setValuesFormt(values)
    },
  });

  useEffect(() => {
    console.warn(accesUserLogin(valuesFormt.user,valuesFormt.password))
  }, [valuesFormt])
  
  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="h-3/4  border-r-2 order-last items-start border-gray-200 flex-1 flex flex-col justify-start  lg:h-full lg:justify-center xl:w-5/12 lg:py-12 px-4 sm:px-6 lg:order-none lg:flex-none lg:px-16 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl text-center font-extrabold text-blue-wompi">
                Inicia sesión en su cuenta
              </h2>
            </div>

            <div className="mt-3 lg:mt-8 bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow-xl">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6"
                onSubmit={searchForm.handleSubmit}>
                  <div>
                  <InputBasic
                metadata={{
                  type: "text",
                  name: "user",
                  id: "user",
                  className:
                    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                  placeholder: "Juan121",
                  onChange: (e) => {
                    searchForm.setFieldTouched("user");
                    searchForm.handleChange(e);
                  },
                  value: searchForm.values.user,
                }}
                label={{
                  text: "Usuario",
                  className:
                    "block text-sm font-medium text-gray-700 capitalize",
                }}
                touched={searchForm.touched.user}
              />
              </div>
                  
                  <div>
                  <InputBasic
                metadata={{
                  type: "password",
                  name: "password",
                  id: "password",
                  className:
                    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                  placeholder: "******",
                  onChange: (e) => {
                    searchForm.setFieldTouched("password");
                    searchForm.handleChange(e);
                  },
                  value: searchForm.values.password,
                }}
                label={{
                  text: "Contraseña",
                  className:
                    "block text-sm font-medium text-gray-700 capitalize",
                }}
                touched={searchForm.touched.user}
              />
              </div>

                  <div>
                    <button
                      /* onClick={handleLogin} */
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="h-1/4 w-full flex fle-col justify-center sm:h-1/3 lg:h-full bg-white-wompi">
          <img
            className="h-full w-4/5 bg-white-wompi"
            src={imagenes["BELLAPIEL"]}
            alt="logoBellaPiel"
          />
        </div>
      </div>
    </>
  );
};
