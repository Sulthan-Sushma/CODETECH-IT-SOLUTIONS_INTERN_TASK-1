import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className="todo-item">
      <span
        onClick={toggleComplete}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
      >
        {todo.task}
      </span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;