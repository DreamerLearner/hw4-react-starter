const initialState = {
  players : [
  	{id:'1234', name: 'Player 1', bio: 'Hi, I am from Mumbai.', city: 'Mumbai'},
  	{id:'5678', name: 'Player 2', bio: 'Hi, I like games.', city: 'Delhi'},
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
