import { useState } from 'react';
import { changeLanguage } from 'i18next';
import { useRouter } from '@/router';
import { LanguageType } from '@/i18n';
import { NavigationListAbout, NavigationListPolicy } from '@/constants/conNavigation';
import './Header.scss';
import logoFull from '@images/Header/logoFull.svg';

const Header = () => {
  const router = useRouter();
  const { pathname: location, navigate } = router;
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
  const child =
    location === '/policy'
      ? NavigationListPolicy.map(forMapNavigationItem)
      : NavigationListAbout.map(forMapNavigationItem);

  const button = location === '/policy' ? '' : `來去逛逛 →`;

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
            className={`header__btn ${
              location === '/policy' ? 'header__btn--policy' : 'header__btn--about'
            }`}
          >
            {button}
          </button>

          <button onClick={handleChangeLanguage}>切語系</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
