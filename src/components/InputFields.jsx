import React from "react";

function InputFields({ label, amount, onAmountChange }) {
  return (
    <div className="w-full text-[#b6b7b8] flex flex-col gap-2 items-start">
      {/* Label */}
      <label className="text-sm sm:text-base md:text-lg text-gray-400">
        {label}
      </label>

      {/* Input */}
      <input
        type="number"
        value={amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
        className="
          w-full 
          focus:outline-none 
          bg-[#14171b] 
          [box-shadow:inset_0_4px_6px_rgba(0,0,0,0.2),_inset_4px_0_6px_rgba(0,0,0,0.2)] 
          border-r-[1.4px] border-b-[1.4px] border-[#22262a]  
          rounded-lg 
          p-2 sm:p-3 
          font-semibold 
          text-base sm:text-lg md:text-xl lg:text-2xl
          text-[#e0e0e0]
          placeholder:text-gray-500
        "
      />
    </div>
  );
}

export default InputFields;
