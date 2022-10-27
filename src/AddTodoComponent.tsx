import { useState, FC, MouseEvent } from "react";

// const AddTodoComponent: FC<{
//   addTodos: (text: string) => void;
// }> = ({ addTodos }) => {
const AddTodoComponent = ({
  addTodos
}: {
  addTodos: (text: string) => void;
}) => {
  const [todo, setTodo] = useState<string>("");
  const handleSubmit = (e: MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    if (!todo) {
      alert("Please enter the todo");
    } else {
      addTodos(todo);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <form>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Type your todo"
        />
        <button onClick={() => handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default AddTodoComponent;
