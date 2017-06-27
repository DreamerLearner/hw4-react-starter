import React, { PureComponent } from 'react';

class Todolist extends PureComponent{

	render(){

		const { id, isCompleted, task, playerId }  = this.props.todo;
		const markTodo = this.props.markTodo;
		const taskClass = isCompleted ? 'taskComplete' : 'taskIncomplete';

		return(
			<div className={taskClass} onClick={()=>this.props.onClick(id)} >
				{task}
			</div>
		);
	}
}

export default Todolist;