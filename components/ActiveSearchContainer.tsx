'use client';

import React, { FormEvent, useState } from 'react';
import { Search, X } from 'tabler-icons-react';
import AcviteSearch, { GuestList } from './AcviteSearch';
import { useModalSearch } from '@/hooks/useModalSearch';
import { useRouter, useSearchParams } from 'next/navigation';
import { encodeValue } from '@/libs/functions';
import { useParams } from '@/hooks/useParams';

export default function ActiveSearchContainer() {
    const modalParam = useParams();
    const searchParams = useSearchParams();
    const existingParams = new URLSearchParams(
        Array.from(searchParams.entries())
    );
    const router = useRouter();

    const { modal, openModal } = useModalSearch();
    const [location, setLocation] = useState(modalParam.location);
    const [guest, setGuest] = useState<GuestList>(modalParam.guest);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasGuests = Object.values((val: number) => val === 0);

        if (location !== '' && hasGuests.length !== 0) return;

        const encodedParam = encodeValue(
            JSON.stringify({
                location: location,
                guest: guest,
            })
        );
        existingParams.set('modalState', 'close');
        existingParams.set('modalParam', encodedParam);
        router.push(`?${existingParams.toString()}`);
    };

    const clearParam = () => {
        existingParams.set('modalState', 'close');
        existingParams.set('modalParam', '');

        router.push(`?${existingParams.toString()}`);
    };

    return (
        <div className='w-full absolute h-screen bg-white z-30 left-0 right-0 top-0 px-4 pt-2 flex  flex-col gap-4 justify-between'>
            <form onSubmit={handleSubmit} className='flex gap-4 flex-col'>
                <div className='flex justify-between items-center '>
                    <p>Edit your Search</p>
                    <X
                        className='cursor-pointer'
                        onClick={() => openModal(modal)}
                    />
                </div>

                <AcviteSearch
                    location={{
                        location: location,
                        setLocation: setLocation,
                    }}
                    guest={{
                        guest: guest,
                        setGuest: setGuest,
                    }}
                />

                <div className='flex flex-row items-center w-56 mx-auto'>
                    <button
                        type='submit'
                        className='text-center  bg-primary mx-auto p-4 rounded-xl text-white flex my-auto'
                    >
                        <Search className='text-white' />
                        <span>Search</span>
                    </button>

                    <button
                        type='button'
                        onClick={clearParam}
                        className='text-center  bg-slate-700 hover:bg-slate-800 hover:transition  hover:duration-300 hover:ease-in-out mx-auto p-4 rounded-xl text-white flex my-auto'
                    >
                        <span>Clear</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
