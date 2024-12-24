import { useRouter } from '@/router';
import './Header.scss';
import TemplatePolicy from './Template/TemplatePolicy';
import TemplateAbout from './Template/TemplateAbout';

const Header = () => {
  const router = useRouter();
  const { pathname: location } = router;
  return location === '/policy' ? <TemplatePolicy /> : <TemplateAbout />;
};

export default Header;
