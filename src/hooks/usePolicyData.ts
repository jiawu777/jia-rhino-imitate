import { useTranslation } from 'react-i18next';

const usePolicyData = () => {
  const { t } = useTranslation();
  const PolicyList = [
    {
      id: 'p1',
      section: t('policy:p1.section'),
      title: t('policy:p1.title'),
      content: t('policy:p1.content'),
    },
    {
      id: 'p2',
      section: t('policy:p2.section'),
      title: t('policy:p2.title'),
      content: t('policy:p2.content'),
    },
  ];
  return {
    PolicyList,
  };
};

export { usePolicyData };
