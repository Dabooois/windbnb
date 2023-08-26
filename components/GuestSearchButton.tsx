import React from 'react';
import { Minus, Plus } from 'tabler-icons-react';

type TGuestButtonSearch = {
    title: string;
    description: string;
    value: number;
    plus: () => void;
    minus: () => void;
};

export default function GuestSearchButton({
    title,
    description,
    value,
    plus,
    minus,
}: TGuestButtonSearch) {
    return (
        <>
            <h4 className='text-sm font-bold text-neutral-900'>{title}</h4>
            <p className='text-sm  text-neutral-400'>{description}</p>
            <div className='flex gap-2 items-center mt-2'>
                <p
                    // onClick={minus}
                    className='border border-[#828282] p-1 cursor-pointer'
                >
                    <Minus size={10} strokeWidth={1} color={'black'} />
                </p>
                <span className='text-sm text-neutral-900'>{value}</span>
                <p
                    // onClick={plus}
                    className='border border-[#828282] p-1 cursor-pointer'
                >
                    <Plus size={10} strokeWidth={1} color={'black'} />
                </p>
            </div>
        </>
    );
}
