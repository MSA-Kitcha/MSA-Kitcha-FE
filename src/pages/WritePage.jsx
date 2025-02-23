import { useEffect, useState } from 'react';
import summary from '@/assets/svgs/common/summary.svg';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';

const WritePage = () => {
  // Layout에서 전달된 핸들러 설정 함수
  const { setUploadHandler } = useOutletContext();
  const nav = useNavigate();
  const location = useLocation();

  const news = location.state;
  const [board, setBoard] = useState({
    boardId: null,
    boardTitle: '',
    content: '',
    newsTitle: '',
    summary: news.long_summary,
    url: news.news_url,
  });

  const uploadHandler = () => {
    // nav(`/board/${boardId}`);
  };

  const onChangeHandler = (name, value) => {
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const handleResize = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  useEffect(() => {
    setUploadHandler(() => uploadHandler);
    return () => setUploadHandler(null);
  }, [board.boardTitle, board.content]);

  return (
    <div className="px-[30px] mt-[46px] mb-[50px] tracking-normal">
      <div className="space-y-1">
        <textarea
          rows={1}
          placeholder="제목을 입력하세요"
          value={board.boardTitle}
          onChange={(e) => onChangeHandler('boardTitle', e.target.value)}
          onInput={handleResize} // 입력 시 자동으로 크기 조정
          className="font-nanum font-bold w-full px-[5px] h-[27px] outline-none resize-none"
        />
        <div className="h-[1px] w-full transition-colors bg-[#B1B1B1]" />
      </div>
      <div className="mt-[52px] rounded-2xl flex space-x-2 py-4 pl-3 pr-5 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        <img src={summary} className="w-[14px] h-[14px]" />
        <div className="text-sm text-[#363636] whitespace-pre-wrap leading-relaxed">
          {board.summary}
        </div>
      </div>
      <textarea
        placeholder="기사에 대한 의견을 공유해주세요!"
        value={board.content}
        onChange={(e) => onChangeHandler('content', e.target.value)}
        className="w-full h-[214px] mt-7 rounded-[10px] p-4 text-sm resize-none shadow-[inset_0_0_0_1px_#B1B1B1] outline-none"
      />
    </div>
  );
};

export default WritePage;
