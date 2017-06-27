import types from '../../action_types';
import settings from '../settings';

const settingsState = settings(undefined, {});
const playerIdArr = [];
settingsState.players.map( setting => playerIdArr.push(setting.id));


// const initialState = [
//   {
//     [playerIdArr[0]] :  [ { id: 1234 , task: 'task 1', isCompleted: true },
//                           { id: 1235 , task: 'task 2', isCompleted: false },
//                           { id: 1236 , task: 'task 3', isCompleted: false },
//                           { id: 1237 , task: 'task 4', isCompleted: false }]
//   },
//   {
//     [playerIdArr[1]] :  [ { id: 1238 , task: 'task 5', isCompleted: true },
//                           { id: 1239 , task: 'task 6', isCompleted: false },
//                           { id: 1240 , task: 'task 7', isCompleted: true },
//                           { id: 1241 , task: 'task 8', isCompleted: false },
//                           { id: 1242 , task: 'task 9', isCompleted: false }]
//   }
// ];

console.log('initialState===', typeof(initialState));
initialState.map( val => {
  console.log('val===',typeof(val));
  Object.values(val).map( v => {
    console.log('v===',typeof(v));
    v.map( x => {
      console.log( 'x===', typeof(x));
      // console.log( JSON.stringify(x), typeof(x));
    })
  })
});

const todoItemReducer = (state = {}, action ) => {
  switch(action.type){
    // case CREATE_TODO :
    //   return { ...state, id: (new Date() / 1), task : action.payload , isCompleted : false };
    case types.MARK_TODO :
      // console.log(action);
      // console.log('=============',state);
      if (state.id !== action.payload) {
        return state;
      };
      const newState = { ...state, isCompleted: !state.isCompleted };

      // console.log("sneha3",newState);
      return state;
    default:
      return state;
  }
}

const playerTodoReducer = ( state = {}, action ) => {
  switch(action.type){
    case types.MARK_TODO:
      console.log(typeof(state));
      state.forEach( (todo, key) => {

        console.log('forEach',todo, typeof(todo));
      })
      // console.log('=============',state);
      // console.log('=============',typeof(state));
      // const pTodos = Object.values(state);
      // const newState = { ...state, state.forEach( todo => {
      //   todoItemReducer(todo, action);
      //   }) };
      // console.log("sneha2",newState);
      // console.log(state);
      return state;
    default:
      return state;
  }  
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.MARK_TODO:

        const newState = { ...state, state.map( players => {
                            Object.values(players).map( playertodos => playerTodoReducer(playertodos,action));
                            // Object.values(players).map( playertodos => console.log('sneha4', typeof(playertodos)));
                          })
                         };
        // console.log("sneha1",newState);
        console.log('=============',newState);
        // console.log('=============',state);
        // console.log('=============',action);
      return state;
    default:
      return state;
  }
}
