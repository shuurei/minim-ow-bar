import { InputHTMLAttributes, ChangeEvent } from 'react'

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
    onSelected?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function DatePicker({
    id,
    name,
    min,
    value,
    onSelected
}: DatePickerProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (
            e.target.value.length < 10
            && typeof min === 'string'
        ) {
            e.target.value = min;
        };

        if ([6, 0].includes(new Date(e.target.value).getUTCDay())) {
            e.target.setCustomValidity('Nous sommes pas disponible le week-end.');
            return e.target.reportValidity();
        };

        return onSelected?.(e);
    };

    return (
        <input
            type='date'
            id={id}
            name={name}
            min={min}
            value={value}
            onChange={handleChange}
            onKeyDown={(e) => e.preventDefault()}
            className='w-full font-semibold bg-primary-100 shadow-block shadow-primary-400 border-2 text-primary-800 border-primary-400 px-3 py-1.5 rounded'
        />
    );
}
