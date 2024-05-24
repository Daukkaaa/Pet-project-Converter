import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from 'react-select';
import ReactCountryFlag from "react-country-flag";
import { CgArrowsExchange } from "react-icons/cg";

const apiKey = "df6f896c78584f158072d031778c39f2";
const baseUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

const Body = (props) => {


  const currencyOptions = Object.keys(props.currencyData).map(currency => ({
    value: currency,
    label: (
      <>
        <ReactCountryFlag
          countryCode={props.currencyData[currency].countryCode}
          svg
          style={{ width: "24px", height: "24px", marginRight: "8px" }}
        />
        {props.currencyData[currency].name} ({currency})
      </>
    )
  }));

  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState(currencyOptions[0]);
  const [toCurrency, setToCurrency] = useState(currencyOptions[4]);
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);
  const [date, setDate] = useState("");
  const [historicalRates, setHistoricalRates] = useState(null);



  useEffect(() => {
    axios.get(baseUrl).then(response => {
      setRates(response.data.rates);
    });
  }, []);

  useEffect(() => {
    if (rates[fromCurrency.value] && rates[toCurrency.value]) {
      const conversionRate = rates[toCurrency.value] / rates[fromCurrency.value];
      setToAmount((fromAmount * conversionRate).toFixed(2));
    }
  }, [fromCurrency, toCurrency, fromAmount, rates]);

  useEffect(() => {
    if (date) {
      const historicalUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=${apiKey}`;
      axios.get(historicalUrl).then(response => {
        setHistoricalRates(response.data.rates)
      })
    }
  }, [date])



  function handleAmountChange(e) {
    setFromAmount(e.target.value);
  };

  function flip() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  function handleDateChange(e) {
    setDate(e.target.value)
  }



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
            styles={props.styles}
          />
          <div className="switch">
            <CgArrowsExchange className="switch-icon" onClick={flip} />
          </div>
          <Select
            className="custom-select"
            options={currencyOptions}
            value={toCurrency}
            onChange={setToCurrency}
            styles={props.styles}
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            placeholder="Amount"
            value={fromAmount}
            onChange={handleAmountChange}
          />
          <input
            type="number"
            placeholder="Converted Amount"
            value={toAmount}
            readOnly
          />
        </div>
        <div className="date-group">
          <label htmlFor="date">Select Date:</label>
          <input 
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        {historicalRates && (
          <div className="historical-rates">
            <h3>Historical Rates on {date}</h3>
            <p>1 {fromCurrency.value} = {(historicalRates[toCurrency.value] / historicalRates[fromCurrency.value]).toFixed(2)} {toCurrency.value}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;






