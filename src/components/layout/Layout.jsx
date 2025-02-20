import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="relative flex flex-col min-w-[360px] w-full max-w-[440px]">
        <Header />
        <main className="w-full min-h-[calc(100vh-54px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
