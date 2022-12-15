import axios from "axios";

//axios를 사용
const api = axios.create({
  //공통으로 들어가는 주소(앞부분)
  baseURL: 'https://api.themoviedb.org/3',
  //데이터 타입 (정해져있는 값 'content-type': 'application')
  headers: { 'Content-type': 'Application/json' }
});

     // 인터셉터 then 또는 catch로 처리되기 전에 값을 중간에서 가로챔
        // 요청 인터셉터 추가하기
        api.interceptors.request.use(function (config) {
          // 요청이 전달되기 전에 작업 수행
          return config;
        }, function (error) {
          // 요청 오류가 있는 작업 수행
          return Promise.reject(error);
        });
      
        // 응답 인터셉터 추가하기
        api.interceptors.response.use(function (response) {
          // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
          // 응답 데이터가 있는 작업 수행
          return response;
        }, function (error) {
          // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
          // 응답 오류가 있는 작업 수행
          return Promise.reject(error);
        });

export default api