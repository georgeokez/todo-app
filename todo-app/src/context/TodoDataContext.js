import React, { createContext } from "react";

export const TodoDataContext = createContext({
  todoList: [],
  createTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  loadingStatus: "",
});

export const TodoDataProvider = ({ children }) => {
  const {
    todoList,
    createTodo,
    updateTodo,
    deleteTodo,
    loadingStatus,
    isPending,
    reFetch,
  } = useTodsData();
};
