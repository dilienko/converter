/* Monobank's API allows to make a small number of requests
in a certain period of time. Therefore, in case of a request error,
the program will use the exchange rate from this file*/

export const offlineRates = [
   {
      currencyCodeA: 840,
      currencyCodeB: 980,
      date: 1670709674,
      rateBuy: 36.65,
      rateSell: 37.4406,
   },
   {
      currencyCodeA: 978,
      currencyCodeB: 980,
      date: 1670709674,
      rateBuy: 38.65,
      rateSell: 39.7504,
   },
   {
      currencyCodeA: 978,
      currencyCodeB: 840,
      date: 1670709674,
      rateBuy: 1.045,
      rateSell: 1.06,
   },
];
