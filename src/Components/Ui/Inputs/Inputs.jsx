export const Inputs = ({ placeholder, type, nameInputs, inputValue, classP }) => {
    return (
      <div className="flex items-center justify-center">
        <input
          onChange={inputValue}
          type={type}
          name={nameInputs}
          placeholder={placeholder}
          className={`${classP} bg-white border border-black text-black p-2 rounded w-[100%] h-18 font-semibold `}
        />
      </div>
    );
  };
  