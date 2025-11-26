import Image from 'next/image'
import { KittenCardAttributeProps } from '../types/kitten-card'

export function KittenCardAttribute({ icon, label }: KittenCardAttributeProps) {
    return (
        <div className='text-lg whitespace-nowrap flex items-center justify-between gap-1 bg-primary-200 shadow-block shadow-primary-400 p-2 rounded'>
            <Image src={icon} width={32} height={32} alt={label} />
            <span>{label}</span>
        </div>
    );
}
