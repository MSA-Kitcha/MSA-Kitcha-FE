import { useEffect, useState } from "react";
import summary from '@/assets/svgs/common/summary.svg';
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

const WritePage = () => {
  // Layout에서 전달된 핸들러 설정 함수
  const { setUploadHandler } = useOutletContext();
  const nav = useNavigate();
  const location = useLocation();

  const news = location.state;
  const [board, setBoard] = useState({
    boardId: null,
    boardTitle: "",
    content: "",
    newsTitle: "",
    symmary: news.long_summary,
    url: news.news_url
  });

  const uploadHandler = () => {
    console.log('업로드 버튼 클릭 ::', board);
    // nav(`/board/${boardId}`);
  };

  const onChangeHandler = (name, value) => {
    setBoard({
      ...board,
      [name]: value,
    });
  };

  useEffect(() => {
    setUploadHandler(() => uploadHandler);
    return () => setUploadHandler(null);
  }, [board.boardTitle, board.content]);

  return (
    <div className="px-[30px] mt-[46px] mb-[50px] tracking-normal">
      <div className="space-y-1">
        <input 
          placeholder="제목을 입력하세요"
          className="font-nanum font-bold w-full px-[5px] h-[27px] outline-none"
          value={board.boardTitle}
          onChange={e => onChangeHandler('boardTitle', e.target.value)}
        />
        <div
          className="h-[1px] w-full transition-colors bg-[#B1B1B1]"
        />
      </div>
      <div className="mt-[52px] rounded-2xl flex space-x-2 py-4 pl-3 pr-5 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        <img src={summary} className="w-[14px] h-[14px]" />
        <div className="text-sm text-[#363636] whitespace-pre-wrap leading-relaxed">
          {news.long_summary}
        </div>
      </div>
      <textarea
        placeholder="기사에 대한 의견을 공유해주세요!"
        value={board.content}
        onChange={e => onChangeHandler('content', e.target.value)}
        className="w-full h-[214px] mt-7 rounded-[10px] p-4 text-sm resize-none shadow-[inset_0_0_0_1px_#B1B1B1] outline-none"
      />
    </div>
  );
};

export default WritePage;
