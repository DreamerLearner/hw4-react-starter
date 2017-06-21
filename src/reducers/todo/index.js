const initialState = [
  { id: '4521', name: 'Player 1', task: 'task 1', isCompleted: true },
  { id: '9852', name: 'Player 2', task: 'task 2', isCompleted: false },
  { id: '4521', name: 'Player 1', task: 'task 3', isCompleted: true },
  { id: '9852', name: 'Player 2', task: 'task 4', isCompleted: false },
  { id: '4521', name: 'Player 1', task: 'task 5', isCompleted: true },
  { id: '9852', name: 'Player 2', task: 'task 6', isCompleted: false },
  { id: '4521', name: 'Player 1', task: 'task 7', isCompleted: true },
  { id: '9852', name: 'Player 2', task: 'task 7', isCompleted: false },
];


export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
