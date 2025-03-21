import React, { useState } from 'react';

export const ToolTipButton = ({ Icon, clickButton }) => {
  return (
    <button className="top-2 p-3 text-[#434343]">
      <Icon onClick={clickButton} className="cursor-pointer w-10 h-10 hover:scale-125 transition duration-300" />
    </button>
  )
};

export const ToolTipDropdown = ({ Icon, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative group">
      <ToolTipButton Icon={Icon} clickButton={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="absolute w-[6.5rem] right-[0.5rem] opacity-100 top-[85%] flex flex-col bg-white border shadow-lg transition duration-300">
          {options.map(({ label, action }) => (
            <button key={label} clickButton={action} className='text-left text-black h-8 pl-1 hover:bg-[#D9D9D9]'>
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const ToolTip = ({ children }) => (
  <div className="absolute flex-row-reverse right-4 flex justify-end items-end gap-6">
    {children}
  </div>
);