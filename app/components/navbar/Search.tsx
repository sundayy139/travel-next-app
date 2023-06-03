'use client';

import { BiSearch } from 'react-icons/bi';
import useSearchModal from '@/app/hooks/useSearchModal';
import { useSearchParams } from 'next/navigation';
import useCountries from '@/app/hooks/useCountry';
import { useMemo } from 'react';
import { differenceInDays } from 'date-fns/esm';

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();

  const { getByValue } = useCountries();

  const locationValue = params?.get('locationValue');
  const startDate = params?.get('startDate');
  const endDate = params?.get('endDate');
  const guestCount = params?.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Any where';
  }, [locationValue, getByValue]);

  const durationLable = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);

      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return 'Any Week';
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return 'Add guests';
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="border-[1px] md:w-auto w-full py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer dark:bg-dark-btn dark:border-none dark:hover:bg-hover-btn"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">{locationLabel}</div>
        <div className="hidden sm:block text-sm font-semibold px-6 flex-1 text-center border-x-[1px] dark:border-primary">
          {durationLable}
        </div>
        <div className="text-sm pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden sm:block text-neutral-800 dark:text-primary">{guestLabel}</div>
          <div className="p-2 bg-rose-500 rounded-full text-white ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
