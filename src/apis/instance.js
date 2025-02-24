import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// 요청 인터셉터 (JWT 토큰 자동 포함)
instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('jwtToken');

    // 토큰이 있으면 Authorization 헤더 추가
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 (401 오류 시 자동 로그아웃 가능)
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('인증이 만료되었습니다. 다시 로그인하세요.');
      sessionStorage.removeItem('jwtToken'); // 인증이 만료되면 토큰 삭제
      window.location.href = '/'; // 로그인 페이지로 리다이렉션
    }
    return Promise.reject(error);
  }
);

export default instance;
