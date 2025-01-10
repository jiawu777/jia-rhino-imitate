import { useTranslation } from 'react-i18next';

const useAboutData = () => {
  const { t } = useTranslation();
  const AboutIntro = t('about:intro');
  const AboutList = [
    {
      id: 'a1',
      title: t('about:a1.title'),
      p: t('about:a1.p'),
      img: 'src/assets/images/About/img1.jpg',
    },
    {
      id: 'a2',
      title: t('about:a2.title'),
      p: t('about:a2.p'),
      img: 'src/assets/images/About/img2.jpg',
    },
    {
      id: 'a3',
      title: t('about:a3.title'),
      p: t('about:a3.p'),
      img: 'src/assets/images/About/img3.jpg',
    },
    {
      id: 'a4',
      title: t('about:a4.title'),
      p: t('about:a4.p'),
      img: 'src/assets/images/About/img4.jpg',
    },
    {
      id: 'a5',
      title: t('about:a5.title'),
      p: t('about:a5.p'),
      img: 'src/assets/images/About/img5.jpg',
    },
    {
      id: 'a6',
      title: t('about:a6.title'),
      p: t('about:a6.p'),
      img: 'src/assets/images/About/img6.jpg',
    },
    {
      id: 'a7',
      title: t('about:a7.title'),
      p: t('about:a7.p'),
      img: 'src/assets/images/About/img7.jpg',
    },
    {
      id: 'a8',
      title: t('about:a8.title'),
      p: t('about:a8.p'),
      img: 'src/assets/images/About/img8.jpg',
    },
  ];
  return { AboutList, AboutIntro };
};

export { useAboutData };
