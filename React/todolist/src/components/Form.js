import { useState } from "react";

const styledDiv = {
  border: "2px solid black",
  padding: "20px",
};

const Form = (props) => {
  const { todoList, setTodoList } = props;

  const [todo, setTodo] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo.addTodo.trim() === "") {
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo({ addTodo: "", completed: "" });
  };

  const inputHandler = (e) => {
    setTodo({ addTodo: e.target.value, completed: false });
  };

  return (
    <div style={styledDiv}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name"> Add Todo:</label>
          <input
            id="name"
            value={todo.addTodo}
            onChange={inputHandler}
            type="text"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
