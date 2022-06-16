import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { ChangeEvent } from "react";

/* eslint-disable-next-line */
export interface InputBasicProps {
  metadata: {
    type: string;
    name: string;
    id: string;
    className: string;
    placeholder?: string;
    autoComplete?: string;
    checked?: boolean;
    disabled?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?: (e: ChangeEvent<any>) => void;
    value?: string | number;
  };
  label: {
    text: string;
    className: string;
  };
  children?: React.ReactNode;
  touched?: boolean;
}

export function InputBasic(props: InputBasicProps) {
  return (
    <div>
      {props.label.text.length !== 0 && (
        <label htmlFor={props.metadata.name} className={props.label.className}>
          {props.label.text}
        </label>
      )}
      <div className="relative mt-1">
        <input {...props.metadata} className={props.metadata.className} />
        {props.children}
      </div>
    </div>
  );
}

export default InputBasic;
