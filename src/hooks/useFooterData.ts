import { useTranslation } from 'react-i18next';

const useFooterData = () => {
  const { t } = useTranslation();
  const FooterCompany = t('footer:company');
  const FooterCopyright = t('footer:copyright');
  return {
    FooterCompany,
    FooterCopyright,
  };
};

export { useFooterData };
