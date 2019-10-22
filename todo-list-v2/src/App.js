import React, { useState, useRef, useCallback } from 'react';
import { TodoTemplate, TodoInsert, TodoList } from './components';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Lorem Ipsum Dolar Sit Amit',
      checked: true,
    },
    {
      id: 2,
      text: 'Lorem Ipsum Dolar Sit Amit',
      checked: true,
    },
    {
      id: 3,
      text: 'Lorem Ipsum Dolar Sit Amit',
      checked: false,
    },
  ]);

  // set next id using ref
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      if (text !== '') {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
      } else {
        alert('내용이 입력되지 않았어요!');
      }
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
