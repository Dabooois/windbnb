import { useParams } from '@/hooks/useParams';
import Card from './Card';
import { DATA } from '@/libs/constant';
import { useMemo } from 'react';

export default function Content() {
    const { location, guest } = useParams();

    const { totalStay, result } = useMemo(() => {
        const splittedResult = location.split(', ').filter((el) => el !== '');
        const numberOfGuests = Object.values(guest).reduce((prev, current) => {
            return (prev += Number(current));
        }, 0);

        if (splittedResult.length > 0 || numberOfGuests > 0) {
            const result = DATA.filter((el) => {
                if (numberOfGuests > 0) {
                    return el.maxGuests >= numberOfGuests;
                }

                if (numberOfGuests > 0 && splittedResult.length > 0) {
                    return (
                        el.maxGuests >= numberOfGuests &&
                        splittedResult.includes(el.city) &&
                        splittedResult.includes(el.country)
                    );
                }
                if (splittedResult.length > 0) {
                    return (
                        splittedResult.includes(el.city) &&
                        splittedResult.includes(el.country)
                    );
                }
            });

            return {
                totalStay: result.length,
                result: result,
            };
        }

        return {
            totalStay: DATA.length,
            result: DATA,
        };
    }, [location, guest]);

    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='font-montserrat font-bold leading-normal text-neutral-900'>
                    {location === '' ? 'All location' : location}
                </h1>
                {totalStay > 1 && (
                    <p className='text-neutral-600  text-14 font-[500]'>
                        {totalStay} {totalStay > 1 ? `+Stays` : `Stay`}
                    </p>
                )}
            </div>
            {result.length === 0 && <p className='text-center'>No Result</p>}

            {result.length > 0 && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 '>
                    {result.map(
                        ({ photo, type, title, rating, superHost }, key) => (
                            <Card
                                superHost={superHost}
                                src={photo}
                                type={type}
                                title={title}
                                rating={rating}
                                key={key}
                            />
                        )
                    )}
                </div>
            )}
        </>
    );
}
