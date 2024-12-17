import { sectionList, intro } from '@/constants/conAbout';
import './About.scss';

const About = () => {
  const forMapItem = (item, index) => {
    return (
      <li
        key={`item${index}`}
        className={`about__item  about__item${(index + 1) % 2 === 0 ? '--even' : '--odd'}
            ${index + 1 === sectionList.length ? 'about__item--end' : ''}`}
      >
        <div className="about__desArea">
          <pre className="about__desLabel">{item.title}</pre>
          <p className="about__desTxt">{item.p}</p>
        </div>
        <div className="about__imgArea">
          <img
            className="about__img"
            src={item.img}
            alt="Img"
          />
        </div>
      </li>
    );
  };
  const child = sectionList.map(forMapItem);
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__info">{intro}</div>
        <ul className="about__list">{child}</ul>
      </div>
    </div>
  );
};

export default About;
