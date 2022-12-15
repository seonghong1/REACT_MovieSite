// 여러개의 reducer을 하나로 모아주는 역할
//combineReducers({}), 매서드 사용 {}여러개이기 때문에 객체

import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

export default combineReducers({movie:movieReducer})