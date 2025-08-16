import React from "react";

function DropDownInputs({
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
}) {
  return (
    <>
      <select
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        className="
        bg-[#0f1415] 
        text-base sm:text-lg md:text-xl lg:text-2xl 
        p-2 sm:p-3 
        rounded-lg 
        text-[#b6b7b8] 
        w-full sm:w-40 md:w-52 
        [box-shadow:inset_0_4px_6px_rgba(0,0,0,0.2),_inset_4px_0_6px_rgba(0,0,0,0.2)] 
        border-r-[1.4px] border-b-[1.4px] border-[#22262a]
        focus:outline-none focus:ring-2 focus:ring-[#3a3e70]
      "
      >
        {currencyOption.map((ele, id) => (
          <option value={ele} key={id}>
            {ele}
          </option>
        ))}
      </select>
    </>
  );
}

export default DropDownInputs;
