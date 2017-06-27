import types from '../action_types';

const markTodo = todoId => {
  return{
    type: types.MARK_TODO,
    payload: todoId
  }
}

const onTodoSubmit = (todoName,playerId) => {
	return{
		type : types.CREATE_TODO,
		payload : {todoName,playerId}
	}
}

const onSettingsSubmit = (formObj = []) => {
  return{
    type: types.ADD_PLAYERS,
    payload: formObj
  }
}

export {
  markTodo,
  onTodoSubmit,
  onSettingsSubmit
};
