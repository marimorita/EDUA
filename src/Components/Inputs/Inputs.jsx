import { useRef } from "react";

export const Inputs = ({ placeholder, type, nameInputs, inputValue, classP, valueInput, accept, id, inputRef, length }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        id={id}
        type={type}
        ref={inputRef}
        accept={accept}
        name={nameInputs}
        value={valueInput}
        maxlength={length}
        onChange={inputValue}
        placeholder={placeholder}
        className={`${classP} bg-white border border-black text-black p-2 rounded w-[100%] h-18 font-semibold `}
      />
    </div>
  );
};