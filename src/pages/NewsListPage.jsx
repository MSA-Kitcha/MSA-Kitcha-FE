import summary from '@/assets/webps/news/summary.webp';
import { useNavigate } from 'react-router-dom';

const NewsListPage = () => {

  const nav = useNavigate();

  const newsData = [
    {
      board_title: '아이폰SE는 아이폰SE로 불리지 않을 것으로 보인다[글로벌IT슈]',
      long_summary: '아이폰SE는 새로운 이름(아이폰 16E 등)으로 출시할 예정이다',
      board_date: '2025.02.18',
    },
    {
      board_title: '아이폰SE는 아이폰SE로 불리지 않을 것으로 보인다[글로벌IT슈]',
      long_summary: '아이폰SE는 새로운 이름(아이폰 16E 등)으로 출시할 예정이다',
      board_date: '2025.02.18',
    },
    {
      board_title: '아이폰SE는 아이폰SE로 불리지 않을 것으로 보인다[글로벌IT슈]',
      long_summary: '아이폰SE는 새로운 이름(아이폰 16E 등)으로 출시할 예정이다',
      board_date: '2025.02.18',
    },
    {
      board_title: '아이폰SE는 아이폰SE로 불리지 않을 것으로 보인다[글로벌IT슈]',
      long_summary: '아이폰SE는 새로운 이름(아이폰 16E 등)으로 출시할 예정이다',
      board_date: '2025.02.18',
    },
    {
      board_title: '아이폰SE는 아이폰SE로 불리지 않을 것으로 보인다[글로벌IT슈]',
      long_summary: '아이폰SE는 새로운 이름(아이폰 16E 등)으로 출시할 예정이다',
      board_date: '2025.02.18',
    },
    {
      board_title: '아이폰SE는 아이폰SE로 불리지 않을 것으로 보인다[글로벌IT슈]',
      long_summary: '아이폰SE는 새로운 이름(아이폰 16E 등)으로 출시할 예정이다',
      board_date: '2025.02.18',
    },
    {
      board_title: '아이폰SE는 아이폰SE로 불리지 않을 것으로 보인다[글로벌IT슈]',
      long_summary: '아이폰SE는 새로운 이름(아이폰 16E 등)으로 출시할 예정이다',
      board_date: '2025.02.18',
    },
  ];

  return (
    <div className="p-8 space-y-4 bg-[white]">
      {newsData.map((news, index) => (
        <div
          key={index}
          className="shadow-md rounded-2xl py-3 px-6 border border-gray-200"
          onClick={() => nav(`/news/${index}`)}
        >
          <h2 className="text-base font-medium">{news.board_title}</h2>
          <div className="flex items-center space-x-1 py-1">
            <img src={summary} className="w-[14px]" />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-[#484848]">
              {news.long_summary}
            </p>
          </div>
          <time className="flex justify-end text-[10px] text-[#696969]">{news.board_date}</time>
        </div>
      ))}
    </div>
  );
};

export default NewsListPage;
