# hooks-tutorial

> reference: 리액트를 다루는 기술 개정판

[TOC]

## 개요

Hooks는 class 없이 state를 사용할 수 있도록 하는 기능입니다.

## useState

가장 기본적인 Hook으로 함수형 컴포넌트에서도 가변적으로 상태 관리를 할 수 있도록 합니다.

## useEffect

useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다. 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate, 이 두 가지 함수가 합쳐진 형태라고 할 수 있습니다.

## useReducer

useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용하는 Hook입니다. 리듀서(reducer)의 개념은 react 애플리케이션의 상태 관리를 할 때 Redux를 사용하면서 다시 한 번 등장합니다.

리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 action 값을 전달받아 새로운 상태를 반환해주는 함수입니다. 이때 반드시 불변성을 지켜 주어야 하는 주의사항이 있습니다.

```javascript
function reducer(state, action) {
  return { ... };
}
```

액션 값은 다음과 같은 형태로 이루어져 있습니다.

```javascript
{
  type: "INCREMENT";
  // add more values if they are needed
}
```

redux에서 사용되는 action object에는 해당 액션이 어떤 액션인지 알려주는 `type` 필드가 필수로 있어야 합니다. 반면 useReducer에서는 반드시 `type` 필드를 가질 필요는 없습니다.

useReducer를 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 함수 밖으로 분리해낼 수 있다는 점입니다.

## useMemo

useMemo Hook을 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있습니다. 렌더링하는 과정에서 특정 값이 바뀌었을 때에만 연산을 실행하는데, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식입니다.

`src/Average.js`

```javascript
const avg = useMemo(() => getAverage(list), [list]);
```

## useCallback

useMemo와 비슷한 함수로 렌더링 성능을 최적화하는 데 사용됩니다. useCallback을 사용하면 이벤트 핸들러 함수를 필요할 때에만 생성할 수 있습니다.

useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣습니다. 두 번재 파라미터의 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 합니다. 예시를 위해 `src/Average.js`의 **onChange**, **onInsert** 함수 코드를 가져와 보았습니다.

```javascript
// create function only when component is first rendered
const onChange = useCallback(e => {
  setNumber(e.target.value);
}, []);
```

위의 예시와 같이 빈 배열을 넣게 되면 컴포넌트가 렌더링될 때 단 한 번만 함수가 생성됩니다.

```javascript
// create function only when number or list is changed
const onInsert = useCallback(
  e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  },
  [number, list]
);
```

반면 onInsert처럼 배열 안에 number와 list를 넣게 되면 입력 내용이 바뀌거나 새로운 항목이 추가될 때마다 함수가 생성됩니다.

useCall은 결국 useMemo로 함수를 반환하는 상황에서 더 편하게 사용할 수 있도록 하는 Hook이라고 이해하면 됩니다.

- 숫자, 문자열, 객체처럼 일반 값을 재사용하려면 useMemo
- 함수를 재사용하려면 useCallback

## useRef

useRef Hook은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 도와줍니다. useRef를 사용하여 ref를 설정하면 useRef를 통해 생성한 객체 안의 current 값이 실제 요소를 가리키게 됩니다.
