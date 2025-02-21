import { useNavigate } from 'react-router-dom';
import Keyword from '@/components/mypick/Keyword';
import keywords from '@/constants/mypick/keywords';
import { useState } from 'react';

const MyPickPage = () => {
  const nav = useNavigate();
  const [selectedKeywordId, setSelectedKeywordId] = useState(null);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[28px] flex gap-3">
          <div className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
          <div className="w-2 h-2 rounded-full bg-[#BC56F3]" />
        </div>
      </div>
      <div className="relative px-[45px] mt-5 z-10">
        <p className="text-[22px] leading-[30px] font-bold z-10">킷챠님, 가장 관심 있는 뉴스를</p>
        <p className="text-[22px] leading-[30px] font-bold z-10">선택해주세요</p>
        <div className="absolute top-[17px] left-[162px] w-[88px] h-3 bg-[#BC56F3] opacity-[25%] z-20" />
        <p className="text-[#4b4b4b] text-[12px] font-[300] mt-[9px]">
          선택한 키워드는 <span className="font-bold">MY PICK</span> 에 반영돼요
        </p>
      </div>

      <div className="flex justify-center mt-[35px]">
        <div className="w-[268px] grid grid-cols-2 gap-x-[28px] gap-y-3">
          {keywords.map((keyword) => (
            <Keyword
              key={keyword.id}
              content={keyword.text}
              isSelected={selectedKeywordId === keyword.id}
              onClick={() => setSelectedKeywordId(keyword.id)}
            />
          ))}
        </div>
      </div>
      {/* Pick! */}
      <div className="w-full flex justify-center">
        <button
          disabled={!selectedKeywordId}
          onClick={() => nav('/home')}
          className={`${
            selectedKeywordId ? 'cursor-pointer' : 'cursor-default opacity-30'
          } mt-[40px] justify-center transition duration-300 bg-linear-[90deg,#BC56F3_0%,#9566D5_100%] z-[10] flex items-center w-[124px] h-[54px] rounded-[54px]`}
        >
          <span className="text-white font-[700] text-[20px]">PICK !</span>
        </button>
      </div>
    </>
  );
};

export default MyPickPage;
