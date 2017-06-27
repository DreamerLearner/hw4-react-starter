import React, { PureComponent } from 'react';

class AddTodo extends PureComponent{

	render(){
		return(
			<form onSubmit={this.onFormSubmit.bind(this)}>
				<input type="text" placeholder="Add new todo" ref="createtodo" />
				<button type="submit">Add</button>
			</form>
		);
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.onTodoSubmit(this.refs.createtodo.value, this.props.player);
		this.refs.createtodo.value = '';
	}

}


export default AddTodo;