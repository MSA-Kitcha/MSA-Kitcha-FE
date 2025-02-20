import { useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/webps/layout/logo.webp';
import prevBtn from '@/assets/webps/layout/prevBtn.webp';

const Header = () => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full h-[54px] bg-white fixed top-0 flex items-center">
      <div className="flex ml-4 items-center">
        {location.pathname !== '/home' && (
          <img
            className="mr-2 w-6 h-6 cursor-pointer"
            onClick={() => nav(-1)}
            src={prevBtn}
            alt="prev btn"
          />
        )}
        <img
          className="w-[101px] h-[30px] cursor-pointer"
          onClick={() => nav('/home')}
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
