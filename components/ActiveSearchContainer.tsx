'use client';
import React from 'react';
import { Search, X } from 'tabler-icons-react';
import AcviteSearch from './AcviteSearch';
import { useModalSearch } from '@/hooks/useModalSearch';

export default function ActiveSearchContainer() {
    const { modal, openModal } = useModalSearch();

    return (
        <div className='w-full absolute h-screen bg-white z-30 left-0 right-0 top-0 px-4 pt-2 flex  flex-col gap-4 justify-between'>
            <div className='flex gap-4 flex-col'>
                <div className='flex justify-between items-center '>
                    <p>Edit your Search</p>
                    <X
                        className='cursor-pointer '
                        onClick={() => openModal(modal)}
                    />
                </div>
                <div>
                    <AcviteSearch />
                </div>
            </div>
            <button className='text-center   mb-4 bg-primary mx-auto p-4 rounded-xl text-white flex'>
                <Search className='text-white' />
                <span>Search</span>
            </button>
        </div>
    );
}
