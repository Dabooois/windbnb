'use client';

import { useState, Dispatch, SetStateAction } from 'react';

import React from 'react';

import CountrySearch from './CountrySearch';
import GuestSearch from './GuestSearch';
import { ChevronRight } from 'tabler-icons-react';
import { toWordGuest } from '@/libs/functions';

export type GuestList = {
    adult: number;
    children: number;
};

type Dispatcher<T> = Dispatch<SetStateAction<T>>;

export type ActiveSearch = {
    location: {
        location: string;
        setLocation: Dispatcher<string>;
    };

    guest: {
        guest: GuestList;
        setGuest: Dispatcher<GuestList>;
    };
};

export default function AcviteSearch({
    location: locParam,
    guest: guestParam,
}: ActiveSearch) {
    const { location } = locParam;
    const { guest } = guestParam;

    const [viewLocation, setViewLocation] = useState<boolean>(false);
    const [viewGuest, setViewGuest] = useState<boolean>(false);

    const handleViewLocation = () => {
        setViewLocation((val) => !val);
    };

    return (
        <div className='flex gap-8 flex-col'>
            <div
                className={`flex flex-col  text-neutral-700 text-14  shadow-sm font-mulish  ${
                    viewLocation || viewGuest
                        ? 'border-neutral-300'
                        : 'border-neutral-200'
                } border-[1.5px]  rounded-[16px]`}
            >
                <div
                    className={`p-4 text-left border-b-[1px] ${
                        viewLocation || viewGuest
                            ? 'border-neutral-300'
                            : 'border-neutral-200'
                    }`}
                >
                    <p
                        className='cursor-pointer flex items-center gap-1'
                        onClick={() => setViewLocation((val) => !val)}
                    >
                        <span
                            className={`${
                                viewLocation &&
                                `transition duration-300 ease-in-out rotate-90`
                            }`}
                        >
                            <ChevronRight />
                        </span>
                        <span>
                            {location === '' ? 'Search Location' : location}
                        </span>
                    </p>

                    <div>
                        {viewLocation && (
                            <div className='flex gap-4 flex-col mx-4 py-4'>
                                <CountrySearch
                                    handleViewLocation={handleViewLocation}
                                    location={locParam}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className=' p-4 text-left'>
                    <p
                        className='cursor-pointer flex items-center gap-1'
                        onClick={() => setViewGuest((val) => !val)}
                    >
                        <span
                            className={`${
                                viewGuest && `transition duration-300 rotate-90`
                            }`}
                        >
                            <ChevronRight />
                        </span>
                        <span>
                            {guest.adult > 0 || guest.children > 0
                                ? toWordGuest(guest)
                                : 'Search Guest'}
                        </span>
                    </p>
                    <div>
                        {viewGuest && (
                            <div className='flex gap-4 flex-col mx-4 py-4'>
                                <GuestSearch guest={guestParam} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
