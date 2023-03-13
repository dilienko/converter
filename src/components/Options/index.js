import Select from "react-select";
import { FLAGS } from "../../utils/constants";
import "./index.css";

function Options({ value, setValue }) {
   const options = [
      {
         value: "USD",
         label: "USD - US Dollar",
         image: FLAGS.USD,
      },
      {
         value: "UAH",
         label: "UAH - Ukrainian Hryvnia",
         image: FLAGS.UAH,
      },
      {
         value: "EUR",
         label: "EUR - Euro",
         image: FLAGS.EUR,
      },
   ];

   const handleChange = (e) => {
      setValue(e.value);
   };

   return (
      <div className='converter-options'>
         <div className='converter-options-wrapper'>
            <Select
               options={options}
               formatOptionLabel={(currency) => (
                  <div className='currency__option'>
                     <img
                        src={currency.image}
                        alt='flag'
                        style={{
                           height: "2vh",
                           aspectRatio: "4/3",
                           marginRight: "3%",
                        }}
                     />
                     <span>{currency.label}</span>
                  </div>
               )}
               className='converter-option'
               isSearchable={false}
               value={options.filter((option) => option.value === value)}
               onChange={handleChange}
            />
         </div>
      </div>
   );
}

export default Options;
