import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

export interface UserAccesErrorProps {
  onClick: () => void;
  button: {
    className: string;
  };
}

export const UserAccesError = (props: UserAccesErrorProps) => {
  return (
    <div className="p-5 max-w-md bg-gray-50">
      <div>
        <div className="flex justify-center items-center mx-auto w-12 h-12 bg-red-100 rounded-full">
          <ExclamationCircleIcon
            className="w-6 h-6 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Usuario o contraseña incorrecto
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">Intenta nuevamente</p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className={props.button.className}
          onClick={props.onClick}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
