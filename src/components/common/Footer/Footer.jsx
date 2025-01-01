import { useState } from 'react';
import { changeLanguage } from 'i18next';
import { LanguageType } from '@/i18n';
import { useFooterData } from '@/hooks/useFooterData';
import './Footer.scss';

const Footer = () => {
  const { FooterCompany, FooterCopyright } = useFooterData();
  console.log(FooterCompany, FooterCopyright);
  // const forMapFooterTextItem = (item, index) => {
  //   return <li key={index}>{item}</li>;
  // };

  const buttoncl = `切換語系`;
  const [lang, setLang] = useState(LanguageType.ZH_TW);
  const handleChangeLanguage = () => {
    let newLang = '';
    if (lang === LanguageType.EN) {
      newLang = LanguageType.ZH_TW;
    } else {
      newLang = LanguageType.EN;
    }
    setLang(newLang);
    changeLanguage(newLang);
  };
  // const child = FooterTextItem.map(forMapFooterTextItem);
  return (
    <div className="footer__wrapper">
      <div className="footer__info">
        {FooterCompany}
        {FooterCopyright}
      </div>
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
