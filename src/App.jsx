import React from "react";
import Header from "./components/Header.jsx";
import './main.css';
import Body from "./components/Body.jsx";
import currencyData from "./components/CountryCurrent.jsx";
import styles from "./components/SelectStyle.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Body styles={styles} currencyData={currencyData} />
      </main>
    </div>
  );
}

export default App;
