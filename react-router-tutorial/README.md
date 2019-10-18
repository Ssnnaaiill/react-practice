# react-router-tutorial
> [reference](https://velopert.com/3417)

## 준비

react-router를 사용하기 위한 라이브러리들을 설치합니다.
```
$ yarn add react-router-dom
$ yarn add cross-env --dev
```
- react-router-dom: 브라우저에서 사용되는 리액트 라우터입니다.
- cross-env: 프로젝트에서 NODE_PATH 를 사용하여 절대경로로 파일을 불러오기 위하여 환경 변수를 설정 할 때 운영체제마다 방식이 다르므로 공통적인 방법으로 설정 할 수 있게 해주는 라이브러리입니다.

react router에서는 URL query를 해석해서 객체로 만들어주는 기능이 있습니다. 이 기능을 사용하기 위해 `query-string` 라이브러리를 설치해주도록 합니다.
```
$ yarn add query-string
```

### 프로젝트 구조

#### src/client
브라우저 측에서 사용할 최상위 컴포넌트입니다. 우리가 추후 server side 렌더링을 구현할 때에는 서버 전용 라우터를 사용해야 하므로 components 디렉터리와는 구분되어 있습니다. 여기서 라우터를 설정합니다.

#### src/components
컴포넌트들이 위치하는 디렉터리입니다.

#### src/lib
추후 웹 연동 구현 시 사용할 API와 Code Spliting 작업에 필요한 코드가 위치합니다.

#### src/pages
각 라우터들이 위치하는 디렉터리입니다.

#### src/server
서버 측에서 사용할 react 관련 코드가 위치합니다.

#### src/shared
서버와 클라이언트에서 공용으로 사용되는 컴포넌트(`App.js`)가 위치합니다.

### NODE_ENV 설정
package.json 파일의 script 부분을 다음과 같이 수정했습니다.
```javascript
(...)

"scripts": {
  "start": "cross-env NODE_PATH=src react-scripts start",
  "build": "cross-env NODE_PATH=src react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
},

(...)
```