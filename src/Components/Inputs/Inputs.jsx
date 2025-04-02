export const Inputs = ({ placeholder, type, nameInputs, inputValue, classP, valueInput, accept, id }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        id={id}
        type={type}
        accept={accept}
        name={nameInputs}
        value={valueInput}
        onChange={inputValue}
        placeholder={placeholder}
        className={`${classP} bg-white border border-black text-black p-2 rounded w-[100%] h-18 font-semibold `}
      />
    </div>
  );
};