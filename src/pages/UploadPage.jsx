import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import deco from '@/assets/webps/common/deco.webp';
import plus from '@/assets/webps/upload/plus.webp';

const UploadPage = () => {
  const [turn, setTurn] = useState(false);
  const [rotation, setRotation] = useState(0); // 회전 각도
  const [selectedFile, setSelectedFile] = useState(null);
  const nav = useNavigate();
  const fileInputRef = useRef(null); // 파일 업로드 ref

  // 파일 업로드 핸들러
  const handleUploadClick = () => {
    fileInputRef.current.click(); // input 클릭 트리거
  };

  // 파일 업로드 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      console.log('선택된 파일:', file);
    }
  };

  // 레버 클릭 핸들러
  const handleLeverClick = () => {
    if (selectedFile) {
      setTurn(true);

      setTimeout(() => {
        console.log(`to do: 이미지 파일 /apps/upload 에 POST -> 응답으로 /news 띄워주기`);
        nav('/news');
      }, 3500);
    } else {
      alert('사진을 업로드 하면 레버를 돌릴 수 있어요!');
    }
  };

  // 레버 애니메이션
  useEffect(() => {
    if (turn) {
      let angle = 0;
      const interval = setInterval(() => {
        angle += 30;
        setRotation(angle);
        if (angle >= 180) {
          clearInterval(interval);
        }
      }, 500); // 0.5초마다 30도씩 회전

      return () => clearInterval(interval);
    } else {
      setRotation(0); // 초기화
    }
  }, [turn]);

  return (
    <>
      <div className="px-[30px] flex flex-col items-center justify-center">
        <div className="justify-center z-10 pt-[85px] pb-[15px] px-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] relative mt-[18px] w-full rounded-[16px] bg-linear-[91deg,#FF7B7D_0%,#FF9B9C_100%]">
          <p className="absolute tracking-normal text-[14px] text-white left-[18px] top-[14px]">
            사진을 업로드 해
          </p>
          <p className="absolute tracking-normal text-[14px] text-white left-[18px] top-[32px]">
            관련 기사를 찾아봐요
          </p>
          <img className="w-[94px] h-3 absolute right-[24px] top-[40px]" src={deco} alt="deco" />
          <p className="absolute text-[20px] font-[800] leading-[22px] text-white top-[52px] right-[22px]">
            UPLOAD
          </p>
          <div
            onClick={handleUploadClick}
            className="cursor-pointer w-full flex justify-center items-center aspect-[3/4] bg-linear-[154deg,#EFEFEF_1%,#F3F3F3_38%,#DADADA_70%,#C7C7C7_98%] rounded-[16px]"
          >
            {selectedFile ? (
              <img
                src={selectedFile}
                alt="미리보기"
                className="w-full h-full object-cover rounded-[16px]"
              />
            ) : (
              <img className="w-[30px] h-[30px]" src={plus} alt="plus" />
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div
          onClick={handleLeverClick}
          className="cursor-pointer mt-[30px] shadow-[-2px_-4px_4px_0px_rgba(0,0,0,0.15)_inset] w-[60px] h-[60px] rounded-full bg-[#E7E7E7] flex justify-center items-center"
        >
          <div
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.5s ease-in-out',
            }}
            className="bg-[#C3C3C3] w-[10px] h-[46px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),_-2px_-4px_4px_0px_rgba(0,0,0,0.10)_inset]"
          />
        </div>
      </div>
    </>
  );
};

export default UploadPage;
