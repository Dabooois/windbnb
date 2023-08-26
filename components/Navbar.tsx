import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from '@/assets/logo.png';
import DisplaySearch from './DisplaySearch';

export default function Navbar() {
    const [atTopPage, setAtTopPage] = useState<boolean>(true);
    const handleScroll = () => {
        // when the user scrolls, check the pageYOffset
        if (window.pageYOffset > 0) {
            // user is scrolled
            if (atTopPage) setAtTopPage(false);
        } else {
            // user is at top of page
            if (!atTopPage) setAtTopPage(true);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <header
            className={`sticky max-h-[133px] top-0 z-30  ${
                !atTopPage
                    ? 'shadow-2xl transition delay-100 duration-300 ease-in-out'
                    : ''
            } bg-neutral-100`}
        >
            <div className=' max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:justify-between gap-10 py-4'>
                <Image
                    src={Logo}
                    alt='Website Logo'
                    className='ml-1 object-contain'
                />
                <div>
                    <DisplaySearch />
                </div>
            </div>
        </header>
    );
}
