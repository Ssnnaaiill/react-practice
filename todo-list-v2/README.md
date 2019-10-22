# todo-list-v2

## 준비

### 라이브러리 설치

yarn을 통해 필요한 라이브러리를 설치합니다. classnames는 조건부 스타일링을 더 편하게 하기 위해서, [react-icons](https://react-icons.netlify.com/#/icons/md)는 리액트에서 다양한 아이콘을 사용할 수 있도록 하기 위해 설치해 주었습니다.

```bash
$yarn add node-sass classnames react-icons
```

[surge.sh](https://surge.sh)의 서비스를 이용하여 프로젝트를 퍼블리싱하기 위해 `-g` 옵션으로 surge를 설치해 줍니다. (여기서는 yarn 대신 npm을 사용했습니다... yarn을 이용할 수 있는 방법이 있다면 그 방법으로 사용해봅시다.)

```bash
$npm install -g surge
```

### prettier, jsconfig 설정

vs code prettier extension의 코드 indentation 설정입니다. 최상위 디렉터리에 `.prettierrc`라는 이름으로 파일을 생성해 주고 다음과 같이 설정해 줍니다.

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

Babel이 리액트 프로젝트를 컴파일할 때 es6 문법으로 쓰인 것만을 대상으로 하도록 최상위 디렉터리에 `jsconfig.json` 파일을 생성하고 다음과 같이 설정해 줍니다.

```json
{
  "compilerOptions": {
    "target": "es6"
  }
}
```

### React Developer Tools 설치

todo-list-v2의 목적은 리액트의 구조 분석 및 실습입니다. Chrome 브라우저에서 리액트 컴포넌트를 더 자세히 분석할 수 있도록 [React Developer Tools 확장 프로그램](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)을 설치합니다.

## 구조

`src/components` 디렉터리에 다음과 같은 컴포넌트를 만들어 주었습니다. 각 컴포넌트에 적용할 scss 파일 또한 생성해 줍니다.

- TodoTemplate: 화면을 가운데에 정렬시켜 주며, 앱 타이틀(todo list)을 보여줍니다. 또한 `children`으로 내부 JSX를 props로 받아와 렌더링해줍니다.
- TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트로, state를 통해 입력 값의 상태를 관리합니다.
- TodoItemList: 각 todo 항목에 대한 정보를 보여주는 컴포넌트로, todo 객체를 props로 받아 상태에 따라 다른 스타일의 UI를 보여줍니다.
- TodoList: `todos 배열`을 props로 받아와 이를 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줍니다.

## 결과물

[`⚛️todo-list-v2.surge.sh`](https://todo-list-v2.surge.sh)
