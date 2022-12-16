import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/action/movieAction'
import Banner from '../component/Banner'
import MovieType from '../component/MovieType'
import MoviesSlide from '../component/MoviesSlide'

import { RotatingLines } from 'react-loader-spinner'


// 영화 리스트들을 불러오기위해 api 세팅
const Home = () => {     //리듀서를 모아주는 index.js파일에서 state의 값을 movie라고 정의해줌
  const dispatch = useDispatch()
  const { popularMovies, topratedMovies, upcomingMovies, loading } = useSelector(state => state.movie)

  // 리덕스 미들웨어를 이용(비동기방식)
  useEffect(() => {
    dispatch(movieAction.getMovies())
  },[])

  //로딩중 구현 true = 데이터 도착전(로딩스피너노출)  false = 데이터 도착후or에러났을때(에러메세지)
  if (loading) {
    return (
      <div className="loading_container">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    )
  }
  return (
    <div className='home_wrap'>
      {topratedMovies.results && <Banner movie={popularMovies.results} />}
      <MovieType />
      <div className="popularMovies">
        <h2>🎄Recommended for you🎄</h2>
        <MoviesSlide movie={popularMovies.results} />
      </div>
      <div className="topratedMovies">
        <h2>🏆Toprated Movies🏆</h2>
        <MoviesSlide movie={topratedMovies.results} />
      </div>
      <div className="upcomingMovies">
        <h2>🎬Upcoming Movies🎬</h2>
        <MoviesSlide movie={upcomingMovies.results} />
      </div>
    </div>
  )
  //조건부 렌더링을 걸지 않으면 데이터를 받아오기 전에는 에러가 나옴
}

export default Home