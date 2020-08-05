import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHANGE_TODO_FILTER,
  CLEAR_COMPLETED_TODO
} from '../../constants';
import { createTodoInstance } from '../../utils/todoUtils';

export const createTodoDispath = (todo) => ({
  type: CREATE_TODO,
  payload: { todo }
})

export const updateTodoDispath = (id, attributes) => ({
  type: UPDATE_TODO,
  payload: { id, attributes }
});

export const deleteTodoDispath = (id) => ({
  type: DELETE_TODO,
  payload: { id }
});

export const changeFilterTodoDispath = (filter) => ({
  type: CHANGE_TODO_FILTER,
  payload: { filter }
});

export const clearTodoDispatchRequest = () => ({
  type: CLEAR_COMPLETED_TODO,
});

export const createTodo = (name) => (dispatch) => {
  const todo = createTodoInstance(name);
  dispatch(createTodoDispath(todo));
}

export const updateTodo = (id, attributes) => (dispatch) => {
  dispatch(updateTodoDispath(id, attributes));
}

export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoDispath(id))
}

export const changeFilter = (filter) => (dispatch) => {
  dispatch(changeFilterTodoDispath(filter))
}

export const clearFilter = (filter) => (dispatch) => {
  dispatch(clearTodoDispatchRequest())
}
