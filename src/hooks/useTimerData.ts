import { useTranslation } from 'react-i18next';

const useTimerData = () => {
  const { t } = useTranslation();
  const TimerStart = t('timer:start');
  const TimerStop = t('timer:stop');
  const TimerReset = t('timer:reset');

  return {
    TimerStart,
    TimerStop,
    TimerReset,
  };
};

export { useTimerData };
