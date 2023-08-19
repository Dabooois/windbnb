'use client';

import { useModalSearch } from '@/hooks/useModalSearch';
import { useParams } from '@/hooks/useParams';

import { Search as SearchIcon } from 'tabler-icons-react';

export default function DisplaySearch() {
    const { location, guest } = useParams();
    const { modal, openModal } = useModalSearch();

    return (
        <div className='flex text-neutral-700 text-14 items-center  shadow-sm font-mulish  border-[#F2F2F2] border-[1.5px] w-full mx-auto  rounded-3xl'>
            <button className='flex-grow py-2 px-4 border-r-[1px] border-[#F2F2F2]'>
                {location === '' ? 'Search location' : location}
            </button>

            <button className='flex-grow py-2 px-4   border-r-[1px] border-[#F2F2F2]'>
                {guest === '' ? 'Search guest' : guest}
            </button>
            <button className='text-center flex-none py-2 px-4 m-auto '>
                <SearchIcon
                    className='text-primary'
                    onClick={() => openModal(modal)}
                />
            </button>
        </div>
    );
}
