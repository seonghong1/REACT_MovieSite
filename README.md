# 🎬영화 소개 사이트🎬
https://seonghong-moviesite.netlify.app/
# 사용기술
- Redux
- Redux-Thunk
- Router
- Axios
- Sass

# 간단한 설명
#### TMBD에서 제공된 API를 기반으로 제작한 영화 소개 사이트 입니다!
##### react-router을 사용해 SPA형태로 구성되었습니다. 
##### axios를 활용해 데이터를 불러왔으며, async, await를 사용해 각각의 api를 비동기적으로 불러왔습니다.
##### thunk를 활용해 dispatch의 매개변수에 액션객체가 아닌 API를 불러오고 다시 dispatch를 해주는 함수를 넣어
##### API를 불러오는 과정을 비동기적으로 구현하였습니다. 
##### 홈화면이 렌더링시 useEffect를 사용해 dispatch(api.get하는 액션함수)가 실행되며 데이터를 불러와줍니다.
##### Toprated, Upcoming, Popular 3가지 타입의 api를 불러와 슬라이드를 구성하였습니다.
##### 각 영화를 클릭시 path='/movies/:id'로 이동되며 detail컴포넌트를 불러와줍니다. 클릭시 해당 /:id값에 영화의 id가 들어가며,
##### useParams를 사용해 해당 아이디 값을 활용할 수 있는 구조로 구현하였습니다.
##### 해당된 영화의 정보를 불러오기 위해 detail api를 사용해 dispatch로 전달하는 과정에서 액션함수의 매개변수로 id값을 전달해주었습니다.
##### 디테일 페이지에서 react-youtube를 활용해 영상을 클릭시 유튜브 영상이 보여지게끔 구현하였습니다. 

# 느낀점, 알게된점, 나의 생각
##### redux를 사용해 단순히 store에 값을 저장하고 활용하는 단순한 용도가 아닌 thnk와 같이 사용해 비동기적으로 API 데이터를 불러오는 과정에 있어
##### 외부 API를 사용하는 프로젝트에 크게 유용한 기술이라고 생각이 들었다. 
##### 처음 thnk를 이해하고 활용하는거에 있어 어려움을 겪었지만 계속된 복기를 통하여 이해와 스스로 비동기적 요소가 필요한 부분을 판단하고 적용할 수 있게 되었다.
##### 기존의 dispatch는 type, payload등이 담긴 객체를 전달해 주었지만  thnk를 활용하게 되면 함수를 생성해주는 액션함수가 매개변수로 들어갈 수 있어 
##### 이또한 놀라운 기능이라고 생각이 들었다. 다른 프로젝트를 하게 되면 thnk를 접목시켜 비동기적 상태관리에 있어 유용한 장점들을 다시 활용하여 작업을 진행하고싶다.
##### 또한 router의 useParams함수가 detail페이지를 구성하는 과정에 있어 큰 영향을 미쳤다. redux만을 사용해 홈페이지를 구성하였다면 
##### 지금처럼 가독성있고 효과적으로 코드로 구성하기 힘들었을텐데 router을 같이 활용해 시너지를 이끌어내어 여러 라이브러리의 장점을 조합해
##### 하나의 서비스를 만들 수 있었던 좋은 기회였다.
##### 데이터를 불러오는 과정에 있어 주로 fetch 사용해 데이터를 불러와 주었지만 이번에는 axios를 사용해 주었다.
##### 현재의 프로젝트에서 axios를 활용해 데이터를 불러오는 부분 까지는 fetch와 동일하지만 자동으로 json형태로 데이터를 변환해주고, Intercept기능,
##### 다양한 브러우저에서 지원 등과 같은 부가적인 장점들이 많아 axios에 활용도를 늘리며 중점적으로 학습을 하고싶다고 생각이 들었다.
