import { v4 as uuidv4 } from 'uuid';

const getCurrentTime = () => new Date().getTime();

export const createTodoInstance = (name) => {
  const now = getCurrentTime();

  return {
    id: now,
    completed: false,
    createdAt: now,
    updatedAt: now,
    name,
  };
};

export const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(({ completed }) => !completed);
    case 'complete':
      return todos.filter(({ completed }) => completed);
    default:
      return todos;
  }
};

export const getIncompletedTodoCount = (todos) => {
  return todos.filter(({ completed }) => !completed).length;
};

export const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const fetchTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};
