// 리듀서 영역 - 3개의 api 넘겨받고 스토어에 전달

let initialstate = {
    popularMovies: {},
    topratedMovies: {},
    upcomingMovies: {},
    loading: true,
    genreList:[],
    moviesDetail:{},
    trailerVideo:{}
}

function movieReducer(state = initialstate, action) {
    const { type, payload } = action
    switch (type) {
        case "GET_MOVIE_REAQUST":
            return { ...state}
        case "GET_MOVIE_SUCCESS":
            return {
                ...state,
                popularMovies: payload.popularMovies,
                topratedMovies: payload.topratedMovies,
                upcomingMovies: payload.upcomingMovies,
                genreList: payload.genreList,
                loading: false
            }
        case "GET_MOVIE_FAIL":
            return { ...state, loading: false }
        case "GET_D_MOVIE_REQUST":
            return { ...state}
        case "GET_D_MOVIE_SUCCESS":
            return {
                ...state,
                moviesDetail: payload.moviesDetail,
                trailerVideo: payload.trailerVideo,
                loading:false
            }
        case "GET_D_MOVIE_FAIL":
            return { ...state, loading: false }
        default:
            return { ...state }
    }
}

export default movieReducer