import React, { PureComponent } from 'react';

class Player extends PureComponent {

  render(){

    if (!this.props.data) {
      return <p>Loading Player...</p>;
    }

    const players = this.props.data;
    let activePlayerTxt = '';

    const activePlayer = players.find(player => player.isActive === true);

    activePlayerTxt = `${activePlayer.playerName}'s turn`;

    return <p>{activePlayerTxt}</p>;
    
  }
}

export default Player;
