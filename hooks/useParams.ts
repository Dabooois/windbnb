import { GuestList } from '@/components/AcviteSearch';
import { decodeValue } from '@/libs/functions';
import { useSearchParams } from 'next/navigation';

type Params = {
    location: string;
    guest: GuestList;
};
export const useParams = (): Params => {
    const searchParams = useSearchParams();
    const modalParm = searchParams?.get('modalParam');

    const value = modalParm && JSON.parse(decodeValue(modalParm));

    return {
        location: value?.location || '',
        guest: value?.guest || { children: 0, adult: 0 },
    };
};
