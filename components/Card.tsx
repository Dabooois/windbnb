'use client';

import Image from 'next/image';
import { Star } from 'tabler-icons-react';

type TCard = {
    src: string;
    title: string;
    superHost: boolean;
    type: string;
    rating: number;
};

export default function Card({ src, superHost, type, rating, title }: TCard) {
    return (
        <div className='flex  gap-2 flex-col '>
            <div className='relative '>
                <Image
                    src={src}
                    alt={title}
                    width={362}
                    height={295}
                    // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    // height={295}
                    // width={343}
                    className='rounded-3xl object-cover w-full h-[295px]'
                />
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    {superHost && (
                        <p className='text-12 rounded-xl border-[1px] px-3 py-1 text-neutral-900 font-bold border-neutral-300'>
                            SUPER HOST
                        </p>
                    )}
                    <p className='text-neutral-600 text-14'>{type}</p>
                </div>

                <div className='flex gap-1'>
                    <Star
                        fill='rgba(235, 87, 87, 0.90)'
                        className='text-primary'
                        height={21}
                        width={21}
                    />
                    <span className='text-12 text-neutral-900'>{rating}</span>
                </div>
            </div>
            <p className=' text-sm  font-bold'>{title}</p>
        </div>
    );
}
