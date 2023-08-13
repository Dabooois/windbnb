import React from 'react';
import { Search as SearchIcon } from 'tabler-icons-react';

export default function DisplaySearch() {
    return (
        <div className='flex  text-neutral-700 text-14 items-center justify-center shadow-sm font-mulish  border-[#F2F2F2] border-[1.5px] w-[90%] mx-auto  rounded-[16px]'>
            <button className='flex-shrink p-4  border-r-[1px] border-[#F2F2F2]'>
                Helsinki, Finland
            </button>

            <button className='flex-shrink p-4  border-r-[1px] border-[#F2F2F2]'>
                Add Guests{' '}
            </button>
            <button className='text-center flex-none p-4'>
                <SearchIcon className='text-primary' />
            </button>
        </div>
    );
}
