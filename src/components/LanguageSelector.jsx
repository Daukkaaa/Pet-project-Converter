import React, { useState } from "react";
import i18n from '../i18n';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);  
    setSelectedLanguage(e.target.value);
  }

  return (
    <select className="select-language" defaultValue={selectedLanguage} onChange={chooseLanguage}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  );
};

export default LanguageSelector;
