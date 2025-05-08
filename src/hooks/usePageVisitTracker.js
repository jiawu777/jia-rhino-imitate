import { useRef, useEffect } from 'react';
import { z } from 'zod';

const userInfoSchema = z.array(
  z.object({
    id: z.string(),
    count: z.number(),
  })
);
const usePageVisitTracker = (currentPage) => {
  const firstRender = useRef(true);
  const intervalIdTimer = useRef(null);

  //取得userInfo
  const rawUserInfo = localStorage.getItem('userInfo');
  let parsedUserInfo = [];

  try {
    const data = rawUserInfo ? JSON.parse(rawUserInfo) : [];
    parsedUserInfo = userInfoSchema.parse(data);
  } catch (error) {
    console.warn('Invalid userInfo format, resetting to empty array.');
  }

  //如果有userInfo 解開userInfo的JSON檔
  const userInfoRef = useRef(parsedUserInfo);

  //更新 localStorage
  const updateLocalStorageData = () => {
    const hasData = userInfoRef.current.find((item) => item.id === currentPage);

    //若沒有userInfo，新增userInfo
    if (!hasData) {
      userInfoRef.current.push({ id: currentPage, count: 0 });
    }

    localStorage.setItem('userInfo', JSON.stringify(userInfoRef.current)); //JSON.stringify 把資料JSON化
    //};

    //確保Interval正確
    clearInterval(intervalIdTimer.current);
    intervalIdTimer.current = setInterval(() => {
      userInfoRef.current = userInfoRef.current.map((item) =>
        item.id === currentPage ? { ...item, count: item.count + 1 } : item
      );
      localStorage.setItem('userInfo', JSON.stringify(userInfoRef.current));
    }, 5000);
  };

  useEffect(() => {
    //如果非第一次執行就return不運作
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    updateLocalStorageData();
    return () => clearInterval(intervalIdTimer.current);
  }, [currentPage]);
};

export default usePageVisitTracker;
