import React, { Component } from 'react';

import './index.css';

import greenTickIcon from '../../assets/images/green-tick.svg';
import blackTickIcon from '../../assets/images/black-tick.svg';
import editIcon from '../../assets/images/edit.svg';
import deleteIcon from '../../assets/images/delete.svg';

class Item extends Component {
  handleToggle = (e) => {
    e.preventDefault();

    const { onToggleTodo, data } = this.props;
    const attribute = { completed: !data.completed};
    onToggleTodo(attribute);
  };

  handleDelete = (e) => {
    e.preventDefault();
    const { onRemoveTodo } = this.props;

    onRemoveTodo();
  }

  render() {
    const {
      data: {
        name,
        completed
      }
    } = this.props;

    return (
      <div className='item-container'>
        <a className='item-toggle' onClick={this.handleToggle}>
          {completed && <img src={greenTickIcon} alt='tick' />}
          {!completed && <img src={blackTickIcon} alt='tick' />}
        </a>
        <div className={`item-content ${completed ? 'completed' : 'incompleted'}`}>
          {name}
        </div>
        <div className='item-options'>
          <a className='icon-btn'>
            <img src={editIcon} alt='edit' />
          </a>
          <a className='icon-btn' onClick={this.handleDelete}>
            <img src={deleteIcon} alt='close' />
          </a>
        </div>
      </div>
    )
  }
}

export default Item;
