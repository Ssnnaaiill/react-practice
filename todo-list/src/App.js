import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import Palette from "./components/Palette";
import TodoItemList from "./components/TodoItemList";

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  
  id = 3

  // default state
  state = {
    input: "",
    todos: [
      { id: 0, text: "Redux 공부", checked: false },
      { id: 1, text: "단키라 이벤트 9만 포인트 달성", checked: true },
      { id: 2, text: "자기소개서 제출", checked: false}
    ],
    color: "#343a40"
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    if (input !== "") {
      this.setState({
        input: "",
        todos: todos.concat({
          id: this.id++,
          text: input,
          checked: false,
          color
        })
      });
    } else {
      alert("할 일이 무엇인지 안 적었어요!");
    }
  }

  handleKeyPress = (e) => {
    // call handleCreate when pressed key is Enter
    if(e.key === "Enter") {
      this.handleCreate();
    }
  }
  
  handleToggle = (id) => {
    const { todos } = this.state;

    // get todo with given id from parameter
    const index = todos.findIndex(todo => todo.id === id);
    // selected todo with given id
    const selected = todos[index];

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    });
  }

  /* Render App */
  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return (
      <TodoListTemplate
        form={(
          <Form 
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        )}
        
        palette={(
          <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
        )}
      >
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;