import { useRef, useEffect } from 'react';
import { useRouter } from '@/router';
import { useAboutData } from '@/hooks/useAboutData';
import './About.scss';

const About = () => {
  const { AboutList, AboutIntro } = useAboutData();
  const forMapItem = (item, index) => {
    return (
      <li
        key={`item${index}`}
        className={`about__item  about__item${(index + 1) % 2 === 0 ? '--even' : '--odd'}
            ${index + 1 === AboutList.length ? 'about__item--end' : ''}`}
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
  const child = AboutList.map(forMapItem);

  const { location } = useRouter();
  const currentPage = location.pathname.slice(1).toString();

  //如果非第一次執行就return不運作
  const firstRender = useRef(true);
  const updateLocalStorageData = () => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    //如果有userInfo 解開userInfo的JSON檔
    const userInfo = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : [];
    //如果沒資料就創造一個，預設值1
    const hasData = userInfo.find((item) => item.id === currentPage);
    let newUserInfo = [...userInfo];
    if (hasData) {
      newUserInfo = userInfo.map((item) => {
        const newItem = { ...item };
        if (item.id === currentPage) {
          newItem.count = item.count + 1;
        }
        return newItem;
      });
    } else {
      const sampleData = { id: currentPage, count: 1 };
      newUserInfo.push(sampleData);
    }
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo)); //JSON.stringify 把資料JSON化
  };

  useEffect(updateLocalStorageData, []);

  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__info">{AboutIntro}</div>
        <ul className="about__list">{child}</ul>
      </div>
    </div>
  );
};

export default About;
