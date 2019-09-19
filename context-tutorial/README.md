Context API에 대해서 알아보자
===
> 생성 날짜: 2019-09-19

## Context API란
주로 App에 전역적으로 데이터가 사용될 때 Context API를 사용합니다. 즉, React App 상태 관리를 위해 만들어진 API입니다.
- ex) 로그인 정보, 애플리케이션 설정, 테마, ...etc

redux, react-router, styled-component 등의 React 모듈들이 Context API를 바탕으로 만들어졌습니다.

### 왜 사용할까?
Redux, MobX 등의 라이브러리는 Context API와 비슷하게 애플리케이션의 상태를 전역적으로 관리해줍니다. 이러한 라이브러리를 사용하지 않는다면, 프로젝트에서의 Component들의 깊이가 깊어지고 다루게 되는 데이터들 (props, state)의 종류가 많아질 경우 관리하기 어렵고, 유지보수성도 떨어질 것입니다.

이제는 Redux나 MobX 같은 라이브러리를 사용하지 않고도 새로워진 Context API를 통해 global 상태 관리를 편리하게 할 수 있습니다.
![reference: @velopert](https://i.imgur.com/iyNKCIz.png)
기존에는 Component들을 거치고 거치고 또 거치고... 해서 번거롭게 값을 전달해주었다면, Context를 통해서 원하는 값 또는 함수를 바로 전달해줄 수 있게 됩니다.

## Tutorial
### 프로젝트 생성
`context-tutorial`이라는 이름의 App을 생성하여 Context API를 실습해 보려고 합니다.
```
create-react-app context-tutorial
```

### 프로젝트 구상
App의 대략적인 구조도는 다음 그림과 같습니다.
![referenc: @velopert](https://i.imgur.com/yXgSkHL.png)
1. App 내부에 `LeftPane`, `RightPane` 컴포넌트 두 개를 만들어 줍니다.
2. LeftPane에는 값을 설정해 줄 `Sends` 컴포넌트를, RightPane에는 값을 받을 `Receives` 컴포넌트를 넣어줍니다.
3. Context API를 사용하지 않는다면 `App=>LeftPane=>Sends`, `App=>RightPane=>Receives`와 같이 App에서부터 props가 내려오겠지만, 여기서는 Context를 통해서 바로 값을 가져오도록 하겠습니다.