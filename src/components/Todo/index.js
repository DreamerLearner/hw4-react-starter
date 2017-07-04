import React, { Component } from 'react';
import { connect } from 'react-redux';

import { markTodo, onTodoSubmit, onDelete } from '../../actions';

import Todolist from './Todolist';
import AddTodo from './AddTodo';

class Todo extends Component {
  render() {
    const { todos } = this.props;
    const players = this.props.players.players;

    const playerIdArr = [];
    players.map(player => playerIdArr.push(player.id));

    const player1Todo = [];
    const player2Todo = [];

    todos.map(todo => {
      if (todo.playerId === playerIdArr[0]) {
        player1Todo.push(todo);
      } else {
        player2Todo.push(todo);
      }
    });

    const player1TodoHtml = player1Todo.map(todo =>
      <Todolist key={todo.id} todo={todo} onClick={this.props.markTodo} onDelete={this.props.onDelete} />,
    );
    const player2TodoHtml = player2Todo.map(todo =>
      <Todolist key={todo.id} todo={todo} onClick={this.props.markTodo} onDelete={this.props.onDelete} />,
    );

    return (
      <div>
        <h3>Todo Page</h3>
        <div>
          <p>{players[0].name}</p>
          <AddTodo player={players[0].id} onTodoSubmit={this.props.onTodoSubmit} />
          {player1TodoHtml}
        </div>
        <div>
          <p>{players[1].name}</p>
          <AddTodo player={players[1].id} onTodoSubmit={this.props.onTodoSubmit} />
          {player2TodoHtml}
        </div>
      </div>
    );
  }
}

const selected = state => ({
  todos: state.todo,
  players: state.settings,
});

export default connect(selected, { markTodo, onTodoSubmit, onDelete })(Todo);
