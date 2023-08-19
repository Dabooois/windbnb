'use client';

import React from 'react';

import { useState } from 'react';

import { useSearchParams, useRouter } from 'next/navigation';
import GuestSearchButton from './GuestSearchButton';

export default function GuestSearch() {
    const searchParams = useSearchParams();
    const existingParams = new URLSearchParams(
        Array.from(searchParams.entries())
    );

    const router = useRouter();

    const [adult, setAdult] = useState<number>(
        Number(searchParams.get('adult')) || 0
    );

    const [children, setChildren] = useState<number>(
        Number(searchParams.get('children')) || 0
    );

    const handlePlusAdult = async () => {
        const addAdult = adult + 1;
        setAdult(addAdult);

        existingParams.set('adult', String(addAdult));
        router.push(`?${existingParams.toString()}`);
    };

    const handleMinusAdult = () => {
        if (adult > 0) {
            const minusAdult = adult - 1;
            setAdult(minusAdult);
            existingParams.set('adult', String(minusAdult));
            router.push(`?${existingParams.toString()}`);
        }
    };

    const handlePlusChildren = async () => {
        const addChildren = children + 1;
        setChildren(addChildren);
        existingParams.set('children', String(addChildren));
        router.push(`?${existingParams.toString()}`);
    };

    const handleMinusChildren = () => {
        if (children > 0) {
            const minusChildren = children - 1;
            setChildren(minusChildren);
            existingParams.set('children', String(minusChildren));
            router.push(`?${existingParams.toString()}`);
        }
    };
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col font-[Mulish] '>
                <GuestSearchButton
                    value={adult}
                    title='Adults'
                    description='Age 13 or above'
                    plus={handlePlusAdult}
                    minus={handleMinusAdult}
                />
            </div>

            <div className='flex flex-col font-[Mulish] '>
                <GuestSearchButton
                    value={children}
                    title='Children'
                    description='Age 2 - 12'
                    plus={handlePlusChildren}
                    minus={handleMinusChildren}
                />
            </div>
        </div>
    );
}
