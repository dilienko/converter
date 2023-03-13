import { useEffect, useState } from "react";
import Header from "../Header";
import Converter from "../Converter";
import { offlineRates } from "../../utils/currencyRate";

function App() {
   const [exchangeRate, setExchangeRate] = useState([]);
   const [wasLoaded, setWasLoaded] = useState(false);

   // get exchange rate on page load
   useEffect(() => {
      fetch("https://api.monobank.ua/bank/currency")
         .then((response) => response.json())
         .then((result) => {
            setExchangeRate(result.splice(0, 3));
         })
         .catch(() => {
            setExchangeRate(offlineRates);
         })
         .finally(() => setWasLoaded(true));
   }, []);

   return (
      <>
         <Header wasLoaded={wasLoaded} exchangeRate={exchangeRate} />
         <Converter wasLoaded={wasLoaded} exchangeRate={exchangeRate} />
      </>
   );
}

export default App;
