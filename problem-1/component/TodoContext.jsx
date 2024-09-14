

import React, { createContext, useState } from 'react';


export const TodoContext = createContext();


export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};