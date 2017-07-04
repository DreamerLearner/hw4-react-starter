import types from '../../action_types';
import settings from '../settings';

const settingsState = settings(undefined, {});
const playerIdArr = [];
settingsState.players.map(setting => playerIdArr.push(setting.id));

const initialState = [
  { id: 1234, playerId: playerIdArr[0], task: 'task 1', isCompleted: true },
  { id: 1235, playerId: playerIdArr[0], task: 'task 2', isCompleted: false },
  { id: 1236, playerId: playerIdArr[0], task: 'task 3', isCompleted: false },
  { id: 1237, playerId: playerIdArr[0], task: 'task 4', isCompleted: false },

  { id: 1238, playerId: playerIdArr[1], task: 'task 5', isCompleted: true },
  { id: 1239, playerId: playerIdArr[1], task: 'task 6', isCompleted: false },
  { id: 1240, playerId: playerIdArr[1], task: 'task 7', isCompleted: true },
  { id: 1241, playerId: playerIdArr[1], task: 'task 8', isCompleted: false },
  { id: 1242, playerId: playerIdArr[1], task: 'task 9', isCompleted: false },
];

const todoItemReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_TODO:
      return {
        ...state,
        id: new Date() / 1,
        playerId: action.payload.playerId,
        task: action.payload.todoName,
        isCompleted: false,
      };
    case types.MARK_TODO:
      if (state.id !== action.payload) {
        return state;
      }
      return { ...state, isCompleted: !state.isCompleted };
    case types.ADD_PLAYERS:
      return { ...state, playerId: action.payload.playerNewId };
    default:
      return state;
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PLAYERS: {
      const settingsNewState = settings(undefined, {});
      const playerNewIdArr = [];
      settingsNewState.players.map(setting => playerNewIdArr.push(setting.id));

      return state.map(todo => {
        if (todo.playerId === playerIdArr[0]) {
          action.payload.playerNewId = playerNewIdArr[0];
        } else {
          action.payload.playerNewId = playerNewIdArr[1];
        }
        return todoItemReducer(todo, action);
      });
    }
    case types.CREATE_TODO:
      return [...state, todoItemReducer(undefined, action)];
    case types.MARK_TODO:
      return state.map(todo => todoItemReducer(todo, action));
    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}
