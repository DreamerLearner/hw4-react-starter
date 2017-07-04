import types from '../../action_types';

import settings from '../settings';

const settingsState = settings(undefined, {});
const playerIdArr = [];
settingsState.players.map(setting => playerIdArr.push({ id: setting.id, name: setting.name }));

const initialState = {
  cells: [
    [{ cellid: 'col1_1', cellValue: '' }, { cellid: 'col1_2', cellValue: '' }, { cellid: 'col1_3', cellValue: '' }],

    [{ cellid: 'col2_1', cellValue: '' }, { cellid: 'col2_2', cellValue: '' }, { cellid: 'col2_3', cellValue: '' }],

    [{ cellid: 'col3_1', cellValue: '' }, { cellid: 'col3_2', cellValue: '' }, { cellid: 'col3_3', cellValue: '' }],
  ],

  players: [
    { id: 7865, playerId: playerIdArr[0].id, playerName: playerIdArr[0].name, isActive: true, gameMarker: 'X' },
    { id: 8572, playerId: playerIdArr[1].id, playerName: playerIdArr[1].name, isActive: false, gameMarker: 'O' },
  ],
};

const playerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.MARK_CELL:
      return { ...state, isActive: !state.isActive };
    case types.ADD_PLAYERS:
      return { ...state, playerId: action.payload.playerNewId, playerName: action.payload.name };
    default:
      return state;
  }
};

const cellMarker = (state = {}, action) => {
  switch (action.type) {
    case types.MARK_CELL:
      if (state.cellid === action.payload && state.cellValue === '') {
        return { ...state, cellValue: action.activeGameMarker };
      }
      return state;
    default:
      return state;
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.MARK_CELL: {
      let activeGameMarker = '';
      state.players.find(player => {
        if (player.isActive) activeGameMarker = player.gameMarker;
        return activeGameMarker;
      });
      action.activeGameMarker = activeGameMarker;

      return {
        ...state,
        cells: state.cells.map(row => row.map(cell => cellMarker(cell, action))),
        players: state.players.map(player => playerReducer(player, action)),
      };
    }

    case types.ADD_PLAYERS: {
      const settingsNewState = settings(undefined, {});
      const playerNewIdArr = [];
      settingsNewState.players.map(setting => playerNewIdArr.push({ id: setting.id, name: setting.name }));
      const newstate = {
        ...state,
        players: state.players.map(player => {
          if (player.playerId === playerIdArr[0].id) {
            action.payload.playerNewId = playerNewIdArr[0].id;
            action.payload.name = playerNewIdArr[0].name;
          } else {
            action.payload.playerNewId = playerNewIdArr[1].id;
            action.payload.name = playerNewIdArr[1].name;
          }
          return playerReducer(player, action);
        }),
      };
      return newstate;
    }

    default:
      return state;
  }
}
