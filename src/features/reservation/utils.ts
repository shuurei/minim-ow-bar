export function ISOToShortDate(date: Date | string): string {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    
    return date.toISOString().split('T')[0];
}

export function generateTimeSlots(queryDay: Date) {
    const START_HOUR = 12;
    const END_HOUR = 19;
    const SLOT_COUNT = (END_HOUR - START_HOUR) * 2;

    const now = new Date();

    return Array.from({ length: SLOT_COUNT }, (_, i) => {
        const hour = START_HOUR + i / 2;
        const minutes = (hour % 1) * 60;
        
        const slotDate = new Date(queryDay);
        slotDate.setHours(Math.floor(hour), minutes, 0, 0);

        const isInPast = (slotDate.getTime() - now.getTime()) / (1000 * 60 * 60) < 0;

        const randomTaken = queryDay.getFullYear() === now.getFullYear()
                ? Math.abs(
                    Math.cos(
                        new Date(ISOToShortDate(queryDay)).getTime() + hour
                    )
                ) < 0.6
                : false;

        return {
            label: `${Math.floor(hour)}h${minutes === 0 ? '00' : '30'}`,
            isTaken: randomTaken ?? isInPast,
        };
    });
}