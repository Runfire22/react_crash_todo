import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ToodoItem from './TodoItem';

class Todos extends Component {
    render() {
        // console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <ToodoItem
                key={todo.id} todo={todo}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo} />
        ));
    }
}

// Proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.array.isRequired,
    delTodo: PropTypes.array.isRequired
}

export default Todos;
