# todo-list-v2

## 준비

yarn을 통해 필요한 라이브러리를 설치합니다. classnames는 조건부 스타일링을 더 편하게 하기 위해서, react-icons는 리액트에서 다양한 아이콘을 사용할 수 있도록 하기 위해 설치해 주었습니다.

```bash
$yarn add node-sass classnames react-icons
```

## 구조

`src/components` 디렉터리에 다음과 같은 컴포넌트를 만들어 주었습니다. 각 컴포넌트에 적용할 scss 파일 또한 생성해 줍니다.

- TodoTemplate: 화면을 가운데에 정렬시켜 주며, 앱 타이틀(todo list)을 보여줍니다. 또한 `children`으로 내부 JSX를 props로 받아와 렌더링해줍니다.
- TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트로, state를 통해 입력 값의 상태를 관리합니다.
- TodoItemList: 각 todo 항목에 대한 정보를 보여주는 컴포넌트로, todo 객체를 props로 받아 상태에 따라 다른 스타일의 UI를 보여줍니다.
- TodoList: `todos 배열`을 props로 받아와 이를 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줍니다.
