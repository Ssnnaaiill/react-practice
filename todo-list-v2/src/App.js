import React, { useState } from 'react';
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
