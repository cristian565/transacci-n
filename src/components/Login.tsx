import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { imagenes } from "../assets/imagenes";
import { useFormik } from "formik";
import InputBasic from "./InputBasic";
import { accesUserLogin } from "../hooks/accesUserLogin";
import Modal from "./Modal";
import { UserAccesError } from "./UserAccesError";


export interface LoginProps {
  accesUser: Dispatch<SetStateAction<boolean>>;
  e2eAttr?: string;
}

export const Login = (props: LoginProps) => {
  const [valuesFormt, setValuesFormt] = useState({ user: "", password: "" });
  const [showErrorAcces, setShowErrorAcces] = useState<boolean>(false);
  const [showLoadingButton, setShowLoadingButtons] = useState<boolean>(true);

  /*const navegate = useNavigate();
   const handleLogin = () => {
    navegate("/Home", {
      replace: true,
    });
  }; */

  const searchForm = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validateOnChange: true,
    validateOnMount: false,

    onSubmit: (values) => {
      setValuesFormt(values);
    },
  });

  useEffect(() => {
    accesUserLogin(valuesFormt.user, valuesFormt.password)
      ? props.accesUser(true)
      : setShowErrorAcces(true);
  }, [valuesFormt]);

  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row"
      data-cy={`login`}>
        <div className="h-3/4  border-r-2 order-last items-start border-gray-200 flex-1 flex flex-col justify-start  lg:h-full lg:justify-center xl:w-5/12 lg:py-12 px-4 sm:px-6 lg:order-none lg:flex-none lg:px-16 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl text-center font-extrabold text-blue-wompi">
                Inicia sesión en su cuenta
              </h2>
            </div>

            <div className="mt-3 lg:mt-8 bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow-xl">
              <div className="mt-6">
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={searchForm.handleSubmit}
                >
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
                      e2eAttr={"login-input_user"}
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
                      e2eAttr={"login-input_password"}
                    />
                  </div>

                  <div>
                    <button
                      /* onClick={handleLogin} */
                      type="submit"
                      className="w-full justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      data-cy={`login-send__button-normal`}
                    >
                      Iniciar sesión
                    </button>
                    {/* <Transition show={showLoadingButton}>
                      <button
                        disabled={true}
                        type="submit"
                        className="inline-flex justify-center py-2 px-10 w-full text-sm font-medium text-white rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm sm:px-10 bg-indigo-600 hover:bg-indigo-700"
                      >
                        <svg
                          className="mr-3 -ml-1 w-5 h-5 text-white animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Procesando...</span>
                      </button>
                    </Transition> */}
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
        <Modal
          open={showErrorAcces}
          backdropClose={true}
          onClose={() => {
            setShowErrorAcces(false);
          }}
          style={{
            container:
              "inline-block overflow-hidden px-4 pt-5 pb-4 text-left align-bottom bg-gray-50 rounded-lg shadow-xl transition-all transform sm:p-6 sm:my-8 sm:w-full sm:max-w-lg sm:align-middle",
            opacity:
              "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
          }}
        >
          <UserAccesError
            onClick={() => {
              setShowErrorAcces(false);
            }}
            button={{
              className:
                "bg-blue-400 inline-flex justify-center py-2 px-4 w-full text-base font-medium text-white bg-pantone-blue-100 hover:bg-pantone-blue-300 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm sm:text-sm",
            }}
          />
        </Modal>
      </div>
    </>
  );
};
