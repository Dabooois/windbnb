import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png';
import DisplaySearch from './DisplaySearch';

export default function Navbar() {
    return (
        <header className='w-full bg-white flex flex-col gap-10 p-2 '>
            <Image src={Logo} alt='Website Logo' className='ml-1' />

            <div>
                <DisplaySearch />
            </div>
        </header>
    );
}
