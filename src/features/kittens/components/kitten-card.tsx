import Image from 'next/image'

import {
    FemaleIcon,
    MaleIcon,
    OldIcon,
    PersonalityIcon,
    RaceIcon
} from '@/assets/icons'

import { KittenCardAttribute } from './kitten-card-attribute'
import { KittenCardProps } from '../types/kitten-card'

export function KittenCard({
    name,
    old,
    race,
    personality,
    description,
    genre,
}: KittenCardProps) {
    return (
        <div className="
            bg-primary-300 shadow-block shadow-primary-400 p-4 rounded-lg flex flex-col gap-5
            min-[425px]:grid
            min-[425px]:grid-cols-[140px_auto]
            min-[425px]:grid-rows-[auto_auto]
            md:grid-cols-[auto_auto]
        ">
            <Image
                src={`/kittens/${name.toLowerCase()}.jpg`}
                width={160}
                height={160}
                className="
                    w-full
                    md:max-h-64
                    rounded-2xl border-4 border-primary-400 md:row-span-2
                "
                alt={name}
                unoptimized
            />

            <div className='h-full w-full flex flex-col md:justify-end gap-4 md:flex-row md:h-fit'>
                <KittenCardAttribute
                    icon={genre === 0 ? MaleIcon : FemaleIcon}
                    label={genre === 0 ? 'Mâle' : 'Femelle'}
                />

                <KittenCardAttribute
                    icon={RaceIcon}
                    label={race}
                />

                <KittenCardAttribute
                    icon={OldIcon}
                    label={old % 1 ? `${Math.floor(old * 12)} mois` : `${old} ans`}
                />

                <KittenCardAttribute
                    icon={PersonalityIcon}
                    label={personality}
                />
            </div>

            <div className="h-fit bg-primary-200 p-4 rounded-2xl border-4 border-primary-400 min-[425px]:col-span-2 md:col-span-1 w-full">
                <h3 className="uppercase font-semibold text-2xl text-primary-900">{name}</h3>
                <p className="text-primary-600 mt-2">{description}</p>
            </div>
        </div>
    );
}