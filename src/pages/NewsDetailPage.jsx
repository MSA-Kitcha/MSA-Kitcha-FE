import summary from '@/assets/svgs/common/summary.svg';
import miniPaperClip from '@/assets/webps/news/mini_paper_clip.webp';
import rectangle from '@/assets/webps/news/rectangle.webp';
import solidShare from '@/assets/webps/news/solid_share.webp';
import { useLocation, useNavigate } from 'react-router-dom';

const NewsDetailPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const news = location.state;

  return (
    <div className="px-[30px] py-7 bg-[white] tracking-normal">
      <div className="space-y-2 mb-3">
        <h1 className="font-bold text-lg text-[#363636]">{news.news_title}</h1>
        <time className="flex justify-end text-[10px] text-[#696969]">{news.news_date}</time>
      </div>
      <div className="shadow-[0_0_5px_rgba(0,0,0,0.1)] rounded-2xl flex space-x-2 py-4 pl-3 pr-5">
        <img src={summary} className="w-[14px] h-[14px]" />
        <div className="text-sm text-[#363636] whitespace-pre-wrap leading-relaxed">
          {news.long_summary}
        </div>
      </div>
      <div className="flex items-center space-x-1 mt-7 mb-[10px]">
        <img src={miniPaperClip} className="w-[16px] h-[16px] text-[#FBF4FF]" />
        <p className="text-sm">기사 원문 보러가기</p>
      </div>
      <div className="rounded-xl bg-[#FBF4FF] px-4 py-[14px] flex items-center justify-center">
        <a
          href={news.news_url}
          className="text-xs cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {news.news_url}
        </a>
      </div>
      <div className="flex justify-end">
        <div
          className="relative w-[54px] h-[54px] mt-[30px] cursor-pointer"
          onClick={() => nav('/board/write', { state: news })}
        >
          <img src={rectangle} className="w-full h-full rounded-full object-cover" />
          <img
            src={solidShare}
            className="absolute top-1/2 left-1/2 w-[22px] h-[22px] transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
