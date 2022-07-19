import { ExclamationCircleIcon } from "@heroicons/react/outline";

export interface ServerDownProps {}

export function ServerDown(props: ServerDownProps) {
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
            El servidor no responde correctamente.
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
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
