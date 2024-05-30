import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import "./main.css";
import Body from "./components/Body.jsx";
import currencyData from "./components/CountryCurrent.jsx";
import styles from "./components/SelectStyle.jsx";
import News from "./components/News.jsx";
import axios from "axios";
import { useTranslation } from "react-i18next";


const newsApiKey = "b059c19575e4498fa90c7fbd6640b7d5";
const baseUrl = `https://newsapi.org/v2/everything?apiKey=${newsApiKey}`;

const App = () => {
  const [news, setNews] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchNews("currency");
  }, []);

  const fetchNews = async (query) => {
    try {
      const res = await axios.get(baseUrl, {
        params: {q: query},
      });
      setNews(res.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  const handleSearch = (query) => {
    fetchNews(query)
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <main>
        <Body styles={styles} currencyData={currencyData} />
      </main>
      <aside>
        <h2 className="news-title">{t('News')}</h2>
        <News news={news} />
      </aside>
    </div>
  );
};

export default App;

