import React from 'react';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;