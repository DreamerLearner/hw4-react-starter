import types from '../../action_types';
import settings from '../settings';

const settingsState = settings(undefined, {});
const playerIdArr = [];
settingsState.players.map( setting => playerIdArr.push(setting.id));

console.log('playerIdArr-----',playerIdArr);

const initialState = [
  { id: 1234 , playerId : playerIdArr[0], task: 'task 1', isCompleted: true },
  { id: 1235 , playerId : playerIdArr[0], task: 'task 2', isCompleted: false },
  { id: 1236 , playerId : playerIdArr[0], task: 'task 3', isCompleted: false },
  { id: 1237 , playerId : playerIdArr[0], task: 'task 4', isCompleted: false },

  { id: 1238 , playerId : playerIdArr[1], task: 'task 5', isCompleted: true },
  { id: 1239 , playerId : playerIdArr[1], task: 'task 6', isCompleted: false },
  { id: 1240 , playerId : playerIdArr[1], task: 'task 7', isCompleted: true },
  { id: 1241 , playerId : playerIdArr[1], task: 'task 8', isCompleted: false },
  { id: 1242 , playerId : playerIdArr[1], task: 'task 9', isCompleted: false }

];


const todoItemReducer = (state = {}, action ) => {
  switch(action.type){
    case types.CREATE_TODO :
      return { ...state, id: (new Date() / 1), playerId: action.payload.playerId, task: action.payload.todoName , isCompleted: false };
    case types.MARK_TODO :
      if (state.id !== action.payload) {
        return state;
      };
      return { ...state, isCompleted: !state.isCompleted };
    /*case types.ADD_PLAYERS:
      return state;*/
    default:
      return state;
  }
}

const playerTodoReducer = ( state = {}, action ) => {
  switch(action.type){
    case types.MARK_TODO:
      return state;
    default:
      return state;
  }  
}

export default function(state = initialState, action) {
  switch (action.type) {
    /*case types.ADD_PLAYERS: {
        const settingsNewState = settings(undefined, {});
        const playerNewIdArr = [];
        settingsNewState.players.map( setting => playerNewIdArr.push(setting.id));

        const newState = state.map((todo,index) => {
          action.payload.playerNewIdArr = playerNewIdArr[index];
          todoItemReducer(todo, action)
        });
      } 
      return state;*/
    case types.CREATE_TODO :
      return [ ...state, todoItemReducer(undefined,action) ];
    case types.MARK_TODO:
      return state.map(todo => todoItemReducer(todo, action));
    default:
      return state;
  }
}
