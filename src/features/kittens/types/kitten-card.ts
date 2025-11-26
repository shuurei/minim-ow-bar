import { StaticImageData } from 'next/image'
import { KittenData } from './kitten-data'

export type KittenCardProps = KittenData;

export interface KittenCardAttributeProps {
    icon: StaticImageData;
    label: string;
}