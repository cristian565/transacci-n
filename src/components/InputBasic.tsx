import { ChangeEvent } from "react";


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
    onChange?: (e: ChangeEvent<any>) => void;
    value?: string | number;
  };
  label: {
    text: string;
    className: string;
  };
  children?: React.ReactNode;
  touched?: boolean;
  e2eAttr?: string;
}

export function InputBasic(props: InputBasicProps) {
  return (
    <div>
      {props.label.text.length !== 0 && (
        <label htmlFor={props.metadata.name} className={props.label.className}
        data-cy={`${props.e2eAttr}--label`}>
          {props.label.text}
        </label>
      )}
      <div className="relative mt-1">
        <input {...props.metadata} className={props.metadata.className}
         data-cy={`${props.e2eAttr}--input`}
          />
        {props.children}
      </div>
    </div>
  );
}

export default InputBasic;
