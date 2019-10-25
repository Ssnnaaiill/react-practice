# immer-tutorial

## 개요

React에서는 불변성을 유지하면서 상태를 업데이트하는 것이 중요합니다. 전개 연산자와 배열의 내장 함수를 사용하면 간단하게 배열/객체를 복사하고 새로운 값을 덮어쓸 수 있는데, 객체의 구조가 깊어진다면 불변성을 유지하면서 이를 갱신하는 것이 매우 번거롭습니다.

`immer`라는 라이브러리를 사용하면 구조가 복잡한 객체도 쉽고 짧은 코드를 사용하여 불변성을 유지할 수 있습니다.

### 목표

본 실습의 목표는 다음과 같습니다.

1. immer 설치하고 사용법 알아보기
2. immer를 사용하여 간단한 프로젝트 만들어 보기

### 프로젝트 준비

yarn을 통해 immer를 설치해줍니다.

```bash
$yarn add immer
```

## immer 사용법

immer를 사용하면 불변성을 유지하는 작업을 간단하게 처리할 수 있습니다. 예시 사용법은 다음과 같습니다.

```javascript
import produce from 'immer';
const nextState = produce(originalState, draft => {
  // change value
  draft.somewhere.deep.inside = 5;
});
```

immer 라이브러리의 `produce` 함수는 두 가지 파라미터를 받습니다.

1. 수정하고 싶은 상태
2. 상태를 어떻게 업데이트할지 정의하는 함수

두 번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면, produce 함수가 불변성 유지를 대신해 주면서 새로운 상태를 생성해 줍니다.

immer의 핵심은 **불변성에 신경쓰지 않는 것처럼 코드를 작성하되, 불변성 관리는 제대로 해주는 것**입니다. ~~어쩌라는 건지...~~ 단순히 깊은 곳에 위치하는 값을 바꾸는 것 외에 배열을 처리할 때에도 매우 쉽고 편하게 작업할 수 있습니다.

## useState의 함수형 업데이트와 immer 함께 쓰기

예시로 다음과 같이 함수형 업데이트를 사용하는 코드가 있다고 가정해봅시다.

```javascript
const [number, setNumber] = useState(0);
// @param prevNumbers: current number value
const onIncrease = useCallback(
  () => setNumber(prevNumber => prevNumber + 1),
  [],
);
```

produce 함수를 호출할 때, 첫 번째 파라미터가 함수 형태라면 업데이트 함수를 반환합니다.

```javascript
const update = (draft => {
  draft.value = 2;
});

const originalState = {
  value: 1,
  foo: 'bar,
}

const nextState = update(originalState);
console.log(nextState);   // { value: 2, foo: 'bar }
```

이러한 immer의 속성과 useState의 함수형 업데이트를 함께 활용하면 코드를 더욱 깔끔하게 작성할 수 있습니다.
