import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const isNewsList = location.pathname == '/news';

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100">
      <div className="relative flex flex-col min-w-[360px] w-full max-w-[440px]">
        <Header />
        <main
          className={`font-nanum tracking-[-0.4px] w-full mt-[54px] min-h-[calc(100vh-54px)] ${
            isNewsList ? 'bg-transparent' : 'bg-white'
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
