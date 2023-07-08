import React from "react";
import CheckIcon from "./CheckIcon";
import TodoItemBox from "./TodoItemBox";

const todoDefaultText = "This is a default Test text";

const TodoItem = ({ edittable = false }) => {
  return (
    <div className="todo-item-container">
      <CheckIcon />
      <TodoItemBox edittable={edittable} text={todoDefaultText} />
    </div>
  );
};

export default TodoItem;
