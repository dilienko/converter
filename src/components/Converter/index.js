import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Options from "../Options";
import { CODES } from "../../utils/constants";
import "./index.css";

function Converter({ wasLoaded, exchangeRate }) {
   const [fromValue, setFromValue] = useState("1");
   const [toValue, setToValue] = useState("");
   const [fromCurrency, setFromCurrency] = useState("USD");
   const [toCurrency, setToCurrency] = useState("UAH");

   useEffect(() => {
      if (wasLoaded) {
         convertCurrency(fromValue, setToValue, fromCurrency);
      }
   }, [toCurrency, fromCurrency, wasLoaded]);

   const convertCurrency = (value, setValue, currency) => {
      //if currencies are the same, result - input value
      if (toCurrency === fromCurrency) {
         setValue(value);
         return;
      }
      //select currency rate
      let currencyRate = [...exchangeRate].filter((e) => {
         let values = Object.values(e);
         return (
            values.includes(CODES[fromCurrency]) &&
            values.includes(CODES[toCurrency])
         );
      })[0];
      // choose buy or sell rate
      if (currencyRate.currencyCodeA === CODES[currency]) {
         setValue(parseFloat((value * currencyRate.rateBuy).toFixed(5)));
      } else {
         setValue(parseFloat((value / currencyRate.rateSell).toFixed(5)));
      }
   };

   return (
      <div className='converter'>
         <div className='converter-field'>
            <div className='converter-inputs'>
               <div className='converter-inputs__item'>
                  <Input
                     amount={fromValue}
                     setAmount={setFromValue}
                     currency={fromCurrency}
                     label='From'
                     wasLoaded={wasLoaded}
                     convert={convertCurrency}
                     setResult={setToValue}
                  />
                  <Options
                     value={fromCurrency}
                     setValue={setFromCurrency}
                     label={"From"}
                  />
               </div>

               <Button
                  to={toCurrency}
                  from={fromCurrency}
                  setTo={setToCurrency}
                  setFrom={setFromCurrency}
               />

               <div className='converter-inputs__item'>
                  <Input
                     amount={toValue}
                     setAmount={setToValue}
                     currency={toCurrency}
                     label='To'
                     wasLoaded={wasLoaded}
                     convert={convertCurrency}
                     setResult={setFromValue}
                  />
                  <Options
                     value={toCurrency}
                     setValue={setToCurrency}
                     label={"To"}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Converter;
