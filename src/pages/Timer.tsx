import { Layout, LayoutHeader, LayoutMain, LayoutFooter } from '@/layout/Layout';
import Timer from '@/components/Modules/Timer';

const PageTimer = () => {
  return (
    <Layout>
      <LayoutHeader />
      <LayoutMain>
        <Timer />
      </LayoutMain>
      <LayoutFooter />
    </Layout>
  );
};

export default PageTimer;
