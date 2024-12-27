import { useState } from 'react';
import { changeLanguage } from 'i18next';
import { FooterTextItem } from '@/constants/conFooter';
import { LanguageType } from '@/i18n';
import './Footer.scss';

const Footer = () => {
  const forMapFooterTextItem = (item, index) => {
    return <li key={index}>{item}</li>;
  };
  const buttoncl = `切換語系`;

  const [lang, setLang] = useState(LanguageType.ZH_CN);

  const handleChangeLanguage = () => {
    let newLang = '';
    if (lang === LanguageType.EN) {
      newLang = LanguageType.ZH_CN;
    } else {
      newLang = LanguageType.EN;
    }
    setLang(newLang);
    changeLanguage(newLang);
  };
  const child = FooterTextItem.map(forMapFooterTextItem);
  return (
    <div className="footer__wrapper">
      {child}
      <button
        className="footer__btn footer__btn--changelanguage"
        onClick={handleChangeLanguage}
      >
        {buttoncl}
      </button>
    </div>
  );
};

export default Footer;
