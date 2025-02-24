import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "@/apis/instance";

const BoardListPage = () => {
  const nav = useNavigate();
  const elementRef = useRef();
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [boardList, setBoardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBoardList = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      await instance.get(`/apps/board?page=${page}&size=10`)
        .then((res) => {
          if (res.data) {
            if (res.data.length < 10) {
              setHasMore(false);
            } else {
              setBoardList((prevList) => [...prevList, ...res.data]);
              setPage((prevPage) => prevPage + 1);
            }
          }
        });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  
  const onIntersection = (entries) => {
    const firstEntry = entries[0];
    
    if (firstEntry.isIntersecting && hasMore) {
      fetchBoardList();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    }
  }, [hasMore, page]);

  return (
    <div className="px-[30px] mt-[46px] mb-[26px] space-y-4">
        {boardList && boardList.map((board, index) => (
          <div
            key={index}
            className="space-y-3 cursor-pointer"
            onClick={() => nav(`/board/${board.boardId}`)}
          >
            <h2 className="text-base font-bold px-1">{board.boardTitle}</h2>
            <div className="flex justify-between px-1">
              <span className="text-xs text-[#BC56F3]">{board.writer}</span>
              <div className="flex space-x-[10px]">
                <span className="text-[10px] text-[#919191]">조회수 {board.hitCnt}</span>
                <span className="text-[10px] text-[#2E2E2E]">{board?.boardDate?.split("T")[0]}</span>
              </div>
            </div>
            <div className="h-[1px] w-full transition-colors bg-[#B1B1B1]" />
          </div>
        ))}
        {hasMore && <div ref={elementRef}></div>}
    </div>
  );
};

export default BoardListPage;
