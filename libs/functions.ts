import { GuestList } from '@/components/AcviteSearch';

export const encodeValue = (value: string): string => {
    return btoa(value);
};

export const decodeValue = (value: string) => {
    return atob(value);
};

export const toWordGuest = (value: GuestList): string => {
    const data = Object.values(value)
        .filter((el) => el !== 0)
        .map((el, key) => `${el} ${Object.keys(value)[key]}`)
        .join(' and ');

    return data;
};
