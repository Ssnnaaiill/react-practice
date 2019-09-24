import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

  // set if whether rerender or not
  shouldComponentUpdate(nextProp, nextState) {
    // rerender only when value of todos are changed
    return this.props.todos !== nextProp.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      (todo) => (
        <TodoItem {...todo} onToggle={onToggle} onRemove={onRemove} key={todo.id}/>
      )
    );

    return (
      <div>
        {todoList}    
      </div>
    );
  }
}

export default TodoItemList;