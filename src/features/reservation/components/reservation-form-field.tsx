import { ReactNode } from 'react'

interface ReservationFormFieldProps {
    label: string;
    children: ReactNode;
}

export function ReservationFormField({ label, children }: ReservationFormFieldProps) {
    return (
        <label className='flex flex-col gap-1 flex-1'>
            <span className='uppercase text-sm font-semibold text-primary-800'>
                {label}
            </span>
            {children}
        </label>
    );
}
