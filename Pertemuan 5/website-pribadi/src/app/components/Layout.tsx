import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  pageId?: string; 
};

export default function Layout({ children, pageId }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main id={pageId}>{children}</main> 
      <Footer />
    </>
  );
}