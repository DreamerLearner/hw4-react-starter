import types from '../../action_types';

const initialState = {
  players: [
    { id: 12345, name: 'P1', bio: 'Hi, I am from Mumbai.', city: 'Mumbai' },
    { id: 56789, name: 'P2', bio: 'Hi, I like games.', city: 'Delhi' },
  ],
};

const playerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_PLAYERS:
      return { id: Math.round(Math.random(5631546543) * 26), name: state.name, bio: state.bio, city: state.city };
    default:
      return state;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PLAYERS:
      return { ...state, players: action.payload.map(player => playerReducer(player, action)) };
    default:
      return state;
  }
};
