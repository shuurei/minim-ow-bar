import { useState } from 'react'
import { TbArrowBadgeRightFilled } from 'react-icons/tb'

import { DropdownProps } from '../types/dropdown'

export function Dropdown({ label, content }: DropdownProps) {
    const [isDropped, setIsDropped] = useState(false)

    const toggleDroppedState = () => {
        return setIsDropped((p) => !p);
    }

    return (
        <div
            onClick={toggleDroppedState}
            className='p-2 bg-primary-300 shadow-block shadow-primary-400 cursor-pointer'
        >
            <div className='flex items-center gap-1'>
                <TbArrowBadgeRightFilled className={`min-w-6 min-h-6 text-primary-900 transition-all duration-200 ${isDropped ? 'rotate-90' : ''}`} />
                <span className='font-bold text-primary-900'>{label}</span>
            </div>
            <div className={`overflow-hidden transition-all duration-200 ${isDropped ? 'max-h-96' : 'max-h-0'}`}>
                <p className='pl-2 text-sm font-semibold pt-1 text-primary-800 border-t-2 border-primary-400 italic'>{content}</p>
            </div>
        </div>
    )
}