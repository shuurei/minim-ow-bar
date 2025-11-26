import Image from 'next/image'
import React from 'react'

import KittenPaw from '../assets/kitten-paw.png'

export interface ButtonTimeSlotProps {
    label: string;
    value: string;
    checked: boolean;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ButtonTimeslot({
    label,
    value,
    checked,
    disabled = true,
    onChange,
}: ButtonTimeSlotProps) {
    return (
        <label
            className={`
                w-full max-w-28 text-center select-none px-4 py-2 rounded border-2 text-sm uppercase font-semibold
                transition-all duration-150
                ${disabled ? 'bg-primary-400 cursor-not-allowed text-primary-800/80' : 'cursor-pointer hover:bg-primary-300'}
                ${checked ? 'bg-primary-700 border-primary-700 text-white' : 'bg-primary-100 border-primary-400 text-primary-800'}
            `}
        >
            <div className='flex items-center justify-center'>
                <input
                    type='radio'
                    className='hidden'
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                />
                {disabled
                    ? (
                        <Image
                            src={KittenPaw}
                            width={24}
                            height={24}
                            alt={label}
                            className='rotate-45'
                        />
                    )
                    : (<span>{label}</span>)
                }
            </div>
        </label>
    );
}
