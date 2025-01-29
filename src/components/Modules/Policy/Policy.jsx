import { useEffect } from 'react';
import { usePolicyData } from '@/hooks/usePolicyData';
import './Policy.scss';

const Policy = () => {
  const { PolicyList, PolicyTitle } = usePolicyData();

  const forMapRule = (item) => {
    return (
      <li key={item.id}>
        <label>{item.section}</label>
        <div className="policy__text policy__text--title">{item.title}</div>
        <div className="policy__text policy__text--content">{item.content}</div>
      </li>
    );
  };

  const child = PolicyList.map(forMapRule);

  const updateLocalStorageData = () => {
    //如果有userInfo 解開userInfo的JSON檔
    const userInfo = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : [];
    //const sampleData = { id: 'policy', count: 0 };

    console.log('mounted:', userInfo);
    return () => {
      console.log('destroy', userInfo);
      const hasData = userInfo.find((item) => item.id === 'policy');
      let newUserInfo = [...userInfo];
      if (hasData) {
        newUserInfo = userInfo.map((item) => {
          const newItem = { ...item };
          if (item.id === 'policy') {
            newItem.count = item.count + 1;
          }
          return newItem;
        });
      } else {
        const sampleData = { id: 'policy', count: 1 };
        newUserInfo.push(sampleData);
      }
      localStorage.setItem('userInfo', JSON.stringify(newUserInfo)); //JSON.stringify 把資料JSON化
    };
  };

  useEffect(updateLocalStorageData, []);

  return (
    <div className="policy">
      <div className="policy__wrapper">
        <h1 className="policy__pageTitle">{PolicyTitle}</h1>
        <h2 className="policy__pageTitle policy__pageTitle--subtitle">{PolicyTitle}</h2>
        <ul className="policy__text">{child}</ul>
      </div>
    </div>
  );
};

export default Policy;
