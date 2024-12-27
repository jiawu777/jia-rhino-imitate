import { useState } from 'react';
import { changeLanguage } from 'i18next';
import { useRouter } from '@/router';
import { LanguageType } from '@/i18n';
import { NavigationListPolicy, NavigationPic } from '@/constants/conNavigation';
import '../Header.scss';
import logoFull from '@images/Header/logoFull.svg';
import logoShort from '@images/Header/logoShort.svg';

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
  const childNav = NavigationListPolicy.map(forMapNavigationItem);

  const forMapNavigationPic = (item) => {
    return (
      <img
        key={item.id}
        className="header__menuList--icon"
        src={item.img}
        width="24px"
        height="24px"
      />
    );
  };
  const childPic = NavigationPic.map(forMapNavigationPic);

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
          <picture>
            <source
              media="(min-width:1200px)"
              srcSet={logoFull}
            />
            <source
              media="(min-width:1px)"
              srcSet={logoShort}
            />
            <img
              src={logoFull}
              alt="My default image"
            />
          </picture>
        </div>
        <div className="header__area  header__area--tool">
          <ul className="header__menuList">{childNav}</ul>
          <ul className="header__menuList">{childPic}</ul>
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
