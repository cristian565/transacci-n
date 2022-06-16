import { ChangeEvent } from "react";

export interface SelectData {
  id: number | string;
  text: string;
  disabled: boolean;
  hidden?: boolean;
}

/* eslint-disable-next-line */
export interface SelectProps {
  metadata: {
    name: string;
    id: string;
    className: string;
    disabled: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
    defaultValue?: number | string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?: (e: ChangeEvent<any>) => void;
  };
  data: SelectData[];
  label: {
    text: string;
    className: string;
  };
  touched?: boolean;
}

export function Select(props: SelectProps) {
  return (
    <>
      {props.label.text.length !== 0 && (
        <label htmlFor={props.metadata.name} className={props.label.className}>
          {props.label.text}
        </label>
      )}
      <select {...props.metadata} className={props.metadata.className}>
        {props.data.map((item) => (
          <option
            key={item.id}
            value={item.id}
            disabled={item.disabled}
            hidden={item.hidden}
          >
            {item.text}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
