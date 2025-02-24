import { useEffect, useState } from "react";
import newsData from "@/constants/newslist/newsData";
import summary from '@/assets/svgs/common/summary.svg';
import pencil from '@/assets/svgs/board/pencil.svg';
import trash from '@/assets/svgs/board/trash.svg';
import paper_clip from '@/assets/webps/board/paper_clip.webp'
import download from '@/assets/svgs/board/download.svg';

const BoardDetailPage = () => {
  const [board, setBoard] = useState({});
  const [isWriter, setIsWriter] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const deleteHandler = () => {
    console.log('삭제');
  }

  const downloadHandler = () => {
    console.log('요약본 다운');
  }

  useEffect(() => {
    setBoard({
      boardTitle: "새로운 '아이폰 16E'? SE는 이제 역사 속으로?",
      hitCnt: 5,
      writer: "킷챠",
      boardDate: "2025-02-21T22:51:56.591609".split("T")[0],
      content: "성능 면에서는 확실한 진화지만, SE 특유의 '작은 크기 + 홈 버튼' 조합이 사라진다면 기존 팬들에게는 아쉬운 변화일 수도 있다. \
      가격이 70-80만 원 대로 책정될 경우, 아이폰 13 리퍼 모델과 경쟁해야 하는 점도 변수다. \
      \nSE의 정체성을 유지한 가성비 모델로 자리 잡을지, 완전히 새로운 라인업으로 바뀔지 지켜볼 필요가 있다. 여러분은 어떻게 생각하시나요?😀",
      longSummary: newsData[0].long_summary,
      newsUrl: newsData[0].news_url
    });
  }, []);

  return (
    <div className="mx-[30px] mt-5 mb-[50px] tracking-normal">
      <div className="flex justify-between">
        <span className="text-xs text-[#BC56F3]">{board.writer}</span>
        <div className="flex space-x-[10px]">
          <span className="text-[10px] text-[#919191]">조회수 {board.hitCnt}</span>
          <span className="text-[10px] text-[#2E2E2E] mr-[6px]">{board.boardDate}</span>
        </div>
      </div>
      <h1 className="mt-[2px] text-lg font-bold">{board.boardTitle}</h1>
      {/* 아이콘 */}
      <div className="flex justify-between items-center px-1 mt-[6px]">
        <div className="flex space-x-4">
          {isWriter && (
              <>
                <img src={pencil} className="w-4 h-4 cursor-pointer" />
                <img src={trash} className="w-4 h-4 cursor-pointer" onClick={deleteHandler} />
              </>
          )}
        </div>
        {!isAdmin && (
          <div className="flex space-x-1">
            <span className="text-[10px] text-[#BC56F3]">원문 보기</span>
            <a
              href={board.newsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={paper_clip} className="w-5 h-5 mr-3" />
            </a>
            <span className="text-[10px] text-[#BC56F3]">요약본 다운</span>
            <img src={download} className="w-4 h-4 cursor-pointer" onClick={downloadHandler} />
          </div>
        )}
        {isAdmin && (
          <div className="ml-auto">
            <img src={trash} className="w-4 h-4 cursor-pointer" onClick={deleteHandler} />
          </div>
        )}
      </div>
      {/* 요약 */}
      <div className="mt-3 rounded-2xl flex space-x-2 py-4 pl-3 pr-5 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        <img src={summary} className="w-[14px] h-[14px]" />
        <p className="text-sm text-[#363636] whitespace-pre-wrap leading-relaxed">
          {board.longSummary}
        </p>
      </div>
      {/* 본문 */}
      <p className="w-full font-normal mt-7 bg-[#FBF4FF] rounded-[10px] p-4 text-sm whitespace-pre-line leading-relaxed">
        {board.content}
      </p>
    </div>
  );
};

export default BoardDetailPage;
