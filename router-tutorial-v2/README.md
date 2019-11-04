# router-tutorial-v2
> 리액트 라우터로 SPA 개발하기

## 목차

[1. 프로젝트 생성 및 리액트 라우터 적용](#1.-프로젝트-생성-및-리액트-라우터-적용)
[2. `Route` 컴포넌트로 특정 주소에 컴포넌트 연결](#2. `Route` 컴포넌트로 특정 주소에 컴포넌트 연결)
[3. 라우트 이동하기](#3. 라우트 이동하기)
[4. URL 파라미터와 query 이해하기](4. URL 파라미터와 query 이해하기)
[5. 서브 라우트](#5. 서브 라우트)
[6. 부가 기능 알아보기](#6. 부가 기능 )

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

## 2. Route 컴포넌트로 특정 주소에 컴포넌트 연결

Route 컴포넌트를 사용하면 어떤 규칙을 가진 경로에 어떤 컴포넌트를 보여줄 지 정의해줄 수 있습니다. 사용 방법은 다음과 같습니다.

```javascript
<Route path="addressRule" component={componentName}>
```

이렇게 선언해주면 여러 개의 Route 컴포넌트를 사용했을 경우 한 컴포넌트의 경로가 다른 컴포넌트의 경로에 포함되는 상황이 발생할 수 있습니다.

```javascript
<Route path="/foo" component={foo} />
<Route path="/foo/bar" component={bar} />
```

예시 코드의 경우 `/foo/bar` 경로로 들어가면 foo 컴포넌트와 bar 컴포넌트의 내용이 둘 다 출력됩니다. 이를 수정하려고 한다면 Route 컴포넌트를 사용할 때 `exact`라는 props를 true로 설정합니다.

```javascript
<Route path="/foo" component={foo} exact={true} />
<Route path="/foo/bar" component={bar} />
```

## 3. 라우트 이동하기
> Link 컴포넌트를 사용하여 다른 주소로 이동하기

Link 컴포넌트는 페이지를 전환할 때 새로고침을 하지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경합니다. Link 컴포넌트 자체는 a 태그로 이루어져 있지만, 페이지 전화를 방지하는 기능이 내장되어 있기에 이러한 활용이 가능합니다.

```javascript
<Link to="address">Lorem Ipsum Dolar Sit Amit</Link>
```
## 4. URL 파라미터와 query 이해하기

### URL 파라미터와 쿼리

페이지 주소를 정의할 때 전달하는 유동적인 값은 파라미터와 쿼리로 나눌 수 있습니다.

- 파라미터: /profiles/**phinyata**
- 쿼리: /about?**details=true**

일반적으로 파라미터는 특정 아이디 혹은 이름을 사용하여 조회할 때 사용하고, 쿼리는 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때 사용됩니다.

쿼리를 사용할 경우 쿼리 값에서 값을 읽어오기 위해 쿼리 문자열을 객체 형태로 변환해주어야 합니다. 이 때 `qs`라는 라이브러리를 사용합니다.

```
$yarn add qs
```

## 5. 서브 라우트

서브 라우트는 라우트 내부에 또 라우트를 정의하는 것입니다. 이번 프로젝트에서는 기존의 App 컴포넌트에서 보여준 두 개의 프로필 링크를 잘라내서 **Profiles**라는 라우트 컴포넌트를 따로 만들고, 그 안에서 Profile 컴포넌트들을 서브 라우트로 사용하도록 코드를 작성했습니다.

- `src/components/Profiles.js`

```javascript
<Route
  path="/profiles"
  exact
  render={()=><div>사용자를 선택해 주세요.}
/>
```


이 코드에서 첫 번째 Route 컴포넌트에는 component 대신 `render`라는 props를 넣어주었습니다. 이렇게 하여 컴포넌트 자체가 아니라 보여주고 싶은 JSX를 전달할 수 있습니다.

## 6. 부가 기능 알아보기

### history
`history` 객체는 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props 중 하나로, 이 객체를 통해 컴포넌트 내에 구현하는 함수들에서 라우터 API를 호출할 수 있습니다.

history를 활용하는 상황의 예로는 다음과 같은 경우가 있습니다.

- 특정 버튼을 눌렀을 때 뒤로 갈 때
- 로그인 후 화면을 전환해야 할 때
- 다른 페이지로 이탈하는 것을 방지해야 할 때

### withRouter

`withRouter` 함수는 HoC(Higher-order Component)로 라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체를 접근할 수 있게 해 줍니다.

### Switch

`Switch` 컴포넌트는 여러 Route를 감싸서 그중 일치하는 단 하나의 Route만을 렌더링합니다. 이 컴포넌트를 사용하면 모든 규칙과 일치하지 않을 때 보여 줄 **Not Found** 페이지도 구현할 수 있습니다.

- `src/App.js`

```javascript
<Switch>
  <Route path="/" component={Home} exact={true} />
  <Route path={['/about', '/info']} component={About} />
  <Route path="/profiles" component={Profiles} />
  <Route path="/history" component={HistorySample} />
  <Route
    render={({ location }) => (
      <div>
        <h2>이 페이지는 존재하지 않습니다:</h2>
        <p>{location.pathname}</p>
      </div>
    )}
  />
</Switch>
```

위 코드는 App.js의 일부분입니다. 마지막 Route 컴포넌트는 위의 다른 모든 경로들 중 현재 경로와 일치하는 것이 없다면 **이 페이지는 존재하지 않습니다** 라는 문구와 함께 경로를 화면에 출력합니다.

### NavLink
`NavLink`는 기존에 우리가 사용하던 Link와 비슷한 컴포넌트인데, 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용할 수 있다는 차이점이 있습니다.

NavLink에서 링크가 활성화되었을 때의 스타일을 적용할 때는 `activeStyle` 값을, CSS 클래스를 적용하고 싶을 때에는 `activeClassName`을 props로 지정해줍니다.
