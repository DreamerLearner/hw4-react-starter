import React, { PureComponent } from 'react';

class Todolist extends PureComponent {
  render() {
    const { id, isCompleted, task } = this.props.todo;
    const taskClass = isCompleted ? 'taskComplete' : 'taskIncomplete';

    return (
      <div>
        <span className={taskClass} onClick={() => this.props.onClick(id)}>{task}</span>
        <button onClick={() => this.props.onDelete(id)}>Delete</button>
      </div>
    );
  }
}

export default Todolist;
