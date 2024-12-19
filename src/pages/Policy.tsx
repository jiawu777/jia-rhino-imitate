import { Layout, LayoutHeader, LayoutMain, LayoutFooter, LayoutPageHeader } from '@/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import Policy from '@/components/Modules/Policy';

const PagePolicy = () => {
  return (
    <Layout>
      <LayoutHeader />
      <LayoutPageHeader>
        <PageHeader />
      </LayoutPageHeader>
      <LayoutMain>
        <Policy />
      </LayoutMain>
      <LayoutFooter />
    </Layout>
  );
};

export default PagePolicy;
