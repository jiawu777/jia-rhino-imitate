import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/router';

const useNavigationData = () => {
  const { t } = useTranslation();
  const NavigationListTitle = [
    {
      id: 'n1',
      title: t('navigation:n1.title'),
      path: '',
    },
    {
      id: 'n2',
      title: t('navigation:n2.title'),
      path: '',
    },
    {
      id: 'n3',
      title: t('navigation:n3.title'),
      path: '',
    },
    {
      id: 'n4',
      title: t('navigation:n4.title'),
      path: '',
    },
    {
      id: 'n5',
      title: t('navigation:n5.title'),
      path: '',
    },
    {
      id: 'n6',
      title: t('navigation:n6.title'),
      path: ROUTES.About,
    },
    {
      id: 'n7',
      title: t('navigation:n7.title'),
      path: ROUTES.Policy,
    },
  ];
  return {
    NavigationListTitle,
  };
};

export { useNavigationData };
