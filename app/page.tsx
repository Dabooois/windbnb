import ActiveSearchContainer from '@/components/ActiveSearchContainer';
import Content from '@/components/Content';
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className='px-4 flex flex-col gap-10 mt-8'>
                <section>
                    <Content />
                </section>
            </main>
            <ActiveSearchContainer />
        </>
    );
}
