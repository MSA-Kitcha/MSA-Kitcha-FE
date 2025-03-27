import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '@/apis/instance';
import InputField from '@/components/ui/InputField';

export default function Mypage() {
  const [nickname, setNickname] = useState('');
  const [nicknameAlert, setNicknameAlert] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const nicknameRef = useRef(null);
  const nav = useNavigate();

  // 닉네임 input 핸들러
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    setIsNicknameValid(false);
    setNicknameAlert('');
  };

  // 닉네임 중복 확인
  const checkNicknameDuplicate = async () => {
    setNicknameAlert('');

    try {
      await instance.get(`/authentication/users/nickname-check?nickname=${nickname}`);
      setNicknameAlert('사용할 수 있는 닉네임입니다.');
      setIsNicknameValid(true);
    } catch (error) {
      if (error.response?.status === 409) {
        setNicknameAlert('중복된 닉네임입니다.');
        setIsNicknameValid(false);
      } else {
        console.error('닉네임 중복 확인 실패:', error);
        setNicknameAlert('닉네임 확인 중 오류가 발생했습니다.');
        setIsNicknameValid(false);
      }
    }
  };

  // '저장' 버튼 (함수 수정해야 됨!!!!!)
  const handleNextBtnClick = async () => {
    try {
      const response = await instance.post('/authentication/users/mypage', {
        nickname,
      });

      // JWT 토큰 헤더에서 가져오기
      const token = response.headers['authorization'];
      if (!token) throw new Error('토큰이 없습니다.');

      const { role } = response.data;

      console.log('회원가입 성공:', response.data.message);
      // sessionStorage에 저장
      sessionStorage.setItem('jwtToken', token);
      sessionStorage.setItem('role', role);

      nav('/mypick');
    } catch (error) {
      const errorMessage = error.response?.data?.message || '회원가입에 실패했습니다.';
      console.error('회원가입 오류:', errorMessage);
    }
  };

  // 다음 버튼 활성화 여부
  const isNextBtnEnabled = nickname.trim() !== '';
  return (
    <>
      <div className="relative px-[45px] mt-5 z-10">
        <p className="text-[22px] leading-[30px] font-bold z-10">마이페이지</p>
        <p className="text-[#4b4b4b] text-[12px] font-[300] mt-[9px]">
          게시판에서 사용하는 닉네임을 변경할 수 있습니다
        </p>
        {/* 닉네임 */}
        <div>
          <div className="relative mt-[73px]">
            <InputField
              placeholder="닉네임을 입력해주세요"
              ref={nicknameRef}
              label="닉네임"
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
            />
            <button
              onClick={checkNicknameDuplicate}
              className={`${
                isNicknameValid ? 'bg-[#F1D8FF]' : 'bg-white'
              } transition duration-300 cursor-pointer absolute bottom-[5px] right-0 w-[39px] h-[25px] shadow-[inset_0_0_0_1px_#1b1b1b] rounded-[20px] text-[12px]`}
            >
              확인
            </button>
            {nicknameAlert && (
              <p
                className={`absolute text-[10px] bottom-[-18px] left-[7px] ${
                  isNicknameValid ? 'text-[#BC56F3]' : 'text-[#FF4E4E]'
                }`}
              >
                {nicknameAlert}
              </p>
            )}
          </div>

          {/* 저장 */}
          <div className="mb-[120px] w-full flex justify-center">
            <button
              disabled={!isNextBtnEnabled}
              onClick={handleNextBtnClick}
              className={`${
                isNextBtnEnabled ? 'cursor-pointer' : 'cursor-default opacity-30'
              } mt-[78px] justify-center transition duration-300 bg-linear-[90deg,#BC56F3_0%,#9566D5_100%] z-[10] flex items-center w-[100px] h-[54px] rounded-[50px]`}
            >
              <span className="text-white font-[400] text-[20px]">저장</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
