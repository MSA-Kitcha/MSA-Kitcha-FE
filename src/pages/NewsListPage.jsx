import { useNavigate } from 'react-router-dom';
import newsData from '@/constants/newslist/newsData';
import summary from '@/assets/svgs/common/summary.svg';

const NewsListPage = () => {
  const nav = useNavigate();

  return (
    <div className="p-8 space-y-4 bg-[white]">
      {newsData.map((news, index) => (
        <div
          key={index}
          className="shadow-md rounded-2xl py-3 px-6 border border-gray-200 cursor-pointer"
          onClick={() => nav(`/news/${index}`, {state: news})}
        >
          <h2 className="text-base font-medium">{news.news_title}</h2>
          <div className="flex items-center space-x-1 py-1">
            <img src={summary} className="w-[14px]" />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-[#484848]">
              {news.short_summary}
            </p>
          </div>
          <time className="flex justify-end text-[10px] text-[#696969]">{news.news_date}</time>
        </div>
      ))}
    </div>
  );
};

export default NewsListPage;
