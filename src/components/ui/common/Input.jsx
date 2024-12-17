import React from 'react';
import { cn } from '../../lib/utils/tailwindMarge';

const Input = ({ text, className, children }) => {
  return (
    <input
      className={cn('outline-none  border-none  text-base font-font-roboto text-normal text-[#7A7A7A] input-with-before ', className)}
      placeholder={`${text}`}
      name="text"
    >
      {children}
    </input>
  );
};

export default Input;
