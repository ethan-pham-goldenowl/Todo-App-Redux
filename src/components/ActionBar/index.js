import React, { Component } from 'react';

import './index.css'

class ActionBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  clearname = () => {
    this.setState({
      name: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { onCreateTodo } = this.props;
    const { name } = this.state;

    onCreateTodo(name);
    this.clearname();
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const { name } = this.state

    return (
      <div className='actionbar-container'>
        <form className='actionbar-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='What need to be done?'
            onChange={this.handleChange}
            value={name}
          />
        </form>
      </div>
    )
  }
}

export default ActionBar;
