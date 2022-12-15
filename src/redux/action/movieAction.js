//미들웨어 부분
//https://www.themoviedb.org/documentation/api?language=ko
import api from '../api.js'

//미들웨어는 함수가 함수를 리턴해줌


//key값을 노출되지 않게 만들기 => root에 .env파일 생성
//process.env.변수이름
const APIkey = process.env.REACT_APP_APIkey

//axios를 사용
function getMovies() {
    return async (dispatch) => {
        //기존의 데이터 갖고오는 과정을 try에 넣어줌
        try {
            dispatch({
                type: "GET_MOVIE_REQUST", // 로딩전 
            })
            //d18e957970eeba92b7b03203f0f52946 api key삽입
            const popularMovieApi = await api.get(`/movie/popular?api_key=${APIkey}&language=en-US&page=1`)
            const topratedMovieApi = await api.get(`/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`)
            const upcomingMovieApi = await api.get(`/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`)

            // 3개의 api가 다 불러와지고 동시에 호출
            //배열 하나에 3개의 값이 들어 있는 형태
            //let data = Promise.all([popularMovieApi, topratedMovieApi, upcomingMovieApi])

            //각각의 객체로 출력된느 형태
            let [popularMovies, topratedMovies, upcomingMovies] = await Promise.all([popularMovieApi, topratedMovieApi, upcomingMovieApi])

            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    // 여러 값들 중에 data필드만 보내줌.
                    popularMovies: popularMovies.data,
                    topratedMovies: topratedMovies.data,
                    upcomingMovies: upcomingMovies.data
                },
            })
        }
        catch {
            dispatch({
                type: "GET_MOVIE_FAIL", // 로딩전 
            })
        }
    }
}
export const movieAction = { getMovies }
/*
    API호출하는 방법
    1. fetch / 2. ajax / 3. 
*/