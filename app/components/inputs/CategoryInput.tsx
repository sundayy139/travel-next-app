'use client';

import { IconType } from 'react-icons';

interface CategpryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategpryInputProps> = ({ icon: Icon, label, selected, onClick }) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black dark:hover:bg-hover-btn dark:bg-dark-nav transition cursor-pointer ${
        selected ? 'border-black dark:bg-hover-btn' : 'border-neutral-200 dark:border-transparent'
      }`}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
