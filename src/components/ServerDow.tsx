import { ExclamationCircleIcon } from "@heroicons/react/outline";

/* eslint-disable-next-line */
export interface ServerDownProps {}

export function ServerDown(props: ServerDownProps) {
  return (
    <div className="tw-p-5 tw-max-w-md tw-bg-gray-50">
      <div>
        <div className="tw-flex tw-justify-center tw-items-center tw-mx-auto tw-w-12 tw-h-12 tw-bg-red-100 tw-rounded-full">
          <ExclamationCircleIcon
            className="tw-w-6 tw-h-6 tw-text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="tw-mt-3 tw-text-center sm:tw-mt-5">
          <h3 className="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900">
            El servidor no responde correctamente.
          </h3>
          <div className="tw-mt-2">
            <p className="tw-text-sm tw-text-gray-500">
              Nuestros servidores parecen estar caídos en este momento y no
              hemos podido obtener los datos. Lo sentimos y estamos intentando
              resolver este problema lo antes posible. Por favor, inténtelo de
              nuevo más tarde
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerDown;
