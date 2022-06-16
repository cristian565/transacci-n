import React from "react";
import {
  CheckIcon,
  ExclamationIcon,
  DocumentSearchIcon,
} from "@heroicons/react/outline";

export interface NoDateProps {
  onClick: () => void;
  metadata: {
    button: string;
  };
}

export const NoDate = (props: NoDateProps) => {
  return (
    <div className="p-5 max-w-md bg-gray-50">
      <div>
        <div className="flex justify-center items-center mx-auto w-12 h-12 bg-red-100 rounded-full">
          <DocumentSearchIcon
            className="w-6 h-6 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            No se encontro coincidencias
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">Intenta nuevamente</p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className={props.metadata.button}
          onClick={props.onClick}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
