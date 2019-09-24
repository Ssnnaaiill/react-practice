import React, { Component } from "react";
import "./TodoItem.css";


/**
 * TodoItem
 * - text: context of todo
 * - checked: status of checkbox (0: false, 1: true)
 * - id: id of each todo
 * - onToggle: function for switching checkbox status of each todo
 * - onRemove: function for removing todo
 */

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove"
          onClick={(e) => {
            // make parent onToggle not executed
            e.stopPropagation();
            // remove selected todo item
            onRemove(id)
          }
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

export default TodoItem;