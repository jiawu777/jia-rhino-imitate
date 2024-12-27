import { useRouter } from '@/router';
import { NavigationListAbout } from '@/constants/conNavigation';
import '../Header.scss';
import logoFull from '@images/Header/logoFull.svg';
import logoShort from '@images/Header/logoShort.svg';

const TemplateAbout = () => {
  const router = useRouter();
  const { navigate } = router;
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
  const child = NavigationListAbout.map(forMapNavigationItem);

  const buttongo = `來去逛逛 →`;

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
          <ul className="header__menuList">{child}</ul>
          <button className="header__btn header__btn--about">{buttongo}</button>
        </div>
      </div>
    </section>
  );
};

export default TemplateAbout;
