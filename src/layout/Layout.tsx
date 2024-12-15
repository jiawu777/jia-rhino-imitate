import './Layout.scss';
import { use100vh } from 'react-div-100vh';
import Footer from '@/components/common/Footer';

interface IProps {
  children?: React.ReactNode;
}

const Layout = (props: IProps) => {
  const { children } = props;
  const height = use100vh() as number;
  return (
    <section className="layout">
      <section
        className="layout__wrapper"
        style={{ height }}
      >
        {children}
      </section>
    </section>
  );
};

const LayoutHeader = (props: IProps) => {
  const { children } = props;
  return <header className="layout__header">{children}</header>;
};

const LayoutPageHeader = (props: IProps) => {
  const { children } = props;
  return <header className="layout__pageHeader">{children}</header>;
};

const LayoutNavBar = (props: IProps) => {
  const { children } = props;
  return <section className="layout__navBar">{children}</section>;
};

const LayoutMain = (props: IProps) => {
  const { children } = props;
  return <main className="layout__main">{children}</main>;
};

const LayoutFooter = () => {
  return (
    <footer className="layout__footer">
      <Footer />
    </footer>
  );
};

export { Layout, LayoutHeader, LayoutPageHeader, LayoutNavBar, LayoutMain, LayoutFooter };
