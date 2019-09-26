컴포넌트 최적화와 React에서 Immutable.js 사용해보기
===
> [reference](https://velopert.com/3486)

# 개요
React component 내부의 state 값을 변경할 경우, 직접적으로 값을 변경하면 안 되고 setState를 통해서 작업해야 합니다.
```javascript
state = {
  fruits: [
    {
      id: 1,
      name: 'apple'
    }
  ]
};

// examples of bad code
this.state.fruits.push({
  id: 2,
  name: 'banana'
});

this.state.fruits[0].name = 'coconut';
```

setState로 state value를 변경하지 않으면 re-rendering되지 않기 때문입니다.
컴포넌트 최적화를 위해서는 불변성(Immutability)를 유지해야 합니다.

## Immutable.js 사용하기

### 준비
프로젝트에 yarn을 이요하여 Immutable을 설치합니다.
```
yarn add immutable
```

### 규칙
Immutable을 사용할 때에는 다음과 같은 규칙들을 기억해 두면 편합니다.
- 객체는 `Map`
- 배열은 `List`
- 설정할 때는 `set`
- 읽을 때는 `get`
- 읽은 후 설정할 때는 `update`
- 내부에 있는 요소를 set, get, update할 때는 `setIn`, `getIn`, `updateIn`
- 일반 자바스크립트 객체로 변환은 `toJS`
- List에는 배열 내장함수와 비슷한 함수들이 있습니다.
  - push
  - slice
  - filter
  - sort
  - concat
  - ...etc
- 특정 key를 지울 때는 `delete`