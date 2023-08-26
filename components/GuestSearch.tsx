'use client';

import React from 'react';

import GuestSearchButton from './GuestSearchButton';
import { ActiveSearch } from './AcviteSearch';

type GuestParam = Omit<ActiveSearch, 'location'>;
export default function GuestSearch({ guest }: GuestParam) {
    const { guest: guestParam, setGuest } = guest;

    const handlePlusAdult = async () => {
        const adult = (guestParam.adult += 1);
        setGuest({ ...guestParam, adult });
    };

    const handleMinusAdult = () => {
        if (guestParam.adult > 0) {
            const adult = (guestParam.adult -= 1);
            setGuest({ ...guestParam, adult });
        }
    };

    const handlePlusChildren = async () => {
        const children = (guestParam.children += 1);
        setGuest({ ...guestParam, children });
    };

    const handleMinusChildren = () => {
        if (guestParam.children > 0) {
            const children = (guestParam.children -= 1);
            setGuest({ ...guestParam, children });
        }
    };
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col font-[Mulish] '>
                <GuestSearchButton
                    value={guestParam.adult}
                    title='Adults'
                    description='Age 13 or above'
                    plus={handlePlusAdult}
                    minus={handleMinusAdult}
                />
            </div>

            <div className='flex flex-col font-[Mulish] '>
                <GuestSearchButton
                    value={guestParam.children}
                    title='Children'
                    description='Age 2 - 12'
                    plus={handlePlusChildren}
                    minus={handleMinusChildren}
                />
            </div>
        </div>
    );
}
