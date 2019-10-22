import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <>
      <div className="TodoTemplate">
        <div className="app-title">일정 관리</div>
        <div className="content">{children}</div>
      </div>
      <div className="Footer">
        <DiGithubBadge size="24" />
        <a href="https://github.com/Ssnnaaiill/react-practice/tree/master/todo-list-v2">
          &nbsp;todo-list-v2
        </a>
      </div>
    </>
  );
};

export default TodoTemplate;
