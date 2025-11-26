import { ChangeEvent } from 'react'

import { ISOToShortDate } from '../utils'
import { DatePicker } from './data-picker'

interface ReservationHeaderProps {
    queryDay: Date;
    nowShortDate: string;
    onDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function ReservationHeader({ queryDay, nowShortDate, onDateChange }: ReservationHeaderProps) {
    const dateFormmated = new Date(queryDay).toLocaleString('fr', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className='flex flex-wrap items-center justify-between gap-2'>
            <div className='w-full min-[551px]:max-w-48'>
                <DatePicker
                    id='datePicker'
                    name='datePicker'
                    min={nowShortDate}
                    value={ISOToShortDate(queryDay)}
                    onSelected={onDateChange}
                />
            </div>
            <h3 className='text-xl text-primary-800 font-semibold uppercase'>{dateFormmated}</h3>
        </div>
    );
}
