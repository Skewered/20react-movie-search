import React, { createContext, useState } from 'react';
import { todoListInit } from '../data';

export function useTodoListStatus() {
  const [todos, setTodos] = useState(todoListInit);

  return todos;
}

/*
export default {
  path: '/setting',
  component: () => import('./view.vue'),
};

const todoListInit = [
  {
    id: '1',
    text: '할일 1',
    isDone: 'false',
  },
  {
    id: '2',
    text: '할일 2',
    isDone: 'true',
  },
  {
    id: '3',
    text: '할일 3',
    isDone: 'false',
  },
  {
    id: '4',
    text: '할일 4',
    isDone: 'false',
  },
  {
    id: '5',
    text: '할일 5',
    isDone: 'false',
  },
];

export const todoContext = createContext();

export const todoProvider = () => {
  const [todos, setTodos] = useState(todoListInit);

  // const addTodos = (id) => {
  //   const newTodos = { id: id, elapsedTime: 0 };
  //   const newState = [...todos, newTodos];
  //   setTodos(newState);
  // };

  // const removeTodos = (id) => {
  //   const newState = todos.filter((item) => {
  //     if (item.id != id) return true;
  //   });
  //   setTodos(newState);
  // };

  return <todoContext.Provider value={todos}>{children}</todoContext.Provider>;

  // return (
  //   <todoContext.Provider
  //     value={{
  //       todo: todos,
  //       addTodo: addTodos,
  //       removeTodo: removeTodos,
  //     }}
  //   >
  //     {children}
  //   </todoContext.Provider>
  // );
};
*/
