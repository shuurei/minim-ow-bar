import Image from 'next/image'

import { ReservationFormField } from './reservation-form-field'
import { ButtonTimeSlotProps } from './button-time-slot'

interface ReservationFormProps {
    queryTimeSlot: ButtonTimeSlotProps | null;
}

export function ReservationForm({ queryTimeSlot }: ReservationFormProps) {
    if (!queryTimeSlot) {
        return (
            <div className='items-center p-4 flex flex-col gap-4 bg-primary-300 shadow-block shadow-primary-400 rounded-xl border-4 border-primary-400'>
                <Image
                    src={process.env.NODE_ENV === 'production' ? '/minim-ow-bar/cat.svg' : '/cat.svg'}
                    alt='lucky cat'
                    width={128}
                    height={128}
                    className='opacity-80'
                />
                <span className='text-red-500 font-medium text-center'>
                    Veuillez d'abord sélectionner un horaire !
                </span>
            </div>
        );
    }

    return (
        <form className='p-4 flex flex-col gap-4 bg-primary-300 shadow-block shadow-primary-400 rounded-xl border-4 border-primary-400'>
            <input type='hidden' name='timeslot' value={queryTimeSlot.value} />

            <div className='flex flex-wrap gap-4 *:w-full md:*:w-auto'>
                <ReservationFormField label='Prénom'>
                    <input
                        type='text'
                        name='firstname'
                        required
                    />
                </ReservationFormField>

                <ReservationFormField label='Nom'>
                    <input type='text' name='lastname' required />
                </ReservationFormField>
            </div>

            <ReservationFormField label='E-mail'>
                <input type='email' name='email' required />
            </ReservationFormField>

            <ReservationFormField label='Mobile'>
                <input
                    type='tel'
                    name='phone'
                    pattern='(\+33[0-9]|0[0-9])(\s?|[0-9]{2})+'
                    required
                />
            </ReservationFormField>

            <ReservationFormField label='Message (optionnel)'>
                <textarea name='msg' rows={5} />
            </ReservationFormField>

            <button
                type='submit'
                className='cursor-pointer select-none text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-200 px-4 py-2 duration-75 rounded disabled:bg-primary-900 disabled:text-white/80 disabled:cursor-not-allowed'
            >
                Confirmer la réservation
            </button>
        </form>
    );
}
