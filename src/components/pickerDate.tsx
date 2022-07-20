import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale('es', es);


export interface PickerDateProps {
  metadata: {
    className: string;
    name: string;
    id: string;
    value?: Date | null;
    locale: string;
    showDisabledMonthNavigation: boolean;
    dateFormat: string;
    placeholderText: string;
    maxDate?:Date,
    onChange?: (date: Date | null) => void;
  };
  touched?: boolean;
  error?: string | Date;
  e2eAttr?: string;
}

export function PickerDate(props: PickerDateProps) {
  return (
    <div>
      
      <div className="relative mt-1">
        <DatePicker
          selected={props.metadata.value}
          onChange={(e) => {
            if (props.metadata.onChange) {
              props.metadata.onChange(e);
            }
          }}
          locale={props.metadata.locale}
          dateFormat={props.metadata.dateFormat}
          showDisabledMonthNavigation
          maxDate={props.metadata?.maxDate}
          className={
            props.touched && props.error
              ? 'shadow-sm z-50 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm rounded-md'
              : props.metadata.className
          }
          name={props.metadata.name}
          id={props.metadata.id}
          placeholderText={props.metadata.placeholderText}
        />
      </div>
    </div>
  );
}

export default PickerDate;
