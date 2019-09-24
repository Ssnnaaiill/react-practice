import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        <h1>
          <span role="img" aria-label="rice_ball">🍙</span>&nbsp;이럴 때가 아닌데&nbsp;<span role="img" aria-label="wine_glass">🍷</span>
        </h1>
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="form-wrapper">
        {children}
      </section>
    </main>
  );
};

export default TodoListTemplate;