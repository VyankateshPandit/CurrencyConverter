import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { ArrowLeftRight } from "lucide-react";
import { InputFields, DropDownInputs } from "./components";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const SwapCurrency = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const Converter = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="bg-[#121419] min-h-screen h-screen w-full flex flex-col items-center justify-center px-4 py-6">
        <div className="flex flex-col items-center justify-evenly p-5 bg-[#171a1e] w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-3xl border border-[#22262a] shadow-xl">
          <h1 className="text-[#cacbca] font-bold text-xl sm:text-2xl md:text-3xl text-center mb-4">
            CURRENCY CONVERTER
          </h1>

          <InputFields
            label="From"
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
          />

          <div className="flex flex-row w-full items-center justify-evenly gap-4 my-4">
            <DropDownInputs
              currencyOption={options}
              onCurrencyChange={(amount) => {
                setAmount(amount);
              }}
              selectCurrency={from}
            />
            <ArrowLeftRight
              onClick={SwapCurrency}
              className="
                p-2 
                h-10 w-10
                sm:h-12 sm:w-12
                md:h-14 md:w-14
                border border-[#22262a] 
                rounded-full 
                text-[#808792] 
                bg-[#171a1e] 
                hover:rotate-180 
                transition-transform
              "
            />
            <DropDownInputs
              currencyOption={options}
              onCurrencyChange={(currency) => {
                setTo(currency);
              }}
              selectCurrency={to}
            />
          </div>

          <InputFields
            label="To"
            amount={convertedAmount}
            onAmountChange={(amount) => setAmount(amount)}
          />

          <button
            onClick={Converter}
            className="mt-6 text-[#cacbca] w-full rounded-lg border border-black font-semibold shadow-md text-lg sm:text-xl md:text-2xl p-3 bg-[#3a3e70] hover:bg-[#30335c] transition-colors"
            type="submit"
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
