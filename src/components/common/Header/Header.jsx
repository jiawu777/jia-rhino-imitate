import { NavigationListAbout, NavigationListPolicy } from '@/constants/conNavigation';
import './Header.scss';
import logoFull from '@images/Header/logoFull.svg';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname.toString();
  console.log(location);

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

  return (
    <section className="header">
      <div className="header__wrapper">
        <div className="header__area header__area--logo">
          <img src={logoFull} />
        </div>
        <div className="header__area  header__area--tool">
          <ul className="header__menuList">{child}</ul>
          <button className="btn">來去逛逛 →</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
