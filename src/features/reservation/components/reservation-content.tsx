import { ChangeEvent, useEffect, useMemo, useState } from 'react'

import { ReservationForm } from './reservation-form'
import { ReservationHeader } from './reservation-header'
import { ReservationSlots } from './reservation-slots'

import { generateTimeSlots, ISOToShortDate } from '../utils'
import { ButtonTimeSlotProps } from './button-time-slot'
import Image from 'next/image'

export function ReservationContent() {
    const nowDate = new Date();
    const nowShortDate = ISOToShortDate(nowDate);

    const [queryDay, setQueryDay] = useState(nowDate);
    const [queryTimeSlot, setQueryTimeslot] = useState<ButtonTimeSlotProps | null>(null);

    const slots = useMemo(() => {
        return generateTimeSlots(queryDay)
    }, [queryDay]);

    useEffect(() => {
        if (queryTimeSlot?.disabled) {
            setQueryTimeslot(null);
        }
    }, [slots]);

    const handleDatePicked = (e: ChangeEvent<HTMLInputElement>) => {
        setQueryDay(() => new Date(e.target.value));
    };

    return (
        <div className='flex flex-col gap-4'>
            <ReservationHeader
                queryDay={queryDay}
                nowShortDate={nowShortDate}
                onDateChange={handleDatePicked}
            />

            <div className='flex flex-col justify-center gap-4 md:flex-row *:flex-1'>
                {slots.every((s) => s.isTaken) ? (
                    <div className='max-w-4xl flex flex-col items-center gap-3 py-8 px-2 bg-primary-300 shadow-block shadow-primary-400 rounded'>
                        <Image
                            src={process.env.NODE_ENV === 'production' ? '/minim-ow-bar/cat.svg' : '/cat.svg'}
                            alt='lucky cat'
                            width={256}
                            height={256}
                        />
                        <p className='text-red-600 font-medium text-center'>
                            Tous les créneaux sont complets pour aujourd’hui.<br />
                            Essayez un autre jour !
                        </p>
                    </div>
                ) : (
                    <>
                        <ReservationSlots
                            slots={slots}
                            queryTimeSlot={queryTimeSlot}
                            setQueryTimeSlot={setQueryTimeslot}
                        />

                        <ReservationForm queryTimeSlot={queryTimeSlot} />
                    </>
                )}
            </div>
        </div>
    );
}
