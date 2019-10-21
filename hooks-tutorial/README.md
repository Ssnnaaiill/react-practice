# hooks-tutorial

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
