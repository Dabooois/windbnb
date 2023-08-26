'use client';

import { useState, useMemo, Dispatch, SetStateAction } from 'react';

import React from 'react';

import CountrySearch from './CountrySearch';
import GuestSearch from './GuestSearch';
import { useParams } from '@/hooks/useParams';

type ActiveSearch = {
    location: {
        location: string;
        setLocation: Dispatch<SetStateAction<string>>;
    };

    guest: {
        guest: string;
        setGuest: Dispatch<SetStateAction<string>>;
    };
};

export default function AcviteSearch({
    location: locParam,
    guest: guestParam,
}: ActiveSearch) {
    const { location, guest } = useParams();
    const [viewLocation, setViewLocation] = useState<boolean>(false);
    const [viewGuest, setViewGuest] = useState<boolean>(false);

    const handleViewLocation = () => {
        setViewLocation((val) => !val);
    };

    return (
        <div className='flex gap-8 flex-col'>
            <div className='flex flex-col  text-neutral-700 text-14  shadow-sm font-mulish  border-[#F2F2F2] border-[1.5px]  rounded-[16px]'>
                <div className='p-4 text-left border-b-[1px] border-[#F2F2F2]'>
                    <p
                        className='cursor-pointer'
                        onClick={() => setViewLocation((val) => !val)}
                    >
                        {location === '' ? 'Search Location' : location}{' '}
                    </p>

                    <div>
                        {viewLocation && (
                            <div className='flex gap-4 flex-col mx-4 py-4'>
                                <CountrySearch
                                    handleViewLocation={handleViewLocation}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className=' p-4 text-left'>
                    <p
                        className='cursor-pointer'
                        onClick={() => setViewGuest((val) => !val)}
                    >
                        {guest === '' ? 'Search Guest' : guest}
                    </p>
                    <div>
                        {viewGuest && (
                            <div className='flex gap-4 flex-col mx-4 py-4'>
                                <GuestSearch />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
