# router-tutorial-v2
리액트 라우터로 SPA 개발하기

## 개요

1. 프로젝트 생성 및 리액트 라우터 적용
2. 페이지 만들기
3. `Route` 컴포넌트로 특정 주소에 컴포넌트 연결
4. 라우트 이동하기
5. URL 파라미터와 query 이해하기
6. Sub Route
7. 부가 기능 알아보기

## 1. 프로젝트 생성 및 리액트 라우터 적용

### 라이브러리 설치

yarn을 사용하여 `react-router-dom` 라이브러리를 설치합니다.

```bash
$yarn add react-router-dom
```

### 프로젝트에 라우터 적용

프로젝트에 리액트 라우터를 적용할 때에는 `src/index.js` 파일에서 react-router-dom 라이브러리에 내장되어 있는 `BrowserRouter` 컴포넌트를 사용하여 감쌉니다. BrowserRouter 컴포넌트는 웹 애플리케이션에 HTML5의 History API를 사용하여 페이지를 새로 로드하지 않고도 주소를 변경할 수 있고, 현재 주소에 관련된 정보를 props로 쉽게 조회 / 사용할 수 있도록 해 줍니다.

- `src/index.js`
```javascript
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
```

### Route 컴포넌트로 특정 주소에 컴포넌트 연결

Route 컴포넌트를 사용하면 어떤 규칙을 가진 경로에 어떤 컴포넌트를 보여줄 지 정의해줄 수 있습니다. 사용 방법은 다음과 같습니다.

```javascript
<Route path="addressRule" component={componentName}>
```

이렇게 선언해주면 여러 개의 Route 컴포넌트를 사용했을 경우 한 컴포넌트의 경로가 다른 컴포넌트의 경로에 포함되는 상황이 발생할 수 있습니다.

`(예시)`

```javascript
<Route path="/foo" component={foo} />
<Route path="/foo/bar" component={bar} />
```

예시 코드의 경우 `/foo/bar` 경로로 들어가면 foo 컴포넌트와 bar 컴포넌트의 내용이 둘 다 출력됩니다. 이를 수정하려고 한다면 Route 컴포넌트를 사용할 때 `exact`라는 props를 true로 설정합니다.

```javascript
<Route path="/foo" component={foo} exact={true} />
<Route path="/foo/bar" component={bar} />
```

### Link 컴포넌트를 사용하여 다른 주소로 이동하기

Link 컴포넌트는 페이지를 전환할 때 새로고침을 하지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경합니다. Link 컴포넌트 자체는 a 태그로 이루어져 있지만, 페이지 전화를 방지하는 기능이 내장되어 있기에 이러한 활용이 가능합니다.

```javascript
<Link to="address">Lorem Ipsum Dolar Sit Amit</Link>
```
