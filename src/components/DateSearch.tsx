import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import PickerDate from './pickerDate';
import { useFormik } from "formik";
import {
    XCircleIcon
} from "@heroicons/react/outline";

export interface DateSearchProps {
    startDate: Dispatch<SetStateAction<string>>;
    endDate: Dispatch<SetStateAction<string>>;
    onReset: () => void
    restValue: boolean;
}

export const DateSearch = (props: DateSearchProps) => {

    const [oneDate, setoneDate] = useState("")
    const [twoDate, settwoDate] = useState("")


    const searchForm = useFormik({
        initialValues: {
            initDate: new Date().toISOString().split('T')[0],
            endDate: new Date().toDateString(),
        },
        validateOnChange: true,
        validateOnMount: false,

        onSubmit: (values) => {
        },
    });



    useEffect(() => {
        if (props.restValue) {
            searchForm.resetForm();
            const a = new Date()
            props.startDate("")
            props.endDate("")
        }

    }, [props.restValue])



    const handleDate = (date: any, value: string) => {
        const a = new Date(date)
        if (value === "start") {
            setoneDate(a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, '0') + "-" + String(a.getDate()).padStart(2, '0'))
        } else {
            settwoDate(a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, '0') + "-" + String(a.getDate()).padStart(2, '0'))
        }

    }

    useEffect(() => {
        if (oneDate !== "" && twoDate !== "") {
            props.startDate(oneDate)
            props.endDate(twoDate)
        }
    }, [twoDate]);

    const handleReset = () => {
        searchForm.resetForm();
        props.startDate("")
        props.endDate("")
    }


    return (
        <>
            <div className='flex flex-col w-full px-6 mt-2 lg:mt-0 lg:px-0'>
                <span className='font-extrabold text-blue-wompi'>Escoge las fechas para las que quieres ver transacciones</span>
                <div className=' flex flex-row w-4/6 sm:w-3/6 sm:px-4  tm:pr-6 lg:pr-0 md:px-0 md:w-3/6  lg:w-2/4 h-10 mt-2 mb-2 items-center justify-between lg:bg-gray-50 '>
                    <div className='w-2/5 sm:w-2/6 lg:w-2/5'>
                        <PickerDate metadata={{
                            className:
                                'block py-2 text-center w-full rounded border border-gray-400 focus:border-blue-500 focus:ring-blue-500 shadow-sm sm:text-sm',
                            name: 'initDate',
                            id: 'initDate',
                            value: new Date(searchForm.values.initDate),
                            onChange: (data) => {
                                searchForm.setFieldTouched('initDate');
                                searchForm.setFieldValue('initDate', data);
                                handleDate(data, "start")
                            },
                            locale: 'es',
                            dateFormat: 'dd-MM-yyyy',
                            showDisabledMonthNavigation: true,
                            placeholderText: 'DD/MM/YY',
                            maxDate: new Date(),
                        }}
                            touched={searchForm.touched.initDate}
                            e2eAttr="picker-date-shippingDate" />
                    </div>

                    <span className='text-lg text-semibold'>a</span>

                    <div className='w-2/5  sm:w-2/6 lg:w-2/5'>
                        <PickerDate metadata={{
                            className:
                                'block py-2 text-center px-auto w-full rounded border border-gray-400 focus:border-blue-500 focus:ring-blue-500 shadow-sm sm:text-sm',
                            name: 'endDate',
                            id: 'endDate',
                            value: new Date(searchForm.values.endDate),
                            onChange: (data) => {
                                searchForm.setFieldTouched('endDate');
                                searchForm.setFieldValue('endDate', data);
                                handleDate(data, "end")
                            },
                            locale: 'es',
                            dateFormat: 'dd-MM-yyyy',
                            showDisabledMonthNavigation: true,
                            placeholderText: 'DD/MM/YY',
                            maxDate: new Date(),
                        }}
                            touched={searchForm.touched.endDate}
                            e2eAttr="picker-date-shippingDate" />
                    </div>

                    <div onClick={() => {
                        handleReset()
                        props.onReset()
                    }}>
                        <XCircleIcon aria-hidden="true" className="w-5 h-5 cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    )
}
