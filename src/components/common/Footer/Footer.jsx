import { FooterTextItem } from '@/constants/conFooter';
import './Footer.scss';

const Footer = () => {
  const forMapFooterTextItem = (item, index) => {
    return <li key={index}>{item}</li>;
  };
  const child = FooterTextItem.map(forMapFooterTextItem);
  return <div className="footer__wrapper">{child}</div>;
};

export default Footer;
