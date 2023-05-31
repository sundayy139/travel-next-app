import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="border-[1px] md:w-auto w-full py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer dark:bg-dark-btn dark:border-none dark:hover:bg-hover-btn">
      <div className="flex flex-row items-center justify-between text-neutral-600 dark:text-primary">
        <div className="text-sm font-semibold px-6">Any where</div>
        <div className="hidden sm:block text-sm font-semibold px-6 flex-1 text-center border-x-[1px] dark:border-primary">
          Any Week
        </div>
        <div className="text-sm pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
