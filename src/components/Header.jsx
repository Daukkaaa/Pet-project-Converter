import React, { useState } from "react";
import { SlQuestion } from "react-icons/sl";
import { LuSearch } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = (props) => {
  const [input, setInput] = useState("");
  const { t } = useTranslation();


  function inputChange(e) {
    setInput(e.target.value);
  }

  const searchClick = () => {
    if (input.trim()) {
      props.onSearch(input);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchClick();
    }
  };


  return (
    <div className="header">
      <div className="left">
        <input
          placeholder={t("News")}
          value={input}
          onChange={inputChange}
          onKeyDown={handleKeyPress}
        />
        <LuSearch className="input-icon" onClick={searchClick} />
      </div>
      <div className="right">
        <div className="help">
          <SlQuestion className="help-icon" />
          <h3>{t('Help')}</h3>
        </div>
        <div className="lang">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default Header;

