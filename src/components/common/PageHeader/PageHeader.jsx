import './PageHeader.scss';
import bgHeader from '@images/pageHeader/1.jpg';

const PageHeader = () => {
  const title = '每一個世界 都值得保護';

  return (
    <section className="pageHeader">
      <div
        className="pageHeader__wrapper"
        style={{ background: `url(${bgHeader})` }}
      >
        {title}
      </div>
    </section>
  );
};

export default PageHeader;
