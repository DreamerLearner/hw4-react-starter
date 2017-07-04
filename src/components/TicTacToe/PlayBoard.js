import React, { PureComponent } from 'react';
import BoardCell from './BoardCell';

class PlayBoard extends PureComponent {
  render() {
    if (!this.props.data.cells) {
      return <p>Loading...</p>;
    }

    const { cells, players } = this.props.data;
    const boardsRows = cells.map((cell, index) =>
      <BoardCell key={index} players={players} cell={cell} markCell={this.props.markCell} />,
    );

    return (
      <div>
        <table>
          <tbody>
            {boardsRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlayBoard;
