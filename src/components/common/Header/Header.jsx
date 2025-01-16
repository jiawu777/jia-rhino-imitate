import { useRouter } from '@/router';
import { useNavigationData } from '@/hooks/useNavigationData';
import './Header.scss';
import logoFull from '@images/Header/logoFull.svg';
import logoShort from '@images/Header/logoShort.svg';

const Header = () => {
  const router = useRouter();
  const { navigate } = router;
  const { NavigationListTitle, NavigationIcon } = useNavigationData();

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

  // vertical select titles
  const forMapSelectItem = (item, index) => {
    return (
      <option
        className={`header__selectItem`}
        value={index}
        onClick={() => navigate(item.path)}
      >
        {item.title}
      </option>
    );
  };
  const childSelect = NavigationListTitle.map(forMapSelectItem);

  // header Icons
  const forMapIcon = (item, index) => {
    return (
      <img
        key={item.id}
        className={`header__icon ${index + 1 === NavigationIcon.length ? 'header__icon--end' : ''}`}
        src={item.img}
        width="24px"
        height="24px"
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
          <ul className="header__menuList">{childIcon}</ul>
          <div className="header__select">
            <select className="header__select--select">{childSelect}</select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
