import { NavigationListAbout, NavigationListPolicy } from '@/constants/conNavigation';
import './Header.scss';
import logoFull from '@images/Header/logoFull.svg';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname.toString();
  const forMapNavigationItem = (item, index) => {
    return (
      <li
        key={item.id}
        className={`header__menuItem ${
          index + (1 % 2) === 0 ? 'header__menuItem--even' : 'header__menuItem--odd'
        }`}
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
        </div>
      </div>
    </section>
  );
};

export default Header;
