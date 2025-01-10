import bgHeader from '@images/pageHeader/1.jpg'; //待解決1：div 的 style 無法使用 background-image
import { usePageHeaderData } from '@/hooks/usePageHeaderData';
import './PageHeader.scss';

const PageHeader = () => {
  const { PageHeaderTitle } = usePageHeaderData();
  const title = PageHeaderTitle;

  return (
    <section className="pageHeader">
      <div className="pageHeader__wrapper">
        <div className="pageHeader__title">{title}</div>
      </div>
    </section>
  );
};

export default PageHeader;
