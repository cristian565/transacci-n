import { Dialog, Transition } from "@headlessui/react";
import { Fragment, MutableRefObject, useEffect, useState } from "react";

/* eslint-disable-next-line */
export interface ModalProps {
  open: boolean;
  backdropClose?: boolean;
  children?: React.ReactNode;
  initialFocus?: MutableRefObject<null>;
  style: {
    opacity: string;
    container: string;
  };
  onClose: () => void;
}

export function Modal(props: ModalProps) {
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <Transition show={open}>
      <Dialog
        initialFocus={props.initialFocus}
        as="div"
        className="overflow-y-auto fixed inset-0 z-10"
        onClose={() => {
          if (!props.backdropClose) {
            setOpen(false);
            props.onClose();
          }
        }}
      >
        <div className="flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0">
          <Dialog.Overlay className={props.style.opacity} />

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className={props.style.container}>{props.children}</div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
