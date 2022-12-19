import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Trailer from '../component/Trailer'
import { movieAction } from '../redux/action/movieAction'
import { RotatingLines } from 'react-loader-spinner'

// https://image.tmdb.org/t/p/original/9z4jRr43JdtU66P0iy8h18OyLql.jpg original로 바꾸기 p와 영화주소 앞부분사이를 바꿔주기
const MovieDetail = () => {
  //주소값의 id를 갖고옴  (정상출력)
  const { id } = useParams()
  //데이터를 store에서 다시 갖고와줌 (정상출력)
  const { moviesDetail, loading, trailerVideo } = useSelector(state => state.movie)

  //새로고침시 데이터값을 다시 불러오기 위해 (정상출력)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(movieAction.getMoviesDetail(id))
    window.scrollTo(0, 0) //firefox는 적용 안됨
  },[id])

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
    <div className='detail_wrap' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${moviesDetail.backdrop_path})`, }}>
      <div className="content">
        <div className="poster_area" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${moviesDetail.poster_path})` }}></div>
        <div className="info_area">
          <div className="title">
            <span className='vote_average'>🥇{moviesDetail.vote_average}</span>
            <div className="bottom">
              <h1 className='original_title'>{moviesDetail.original_title}</h1>
              <span className='release_date'>📆{moviesDetail.release_date}</span>
            </div>
          <h2 className="tagline">"{moviesDetail.tagline}"</h2>
          </div>
          <p className='overview'>
              <span>{moviesDetail.overview}</span>
          </p>
          <div className="youtube">
            <Trailer img={moviesDetail.backdrop_path} trailerVideo={trailerVideo}/>
          </div>
          <div className="sub_info">
            <span className='runtime'>⏱{moviesDetail.runtime}m</span>
            <span className='genres_wrap'>
              {moviesDetail.genres && moviesDetail.genres.map((item)=> <span>{item.name}</span>)}
              </span>
            <span className='adult'>{moviesDetail.adult? "🔞":"👪"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail