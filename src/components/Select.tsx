import { ChangeEvent } from "react";

export interface SelectData {
  id: number | string;
  text: string;
  disabled: boolean;
  hidden?: boolean;
}

export interface SelectProps {
  metadata: {
    name: string;
    id: string;
    className: string;
    disabled: boolean;
    value?: any;
    defaultValue?: number | string;
    onChange?: (e: ChangeEvent<any>) => void;
  };
  data: SelectData[];
  label: {
    text: string;
    className: string;
  };
  touched?: boolean;
  e2eAttr?: string;
}

export function Select(props: SelectProps) {
  return (
    <>
      {props.label.text.length !== 0 && (
        <label htmlFor={props.metadata.name} className={props.label.className}
          data-cy={`${props.e2eAttr}--label`}>
          {props.label.text}
        </label>
      )}
      <select {...props.metadata} className={props.metadata.className}
        data-cy={`${props.e2eAttr}--select`}>
        {props.data.map((item) => (
          <option
            key={item.id}
            value={item.id}
            disabled={item.disabled}
            hidden={item.hidden}
            data-cy={`${props.e2eAttr}--select__option`}
          >
            {item.text}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
