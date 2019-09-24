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

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, color, onToggle, onRemove } = this.props;

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
        <div style = {{ color }} className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (
            <div className="check-mark">
              <span role="img" aria-label="check">✔️</span>
            </div>
          )
        }
      </div>
    );
  }
}

export default TodoItem;