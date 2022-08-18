import React from "react";

const List = (props) => {
  const { todoList, setTodoList } = props;

  const clickHandler = (index) => {
    const list = todoList;

    const obj = list[index];
    obj.completed = !obj.completed;

    setTodoList([...list]);
  };

  const deleteHandler = (thisIndex) => {
    const newList = todoList.filter((item, idx) => {
      return idx !== thisIndex;
    });

    setTodoList([...newList]);
  };

  return (
    <div>
      <h2>List</h2>
      {todoList.map((item, index) => (
        <div key={index}>
          <h3
            style={item.completed ? { textDecoration: "line-through" } : null}
          >
            todo: {item.addTodo}
          </h3>

          <input type="checkbox" onChange={() => clickHandler(index)} />
          <button onClick={() => deleteHandler(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
