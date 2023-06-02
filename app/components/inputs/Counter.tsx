'use client';

import { useCallback } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}
const Counter: React.FC<CounterProps> = ({ title, subtitle, value, onChange }) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  const onReduce = useCallback(() => {
    if (value === 1) return;
    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600 dark:text-secondary">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className="w-10 h-10 rounded-full border-[1px] flex items-center justify-center cursor-pointer transition border-neutral-400 text-neutral-600 hover:opacity-80 dark:border-transparent dark:text-primary dark:bg-dark-btn dark:hover:bg-hover-btn"
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-xl text-neutral-600 dark:text-primary">{value}</div>
        <div
          onClick={onAdd}
          className="w-10 h-10 rounded-full border-[1px] flex items-center justify-center cursor-pointer transition border-neutral-400 text-neutral-600 hover:opacity-80 dark:border-transparent dark:text-primary dark:bg-dark-btn dark:hover:bg-hover-btn"
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
