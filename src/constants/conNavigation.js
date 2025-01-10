import { ROUTES } from '@/router';

const NavigationList = [
  {
    id: 'n1',
    title: '特別活動',
    path: '',
  },
  {
    id: 'n2',
    title: '型號地圖',
    path: '',
  },
  {
    id: 'n3',
    title: '產品',
    path: '',
  },
  {
    id: 'n4',
    title: '設計款工坊',
    path: '',
  },
  {
    id: 'n5',
    title: '客製化設計',
    path: '',
  },
  {
    id: 'n6',
    title: 'About',
    path: ROUTES.About,
  },
  {
    id: 'n7',
    title: 'Policy',
    path: ROUTES.Policy,
  },
];

const NavigationPic = [
  { id: 'n1', img: 'src/assets/images/Header/menuIcon/imgh1.png' },
  { id: 'n2', img: 'src/assets/images/Header/menuIcon/imgh2.png' },
  { id: 'n3', img: 'src/assets/images/Header/menuIcon/imgh3.png' },
  { id: 'n4', img: 'src/assets/images/Header/menuIcon/imgh4.png' },
];

const cursorImg = 'src/assets/images/Header/cursor.png';

export { NavigationList, NavigationPic, cursorImg };
