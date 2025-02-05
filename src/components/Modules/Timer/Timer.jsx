import { useState, useEffect, useRef } from 'react';
import { useRouter } from '@/router';
import { useTimerData } from '@/hooks/useTimerData';
import './Timer.scss';

const Timer = () => {
  const { TimerStart, TimerStop, TimerReset } = useTimerData(); //改名字 useTimerhook

  // Timer Switch
  const [timerSwitch, setTimerSwitch] = useState(false);
  const switchTimer = () => {
    const newTimerSwitch = !timerSwitch;
    setTimerSwitch(newTimerSwitch);
  };

  // timing
  const [timer, setTimer] = useState(0);
  const intervalIdTimer = useRef();

  //RefTimer可以計時但無法即時渲染畫面，可用於使用者流程計時器提升使用感
  // const refTimer = useRef(0);

  useEffect(() => {
    if (timerSwitch) {
      intervalIdTimer.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
        // refTimer.current = refTimer.current+1
      }, 1000);
    } else {
      clearInterval(intervalIdTimer.current);
    }

    // destroy
    return () => clearInterval(intervalIdTimer.current);
  }, [timerSwitch]);

  const resetTimer = () => {
    setTimer(0);
    clearInterval(intervalIdTimer.current);
    setTimerSwitch(false);
  };

  //計算網頁點擊次數
  //擷取所在頁面文字
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
    <div className="timer">
      <div className="timer__wrapper">
        <div className="timer__display">{timer}</div>
        <div className="timer__btn">
          <button
            className="timer__btn timer__btn--switch"
            onClick={switchTimer}
          >
            {timerSwitch ? TimerStop : TimerStart}
          </button>
          <button
            className="timer__btn timer__btn--reset"
            onClick={resetTimer}
          >
            {TimerReset}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
