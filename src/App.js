import React, { Component } from 'react';
import { Provider } from 'react-redux';

import TodosContainer from './containers/todoContainer';

import configureStore from './store';
import { saveTodosToLocalStorage } from './utils/todoUtils';

const store = configureStore();

store.subscribe(() => {
  const { todo } = store.getState();

  saveTodosToLocalStorage(todo.items);
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodosContainer />
      </Provider>
    );
  }
}

export default App;
