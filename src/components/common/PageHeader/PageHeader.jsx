import './PageHeader.scss';
import bgHeader from '@images/pageHeader/1.jpg'; //待解決1：div 的 style 無法使用 background-image

const PageHeader = () => {
  const title = '每一個世界 都值得保護';

  return (
    <section className="pageHeader">
      <div className="pageHeader__wrapper">
        <div className="pageHeader__title">{title}</div>
      </div>
    </section>
  );
};

export default PageHeader;
