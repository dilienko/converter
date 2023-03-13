import { ThreeDots } from "react-loader-spinner";
import "./index.css";

function Input({
   amount,
   setAmount,
   currency,
   label,
   wasLoaded,
   convert,
   setResult,
}) {
   const handleClick = (e) => {
      let value = e.target.value.replace(",", ".");
      let numParts = value.split(".").map((e) => e.length);
      //Number can contain up to 11 digits and 5 digits after decimal point
      if (numParts[0] > 11 || numParts[1] > 5) return;
      //check for number
      if (/^([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value) || value === "") {
         setAmount(value || "");
         convert(value, setResult, currency);
      }
   };

   return (
      <div className='converter-amount'>
         <label className='input-header'>{label}</label>
         <div className='converter-amount__wrapper'>
            <div className={`converter-amount__sign-${currency}`}></div>
            {!wasLoaded ? (
               <ThreeDots
                  height='100%'
                  width='100%'
                  color='#8d128d'
                  wrapperClass='converter-amount__loader'
               />
            ) : null}
            <input
               type='text'
               className='converter-amount__field'
               value={wasLoaded ? amount : ""}
               onChange={(e) => handleClick(e)}
            />
         </div>
      </div>
   );
}

export default Input;
