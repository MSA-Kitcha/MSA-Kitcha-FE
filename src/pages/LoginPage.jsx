import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import kitcha from '@/assets/webps/login/kitcha.webp';
import ball1 from '@/assets/webps/login/ball1.webp';
import ball2 from '@/assets/webps/login/ball2.webp';
import rightArrowBlack from '@/assets/webps/login/rightArrowBlack.webp';
import rightArrowWhite from '@/assets/webps/common/rightArrowWhite.webp';
import balls from '@/assets/webps/login/balls.webp';
import InputField from '@/components/ui/InputField';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nav = useNavigate();

  return (
    <>
      <div className="relative bg-gray-100 min-h-screen w-full flex flex-col items-center">
        <div className="font-nanum tracking-[-0.4px] min-h-[100vh] relative flex flex-col min-w-[360px] w-full max-w-[440px] bg-white">
          <main>
            {/* 제목 */}
            <h1 className="flex justify-between mt-[78px]">
              <div className="">
                <span className="text-[16px] ml-10 text-[#1b1b1b]">뉴스를 보는 새로운 방법,</span>
                <img className="w-[205px] h-[66px] ml-10 mt-2" src={kitcha} alt="kitcha logo" />
              </div>
              <div className="w-[90px] h-[100px] relative mr-7">
                <img className="absolute top-0 left-0 w-[60px] h-[60px]" src={ball1} alt="ball" />
                <img
                  className="absolute bottom-0 right-0 w-[54px] h-[54px]"
                  src={ball2}
                  alt="ball"
                />
              </div>
            </h1>

            <div className="w-full px-[45px] mt-[96px]">
              {/* Email */}
              <InputField
                ref={emailRef}
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* PW */}
              <div className="mt-[46px]">
                <InputField
                  ref={passwordRef}
                  label="PW"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Join & Login */}
              <div className="mt-[47px] flex justify-between">
                {/* Join */}
                <div className="z-[10] flex flex-col">
                  <p className="text-[#939393] text-[12px]">
                    <span className="text-[#BC56F3]">킷챠</span>는 처음이에요
                  </p>
                  <p
                    onClick={() => nav('/join')}
                    className="mt-[5px] flex items-center cursor-pointer"
                  >
                    <img className="w-4 h-4" src={rightArrowBlack} alt="right arrow" />
                    <span className="text-[#393939] ml-[3px] text-[14px]">회원가입</span>
                  </p>
                </div>
                {/* Login */}
                <div
                  onClick={() => nav('/home')}
                  className="z-[10] flex items-center w-[124px] h-[54px] rounded-[50px] bg-linear-[90deg,#BC56F3_0%,#9566D5_100%] cursor-pointer"
                >
                  <span className="text-white font-[400] text-[20px] ml-5">Login</span>
                  <img className="ml-[5px] w-6 h-6" src={rightArrowWhite} alt="right arrow" />
                </div>
              </div>
            </div>
            {/* balls */}
            <img
              className="pointer-events-none left-1/2 -translate-x-1/2 w-[384px] fixed bottom-0"
              src={balls}
              alt="balls"
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
