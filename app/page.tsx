'use client';
import ActiveSearchContainer from '@/components/ActiveSearchContainer';
import Content from '@/components/Content';
import Navbar from '@/components/Navbar';
import { useModalSearch } from '@/hooks/useModalSearch';

export default function Home() {
    const { modal } = useModalSearch();

    return (
        <>
            <Navbar />
            <main className='px-4 md:px-8 max-w-[1440px] mx-auto '>
                <section className='py-10 flex flex-col  gap-5 '>
                    <Content />
                </section>
            </main>
            {modal === 'open' && <ActiveSearchContainer />}
        </>
    );
}
