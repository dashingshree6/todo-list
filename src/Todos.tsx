import React, { FC } from "react";

const Todos: FC<{
  todos: ITodos;
  toggleTodos: (id: number) => void;
  deleteTodos: (id: number) => void;
}> = ({ todos, toggleTodos, deleteTodos }) => {
  const deleteTodo = (id: number) => {
    if (window.confirm("Are you sure you want to delete todo ?")) {
      deleteTodos(id);
    }
  };
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.todos.length ? (
          todos.todos.map((t) => (
            <li key={t.id}>
              <span
                style={{
                  textDecoration: t.completed ? "line-through" : "none"
                }}
              >
                {t.title}
              </span>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTodos(t.id)}
              />
              <button onClick={() => deleteTodo(t.id)}>X</button>
            </li>
          ))
        ) : (
          <h4>No items have been added.</h4>
        )}
      </ul>
    </div>
  );
};

export default Todos;
