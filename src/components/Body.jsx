import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from 'react-select';
import ReactCountryFlag from "react-country-flag";


const apiKey = "df6f896c78584f158072d031778c39f2";
const baseUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

const currencyData = {
  USD: {countryCode: "US", name: "Dollar"},
  EUR: {countryCode: "EU", name: "Euro"},
  GBR: {countryCode: "GB", name: "Pound" },
  RUB: {countryCode: "RU", name: "Ruble"}
};

const currencyOptions = Object.keys(currencyData).map(currency => ({
  value: currency,
  label: (
    <>
      <ReactCountryFlag
        countryCode={currencyData[currency].countryCode}
        svg
        style={{ width: "24px", height: "24px", marginRight: "8px" }}
      />
      {currencyData[currency].name} ({currency})
    </>
  )
}));


const Body = () => {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState(currencyOptions[0]);
  const [toCurrency, setToCurrency] = useState(currencyOptions[3]);
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);


  useEffect(() => {
    axios.get(baseUrl).then(response => {
      setRates(response.data.rates);
    })
  }, []);


  useEffect(() => {
    if (rates[fromCurrency.value] && rates[toCurrency.value]) {
      const conversionRate = rates[toCurrency.value] / rates[fromCurrency.value];
      setToAmount((fromAmount * conversionRate).toFixed(2));
    }
  }, [fromCurrency, toCurrency, fromAmount, rates]);


  function handleChange(e) {
    setFromAmount(e.taret.value)
  };

  const styles = {
    control: (baseStyles) => ({
      ...baseStyles,
      padding: "15px 25px",
      fontSize: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%", 
      display: "flex",
      alignItems: "center",
      height: "50px", 
      boxSizing: "border-box"
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      display: "flex",
      alignItems: "center",
    }),
    indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      display: "none",
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      padding: "0",
    }),
  };


  return (
    <div className="body">
      <h2>Currency Converter</h2>
      <div className="converter-card">
        <div className="select-group">
          <Select
            className="custom-select"
            options={currencyOptions}
            value={fromCurrency}
            onChange={setFromCurrency}
            styles={styles}
          />
          <Select
            className="custom-select"
            options={currencyOptions}
            value={toCurrency}
            onChange={setToCurrency}
            styles={styles}
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            placeholder="Amount"
            value={fromAmount}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Converted Amount"
            value={toAmount}
          />
        </div>
      </div>
    </div>
  );
  
};

export default Body;











/*



          
*/