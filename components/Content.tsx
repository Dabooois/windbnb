import React, { useMemo } from 'react';
import Card from './Card';
import { DATA } from '@/libs/constant';
import { useParams } from '@/hooks/useParams';

export default function Content() {
    const { location, guest } = useParams();
    const { totalStay, numberOfGuests } = useMemo(() => {
        if (location) {
            const splittedResult = location.split(', ');

            const splittedGuest = guest
                .split(' ')
                .filter((el) => !isNaN(Number(el)));

            const numberOfGuests = splittedGuest.reduce((prev, current) => {
                return (prev += Number(current));
            }, 0);

            const result = DATA.filter((el) => {
                if (numberOfGuests > 0) {
                    return (
                        el.maxGuests >= numberOfGuests &&
                        splittedResult.includes(el.city) &&
                        splittedResult.includes(el.country)
                    );
                } else {
                    return (
                        splittedResult.includes(el.city) &&
                        splittedResult.includes(el.country)
                    );
                }
            }).length;

            return {
                totalStay: result,
                numberOfGuests,
            };
        }

        return {
            numberOfGuests: 0,
            totalStay: 0,
        };
    }, [location, guest]);


    const filteredData = DATA.filter((el) => {
        if (location) {
            const splittedResult = location.split(', ');

            if (numberOfGuests > 0) {
                return (
                    el.maxGuests >= numberOfGuests &&
                    splittedResult.includes(el.city) &&
                    splittedResult.includes(el.country)
                );
            } else {
                return (
                    splittedResult.includes(el.city) &&
                    splittedResult.includes(el.country)
                );
            }
        }
        return el;
    });

    
    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='font-montserrat font-bold leading-normal text-neutral-900'>
                    {location === '' ? 'All location' : location}
                </h1>
                {totalStay > 1 && (
                    <p className='text-neutral-600  text-14 font-[500]'>
                        {totalStay} {totalStay > 1 ? `Stays` : `Stay`}
                    </p>
                )}
            </div>
            {filteredData.length === 0 && (
                <p className='text-center'>No Result</p>
            )}

            {filteredData.length > 0 && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 '>
                    {filteredData.map(
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
