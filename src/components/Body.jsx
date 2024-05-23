import React from "react";

const Body = () => {
  return (
    <div className="body">
      <h2>Currency Converter</h2>
      <div className="converter-card">
        <div className="input-group">
          <select defaultValue="USD">
            <option value="USD">Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">Pound (GBP)</option>
            <option value="RUB">Ruble (RUB)</option>
          </select>
          <select defaultValue="RUB">
            <option value="USD">Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">Pound (GBP)</option>
            <option value="RUB">Ruble (RUB)</option>
          </select>
        </div>
        <div className="input-group">
          <input type="number" placeholder="Amount" />
          <input type="number" placeholder="Amount" />
        </div>
      </div>
    </div>
  );
};

export default Body;
