//middleware적용 thunk를 사용함
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
// devtools 적용  composeWithDevTools(middleware 를 감싼다.)
import { composeWithDevTools } from "redux-devtools-extension";
//
import rootReducer from './reducers'


// movieReducer.js 파일에서 리듀서를 정의해줌 ->
// index.js 파일에서 리듀서들을 모아준뒤 store에 전달
// store.js (store) 참조하는 리듀서를 각각의 리듀서가 아닌 리듀서를 모아준 
// index.js파일의 

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store