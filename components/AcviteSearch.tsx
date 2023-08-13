'use client';

import { useState, useMemo } from 'react';
import { LOCATION } from '@/libs/constant';

import React from 'react';
import { MapPin } from 'tabler-icons-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AcviteSearch() {
    const searchParams = useSearchParams();
    const [viewLocation, setViewLocation] = useState<boolean>(false);
    const [location, setLocation] = useState<string>(
        searchParams.get('location') || ''
    );

    const [viewGuest, setViewGuest] = useState<boolean>(false);
    const [guest, setGuest] = useState<string>(searchParams.get('guest') || '');

    const router = useRouter();

    const handleViewLocationState = () => {
        setViewLocation((val) => !val);
    };

    const handlelocationState = (city: string, country: string) => {
        setLocation(`${city}, ${country}`);
        handleViewLocationState();
        router.push(`?location=${city}, ${country}`);
    };

    const handleViewGuestState = () => {
        setViewLocation((val) => !val);
    };

    const handleGuestState = (city: string, country: string) => {
        setLocation(`${city}, ${country}`);
        handleViewLocationState();
        router.push(`?location=${city}, ${country}`);
    };

    return (
        <div className='flex gap-8 flex-col'>
            <div className='flex flex-col  text-neutral-700 text-14  shadow-sm font-mulish  border-[#F2F2F2] border-[1.5px]  rounded-[16px]'>
                <button
                    onClick={handleViewLocationState}
                    className='p-4 text-left border-b-[1px] border-[#F2F2F2]'
                >
                    {location === '' ? 'Search Location' : location}
                </button>
                <button className=' p-4 text-left'>
                    {guest === '' ? 'Search Guest' : guest}
                </button>
            </div>

            <div className='flex gap-4 flex-col mx-4'>
                {viewLocation &&
                    LOCATION.map((el, key) => {
                        const isActive =
                            location &&
                            location === `${el.city}, ${el.country}`;
                        return (
                            <p
                                key={key}
                                onClick={() =>
                                    handlelocationState(el.city, el.country)
                                }
                                className={`flex gap-2 font-mulish text-14 hover:bg-neutral-200 cursor-pointer ${
                                    isActive ? 'bg-neutral-200' : ''
                                }`}
                            >
                                <MapPin />
                                {el.city}, {el.country}
                            </p>
                        );
                    })}
            </div>
        </div>
    );
}
