'use client';

import { useState, useMemo } from 'react';

import React from 'react';

import CountrySearch from './CountrySearch';
import GuestSearch from './GuestSearch';
import { useParams } from '@/hooks/useParams';

export default function AcviteSearch() {
    const { location, guest } = useParams();
    const [viewLocation, setViewLocation] = useState<boolean>(false);
    const [viewGuest, setViewGuest] = useState<boolean>(false);

    const handleViewLocation = () => {
        setViewLocation((val) => !val);
    };

    return (
        <div className='flex gap-8 flex-col'>
            <div className='flex flex-col  text-neutral-700 text-14  shadow-sm font-mulish  border-[#F2F2F2] border-[1.5px]  rounded-[16px]'>
                <button
                    onClick={() => setViewLocation((val) => !val)}
                    className='p-4 text-left border-b-[1px] border-[#F2F2F2]'
                >
                    {location === '' ? 'Search Location' : location}
                </button>
                <button
                    onClick={() => setViewGuest((val) => !val)}
                    className=' p-4 text-left'
                >
                    {guest === '' ? 'Search Guest' : guest}
                </button>
            </div>

            <div className='flex gap-4 flex-col mx-4'>
                {viewLocation && (
                    <CountrySearch handleViewLocation={handleViewLocation} />
                )}
            </div>

            <div className='flex gap-4 flex-col mx-4'>
                {viewGuest && <GuestSearch />}
            </div>
        </div>
    );
}
