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
                <button onClick={minus} className='border border-[#828282] p-1'>
                    <Minus size={10} strokeWidth={1} color={'black'} />
                </button>
                <span className='text-sm text-neutral-900'>{value}</span>
                <button onClick={plus} className='border border-[#828282] p-1'>
                    <Plus size={10} strokeWidth={1} color={'black'} />
                </button>
            </div>
        </>
    );
}
