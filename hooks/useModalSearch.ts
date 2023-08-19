import { useSearchParams, useRouter } from 'next/navigation';

export const useModalSearch = () => {
    const searchParams = useSearchParams();
    const useModal = searchParams.get('modalState') || 'close';
    const router = useRouter();
    const existingParams = new URLSearchParams(
        Array.from(searchParams.entries())
    );

    const openModal = (value: string) => {
        const parseValue = value === 'open' ? 'close' : 'open';
        existingParams.set('modalState', parseValue);
        router.push(`?${existingParams.toString()}`);
    };

    return {
        modal: useModal,
        openModal,
    };
};
