import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '@/components/ui/InputField';

const JoinPage = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailAlert, setEmailAlert] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const nicknameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nav = useNavigate();

  const dummyEmails = ['test@naver.com']; // 더미 이메일

  // 로그인 버튼 활성화 여부
  const isLoginEnabled =
    nickname.trim() !== '' &&
    isValidEmail(email) &&
    isEmailValid &&
    password.trim() !== '' &&
    password === confirmPassword;

  // 이메일 정규식
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // 이메일 input 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(false);
    setEmailAlert('');
  };

  // 이메일 중복 확인 (더미 데이터)
  const checkEmailDuplicate = async () => {
    if (!isValidEmail(email)) {
      setEmailAlert('올바른 이메일을 입력해주세요.');
      setIsEmailValid(false);
      return;
    }

    setEmailAlert('');

    if (dummyEmails.includes(email)) {
      setEmailAlert('이메일이 중복되었습니다.');
      setEmail('');
      setIsEmailValid(false);
    } else {
      setEmailAlert('사용할 수 있는 이메일입니다.');
      setIsEmailValid(true);
    }
  };

  // 비밀번호 input 핸들러
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (confirmPassword && confirmPassword !== value) {
      setPasswordError('비밀번호가 다릅니다.');
    } else {
      setPasswordError('');
    }
  };

  // 비밀번호 확인 input 핸들러
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (password !== value) {
      setPasswordError('비밀번호가 다릅니다.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[28px] flex gap-3">
          <div className="w-2 h-2 rounded-full bg-[#BC56F3]" />
          <div className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
        </div>
      </div>
      <div className="relative px-[45px] mt-5 z-10">
        <p className="text-[22px] leading-[30px] font-bold z-10">킷챠와 함께라면</p>
        <p className="text-[22px] leading-[30px] font-bold z-10">복잡한 뉴스도 쉽고 재밌게!</p>
        <div className="absolute top-[47px] left-[176px] w-[117px] h-3 bg-[#BC56F3] opacity-[25%] z-20" />

        <p className="text-[#4b4b4b] text-[12px] font-[300] mt-[9px]">
          AI가 추천해주는 뉴스를 읽고 나의 취향을 탐색해봐요
        </p>
        <p className="text-[#4b4b4b] text-[12px] font-[300]">
          사람들과 공유하며 마음에 드는 뉴스 요약본을 저장해요
        </p>

        {/* 닉네임 */}
        <div className="mt-[73px]">
          <InputField
            placeholder="닉네임을 입력해주세요"
            ref={nicknameRef}
            label="닉네임"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          {/* Email */}
          <div className="relative mt-[46px]">
            <InputField
              placeholder="이메일을 입력해주세요"
              ref={emailRef}
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              onClick={checkEmailDuplicate}
              className={`${
                isEmailValid ? 'bg-[#F1D8FF]' : 'bg-white'
              } transition duration-300 cursor-pointer absolute bottom-[5px] right-0 w-[39px] h-[25px] shadow-[inset_0_0_0_1px_#1b1b1b] rounded-[20px] text-[12px]`}
            >
              확인
            </button>
            {emailAlert && (
              <p
                className={`absolute text-[10px] bottom-[-18px] left-[7px] ${
                  isEmailValid ? 'text-[#BC56F3]' : 'text-[#FF4E4E]'
                }`}
              >
                {emailAlert}
              </p>
            )}
          </div>
          {/* PW */}
          <div className="mt-[46px]">
            <InputField
              placeholder="비밀번호를 입력해주세요"
              ref={passwordRef}
              label="PW"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {/* PW 확인 */}
          <div className="relative mt-[46px]">
            <InputField
              placeholder="한 번 더 입력해주세요"
              ref={confirmPasswordRef}
              label="PW 확인"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {passwordError && (
              <p className="absolute text-[#FF4E4E] text-[10px] bottom-[-18px] left-[7px]">
                {passwordError}
              </p>
            )}
            {/* 🔥 에러 메시지 */}
          </div>

          {/* Login */}
          <div className="w-full flex justify-center">
            <button
              disabled={!isLoginEnabled}
              onClick={() => nav('/mypick')}
              className={`${
                isLoginEnabled ? 'cursor-pointer' : 'cursor-default opacity-30'
              } mt-[78px] justify-center transition duration-300 bg-linear-[90deg,#BC56F3_0%,#9566D5_100%] z-[10] flex items-center w-[100px] h-[54px] rounded-[50px]`}
            >
              <span className="text-white font-[400] text-[20px]">다음</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinPage;
