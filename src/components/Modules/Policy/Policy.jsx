import { useEffect, useRef } from 'react';
import { useRouter } from '@/router';
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

  const { location } = useRouter();
  const currentPage = location.pathname.slice(1).toString();
  const firstRender = useRef(true);
  const updateLocalStorageData = () => {
    //如果非第一次執行就return不運作
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    //如果有userInfo 解開userInfo的JSON檔
    const userInfo = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : [];
    // const sampleData = { id: 'policy', count: 0 };
    // console.log('mounted:', userInfo);
    // console.log('mounted location:', location.pathname);

    // Ｑ1:以下是否正確？
    // 因為寫在destroy的clear func階段，在第1次render頁面時會跑完一次生命週期，在跑下一次時透過dependency暫時停止運轉，但已經mount產生clear func。
    // 但下次跳轉頁面render又再度執行舊的clear func，所以會跳到別的頁面的時候又加一次count，所以不能寫在clear func (return)。
    // return () => {
    // console.log('destroy', userInfo);
    // console.log('destroy location:', location.pathname);
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
    // };
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
