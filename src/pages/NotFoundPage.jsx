import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-40 font-extrabold text-[#282828] text-[40px]">404 Not Found</div>
        <button
          className="w-40 mt-40 cursor-pointer bg-[#BC56F3] p-2 rounded-2xl"
          onClick={() => nav('/')}
        >
          로그인하러 가기
        </button>
      </div>
    </>
  );
};

export default NotFoundPage;
