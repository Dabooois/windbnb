import { LOCATION } from '@/libs/constant';

import { MapPin } from 'tabler-icons-react';
// import { useRouter, useSearchParams } from 'next/navigation';
import { ActiveSearch } from './AcviteSearch';

type Pretify<T> = {
    [K in keyof T]: T[K];
};

type TCountrySearch = Omit<ActiveSearch, 'guest'> & {
    handleViewLocation: () => void;
};

export default function CountrySearch({
    handleViewLocation,
    location: locParam,
}: Pretify<TCountrySearch>) {
    // const searchParams = useSearchParams();
    // const existingParams = new URLSearchParams(
    //     Array.from(searchParams.entries())
    // );
    // const router = useRouter();

    const { setLocation, location } = locParam;

    const handlelocationState = (city: string, country: string) => {
        setLocation(`${city}, ${country}`);
        handleViewLocation();
        // existingParams.set('location', String(`${city}, ${country}`));
        // router.push(`?${existingParams.toString()}`);
    };

    return (
        <>
            {LOCATION.map((el, key) => {
                const isActive =
                    location && location === `${el.city}, ${el.country}`;
                return (
                    <p
                        key={key}
                        onClick={() => handlelocationState(el.city, el.country)}
                        className={`flex gap-2 font-mulish text-14  p-1 hover:bg-neutral-200 cursor-pointer  ${
                            isActive ? 'bg-neutral-200 rounded-md' : ''
                        }`}
                    >
                        <MapPin />
                        {el.city}, {el.country}
                    </p>
                );
            })}
        </>
    );
}
