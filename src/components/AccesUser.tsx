import React from 'react'
import { Dialog } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

export interface AccesUserProps {
    onClick: () => void;
    button: {
      className: string;
    };
    e2eAttr?: string;
  }


export const AccesUser = (props:AccesUserProps) => {
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
            Usuario no está relacionado a un Store en BizzHub
            </h3>
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
  }
  
