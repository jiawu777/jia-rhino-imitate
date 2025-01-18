import { useState } from 'react';
import { useRouter } from '@/router';
import { useNavigationData } from '@/hooks/useNavigationData';
import './Header.scss';
import logoFull from '@images/Header/logoFull.svg';
import logoShort from '@images/Header/logoShort.svg';

const Header = () => {
  const router = useRouter();
  const { navigate } = router;
  const { NavigationListTitle, NavigationIcon } = useNavigationData();

  // dropdown controller
  const [open, setOpen] = useState(false);
  const toggleDropOpen = () => {
    setOpen((open) => !open);
  };

  // vertical dropdown titles
  const forMapSelectItem = (item, index) => {
    return (
      <li
        key={item.id}
        className={`header__dropdown`}
        value={index}
        onClick={() => navigate(item.path)}
      >
        {item.title}
      </li>
    );
  };
  const childDrop = NavigationListTitle.map(forMapSelectItem);

  // horizontal navbar titles
  const forMapNavigationItem = (item) => {
    return (
      <li
        key={item.id}
        className={`header__menuItem`}
        onClick={() => navigate(item.path)}
      >
        {item.title}
      </li>
    );
  };
  const childNav = NavigationListTitle.map(forMapNavigationItem);

  // header Icon  buttons
  const forMapIcon = (item, index) => {
    return (
      <img
        key={item.id}
        className={`header__icon ${index + 1 === NavigationIcon.length ? 'header__icon--end' : ''}`}
        src={item.img}
        width="24px"
        height="24px"
        onClick={index + 1 === NavigationIcon.length ? toggleDropOpen : undefined}
      />
    );
  };
  const childIcon = NavigationIcon.map(forMapIcon);

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
          <button className="header__menuList header__btn">{childIcon}</button>
        </div>
      </div>
      <div className={`header__dropdownContainer ${open ? 'header__dropdownContainer--open' : ''}`}>
        <ul className={`header__dropList`}>{childDrop}</ul>
      </div>
    </section>
  );
};

export default Header;
