import { Dialog } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

/* eslint-disable-next-line */
export interface OrderNotFoundProps {
  onClick: () => void;
  button: {
    className: string;
  };
  e2eAttr?: string;
}

export function OrderNotFound(props: OrderNotFoundProps) {
  return (
    <div className="p-5 max-w-md bg-gray-50">
      <div>
        <div className="flex justify-center items-center mx-auto w-12 h-12 bg-yellow-100 rounded-full">
          <ExclamationCircleIcon
            className="w-6 h-6 text-yellow-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Transaccion no existen o no pudo ser encontrada
          </Dialog.Title>
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

export default OrderNotFound;
