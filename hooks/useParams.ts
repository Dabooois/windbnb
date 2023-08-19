import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export const useParams = () => {
    const searchParams = useSearchParams();
    const paramCountry = searchParams.get('location');
    const paramChildren = searchParams.get('children') || '';
    const paramAdult = searchParams.get('adult') || '';

    const { location, guest } = useMemo(() => {
        const value = {
            [Number(paramAdult) > 1 ? 'adults' : 'adult']: paramAdult,
            [Number(paramChildren) > 1 ? 'childrens' : 'children']:
                paramChildren,
        };

        const data = Object.values(value)
            .filter((el) => el !== '')
            .map((el, key) => `${el} ${Object.keys(value)[key]}`)
            .join(' and ');

        return {
            location: paramCountry || '',
            guest: data,
        };
    }, [paramCountry, paramChildren, paramAdult]);

    return {
        location,
        guest,
    };
};
