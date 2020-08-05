import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ActionBar from '../../components/ActionBar';
import List from '../../components/List';
import AddForm from '../../components/AddForm';

import { createTodo, updateTodo, deleteTodo, changeFilter, clearFilter } from '../../actions/todoAction';
import { filterTodos, getIncompletedTodoCount } from '../../utils/todoUtils';

class TodosContainer extends Component {
  handleCreateTodo = (name) => {
    const { createTodo } = this.props;

    createTodo(name);
  };

  handleUpdateTodo = (id, attributes) => {
    const { updateTodo } = this.props;

    updateTodo(id, attributes);
  };

  handleDeleteTodo = (id) => {
    const { deleteTodo } = this.props;

    deleteTodo(id);
  };

  handleChangeFilter = (filter) => {
    const { changeFilter } = this.props;

    changeFilter(filter);
  };

  handleClearComplete = () => {
    const { clearFilter } = this.props;

    clearFilter();
  };

  render() {
    const { todos, filter, incompletedCount } = this.props;

    return (
      <div className='app-container'>
        <div className='container'>
          <ActionBar onCreateTodo={this.handleCreateTodo} />
          <List todos={todos} onRemoveTodo={this.handleDeleteTodo} onToggleTodo={this.handleUpdateTodo} />
          <AddForm
            filter={filter}
            todolength={incompletedCount}
            handleFilter={this.handleChangeFilter}
            clearTodo={this.handleClearComplete}
          />
        </div>
      </div>
    )
  }
}

TodosContainer.propTypes = {
  todos: PropTypes.array,
  filter: PropTypes.string,
  createTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  changeFilter: PropTypes.func,
  clearFilter: PropTypes.func,
};

const mapStateToProps = ({ todo }) => {
  const { filter, items } = todo;
  const todos = filterTodos(items, filter);
  const incompletedCount = getIncompletedTodoCount(todo.items);

  return {
    todos,
    filter,
    incompletedCount,
  };
};

const mapDispatchToProps = {
  createTodo,
  updateTodo,
  deleteTodo,
  changeFilter,
  clearFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
