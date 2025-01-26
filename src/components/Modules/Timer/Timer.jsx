import { useState, useEffect, useRef } from 'react';
import { useTimerData } from '@/hooks/useTimerData';
import './Timer.scss';

const Timer = () => {
  const { TimerStart, TimerStop, TimerReset } = useTimerData();

  // Timer Switch
  const [timerSwitch, setTimerSwitch] = useState(false);
  const switchTimer = () => {
    const newTimerSwitch = !timerSwitch;
    setTimerSwitch(newTimerSwitch);
  };

  // timing
  const [timer, setTimer] = useState(0);
  const currentTimer = useRef();

  useEffect(() => {
    if (timerSwitch) {
      currentTimer.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(currentTimer.current);
    }

    // destroy
    return () => clearInterval(currentTimer.current);
  }, [timerSwitch]);
  const resetTimer = () => {
    setTimer(0);
    clearInterval(currentTimer.current);
    setTimerSwitch(false);
  };

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
