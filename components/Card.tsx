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
        <div className='flex  gap-2 flex-col'>
            <Image
                src={src}
                alt={title}
                width={400}
                height={100}
                className='rounded-3xl'
            />
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
        </div>
    );
}
