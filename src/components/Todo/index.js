import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todolist from './Todolist';

class Todo extends Component{

	render(){
		const playerNames = [];
		this.props.players.map( player => playerNames.push(player.name) );

		const playerWiseTodo = [];
		playerNames.map( player => {
			playerWiseTodo.push(this.props.todos.filter( todo => todo.name === player ));
		});		

		const todoListHtml = playerWiseTodo.map( playerTodo => {
			playerTodo.map( (todo,index) => <Todolist key={index} data={todo} /> );
		});

		return(
			<div>
				<h3>Todo Page</h3>		
				{todoListHtml}
			</div>
		);
	}

}

const selected = state => {
	return { 
		todos: state.todo,
		players: state.settings.players
	}
}

export default connect(selected)(Todo);