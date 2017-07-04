import React, { Component } from 'react';
import { connect } from 'react-redux';

import Player from './Player';
import PlayBoard from './PlayBoard';
import { markCell } from '../../actions';

import './game.css';

class TicTacToe extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="game_header">Play tic-tac-toe</h2>
        <Player data={this.props.players} />
        <PlayBoard data={this.props} markCell={this.props.markCell} />
      </div>
    );
  }
}

const selected = state => ({
  players: state.game.players,
  cells: state.game.cells,
});

export default connect(selected, { markCell })(TicTacToe);
