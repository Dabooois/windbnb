import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png';
import DisplaySearch from './DisplaySearch';

export default function Navbar() {
    return (
        <header className='max-w-[1440px] mx-auto bg-white flex flex-col sm:flex-row sm:justify-between  gap-10 py-4 px-6 '>
            <Image
                src={Logo}
                alt='Website Logo'
                className='ml-1 object-contain'
            />
            <div>
                <DisplaySearch />
            </div>
        </header>
    );
}
