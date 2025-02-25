import { useNavigate } from 'react-router-dom';
import instance from '@/apis/instance';
import deco from '@/assets/webps/common/deco.webp';
import gatcha from '@/assets/webps/kitcha/gatcha.webp';

const KitchaPage = () => {
  const nav = useNavigate();

  const handleMyPickClick = async () => {
    try {
      const response = await instance.get('/article/apps/mypick');
      console.log('관심사 뉴스 받기 성공:', response.data.result);

      // 뉴스 데이터를 sessionStorage에 저장
      sessionStorage.setItem('newsList', JSON.stringify(response.data.result));

      nav('/news');
    } catch (error) {
      const errorMessage = error.response?.data?.message || '관심사 뉴스 받기에 실패했습니다.';
      console.error('관심사 뉴스 받기 오류:', errorMessage);
    }
  };

  return (
    <>
      <div className="px-[30px] flex flex-col items-center justify-center">
        {/* MY PICK */}
        <div
          onClick={handleMyPickClick}
          className="z-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] cursor-pointer relative mt-[34px] w-full aspect-[11/3] rounded-[16px] bg-linear-[90deg,#BC56F3_0%,#9566D5_100%]"
        >
          <p className="absolute tracking-normal text-[14px] text-white left-[18px] top-[14px]">
            내가 고른 키워드를 기반으로!
          </p>
          <img className="w-[84px] h-3 absolute right-[24px] bottom-[38px]" src={deco} alt="deco" />
          <p className="absolute text-[20px] font-[800] leading-[22px] text-white bottom-4 right-[22px]">
            MY PICK
          </p>
        </div>
        {/* RANDOM */}
        <div
          onClick={() => nav('/random')}
          className="z-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] cursor-pointer relative mt-[18px] w-full aspect-[11/3] rounded-[16px] bg-linear-[90deg,#FFC7EE_0%,#FFD4EF_100%]"
        >
          <p className="absolute tracking-normal text-[14px] text-[#6C6C6C] left-[18px] top-[14px]">
            랜덤하게 뉴스를 뽑아줘요
          </p>
          <img className="w-[94px] h-3 absolute right-[24px] bottom-[38px]" src={deco} alt="deco" />
          <p className="absolute text-[20px] font-[900] leading-[22px] text-[#464646] bottom-4 right-[22px]">
            RANDOM
          </p>
        </div>
        {/* UPLOAD */}
        <div
          onClick={() => nav('/upload')}
          className="mb-[180px] z-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] cursor-pointer relative mt-[18px] w-full aspect-[11/3] rounded-[16px] bg-linear-[90deg,#FF7B7D_0%,#FF9B9C_100%]"
        >
          <p className="absolute tracking-normal text-[14px] text-white left-[18px] top-[14px]">
            사진을 업로드 해
          </p>
          <p className="absolute tracking-normal text-[14px] text-white left-[18px] top-[32px]">
            관련 기사를 찾아봐요
          </p>
          <img className="w-[84px] h-3 absolute right-[24px] bottom-[38px]" src={deco} alt="deco" />
          <p className="absolute text-[20px] font-[800] leading-[22px] text-white bottom-4 right-[22px]">
            UPLOAD
          </p>
        </div>
        <img
          className="w-[300px] h-[385px] absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
          src={gatcha}
          alt="gatcha"
        />
      </div>
    </>
  );
};

export default KitchaPage;
