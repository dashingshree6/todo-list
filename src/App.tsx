import React, { useState } from "react";
import "./styles.css";
import AddTodoComponent from "./AddTodoComponent";
import Todos from "./Todos";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type ITodos = {
  todos: Todo[];
};

export default function App() {
  const [todos, setTodos] = useState<ITodos>({ todos: [] });

  const addTodos = (title: string) => {
    setTodos({
      todos: [
        ...todos.todos,
        { id: todos.todos.length + 1, title, completed: false }
      ]
    });
    // setTodos((prevState) => {
    //   return {
    //     todos: [
    //       ...prevState.todos,
    //       { id: todos.todos.length + 1, title: title, completed: false }
    //     ]
    //   };
    // });
  };
  const deleteTodos = (id: number): void => {
    setTodos({
      todos: todos.todos.filter((t) => t.id !== id)
    });
  };
  const toggleTodos = (id: number): void => {
    setTodos({
      todos: todos.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };
  return (
    <div
      style={{
        backgroundColor: "#f34",
        height: "70vh",
        width: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 50
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontWeight: "lighter"
        }}
      >
        TODO LIST
      </h1>
      <AddTodoComponent addTodos={addTodos} />
      <Todos
        todos={todos}
        deleteTodos={deleteTodos}
        toggleTodos={toggleTodos}
      />
    </div>
  );
}
