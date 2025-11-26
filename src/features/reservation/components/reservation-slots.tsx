import { Dispatch, SetStateAction } from 'react'
import { ButtonTimeslot, ButtonTimeSlotProps } from './button-time-slot'

interface ReservationSlotsProps {
    slots: ({
        label: string;
        isTaken: boolean;
    })[];
    queryTimeSlot: ButtonTimeSlotProps | null;
    setQueryTimeSlot: Dispatch<SetStateAction<ButtonTimeSlotProps | null>>;
}

export function ReservationSlots({ slots, queryTimeSlot, setQueryTimeSlot }: ReservationSlotsProps) {
    return (
        <div className='flex items-center flex-col gap-3'>
            {!queryTimeSlot && (
                <span className='text-red-600 font-medium'>
                    Veuillez choisir une horaire !
                </span>
            )}

            <div className='flex items-center justify-center flex-wrap gap-2'>
                {slots.map((slot, i: number) => (
                    <ButtonTimeslot
                        key={i}
                        label={slot.label}
                        disabled={slot.isTaken}
                        checked={queryTimeSlot?.value === slot.label}
                        onChange={(e) => setQueryTimeSlot(e.target as unknown as ButtonTimeSlotProps)}
                        value={slot.label}
                    />
                ))}
            </div>
        </div>
    );
}
