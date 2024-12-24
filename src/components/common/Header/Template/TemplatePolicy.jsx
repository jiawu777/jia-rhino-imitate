import { useState } from 'react';
import { changeLanguage } from 'i18next';
import { useRouter } from '@/router';
import { LanguageType } from '@/i18n';
import { NavigationListPolicy } from '@/constants/conNavigation';
import '../Header.scss';
import logoFull from '@images/Header/logoFull.svg';

const TemplatePolicy = () => {
  const router = useRouter();
  const { navigate } = router;
  const forMapNavigationItem = (item, index) => {
    return (
      <li
        key={item.id}
        className={`header__menuItem ${
          index + (1 % 2) === 0 ? 'header__menuItem--even' : 'header__menuItem--odd'
        }`}
        onClick={() => navigate(item.path)}
      >
        {item.title}
      </li>
    );
  };
  const child = NavigationListPolicy.map(forMapNavigationItem);

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
  return (
    <section className="header">
      <div className="header__wrapper">
        <div className="header__area header__area--logo">
          <img src={logoFull} />
        </div>
        <div className="header__area  header__area--tool">
          <ul className="header__menuList">{child}</ul>
          <button
            className="header__btn header__btn--changelanguage"
            onClick={handleChangeLanguage}
          >
            {buttoncl}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplatePolicy;
