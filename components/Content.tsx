import React from 'react';
import Card from './Card';
import { DATA } from '@/libs/constant';

export default function Content() {
    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='font-montserrat font-bold leading-normal text-neutral-900'>
                    Stays in Finland
                </h1>
                <p className='text-neutral-600  text-14 font-[500]'>
                    12+ Stays
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                {DATA.map(({ photo, type, title, rating, superHost }, key) => (
                    <Card
                        superHost={superHost}
                        src={photo}
                        type={type}
                        title={title}
                        rating={rating}
                        key={key}
                    />
                ))}
            </div>
        </>
    );
}
