import { ThreeDots } from "react-loader-spinner";
import { FLAGS, CODES } from "../../utils/constants";
import "./index.css";

function Header({ wasLoaded, exchangeRate }) {
   const currencies = ["USD", "EUR"];

   return (
      <header className='header'>
         {wasLoaded ? (
            <>
               {currencies.map((currency) => {
                  const currencyInfo = exchangeRate.filter(
                     (rate) => rate.currencyCodeA === CODES[currency]
                  )[0];
                  return (
                     <div className='exchange-info' key={currency}>
                        <img
                           src={FLAGS[currency]}
                           alt='flag'
                           className='exchange-info__flag'
                        />
                        <span className='exchange-info__rate'>
                           {`${currencyInfo.rateBuy.toFixed(
                              2
                           )} / ${currencyInfo.rateSell.toFixed(2)}`}
                        </span>
                     </div>
                  );
               })}
            </>
         ) : (
            <ThreeDots height='30' width='30' radius='8.5' color='#8d128d' />
         )}
      </header>
   );
}

export default Header;
