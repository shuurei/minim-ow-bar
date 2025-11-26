import Link from 'next/link'
import { SectionCardProps } from '../types/section-card'

export function SectionCard({ title, description, href, cta }: SectionCardProps) {
    const paragraphs = Array.isArray(description) ? description : [description];
    const ctaClass = 'w-fit font-bold text-primary-900 bg-primary-100 border-2 border-primary-900 px-3 py-2 hover:text-primary-100 hover:bg-primary-900 duration-300 uppercase';

    return (
        <div className='bg-primary-300 p-4 flex flex-col gap-3 shadow-block shadow-primary-400 rounded-lg'>
            <hgroup className='flex flex-col gap-1'>
                <h3 className='text-primary-900 uppercase font-extrabold'>{title}</h3>
                {paragraphs.map((p, i) => (
                    <p key={i} className='text-primary-800 pl-2 border-l-3 border-l-primary-400'>{p}</p>
                ))}
            </hgroup>

            {href && cta && (
                <Link href={href} className={ctaClass}>{cta}</Link>
            )}
        </div>
    );
}
