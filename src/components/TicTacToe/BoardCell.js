import React, { PureComponent } from 'react';

class BoardCell extends PureComponent {

  render() {
  
    const cells = this.props.cell.map(singlecell =>
      <td key={Math.random()} id={singlecell.cellid} onClick={() => this.props.markCell(singlecell.cellid)}>
        {singlecell.cellValue}
      </td>,
    );

    return (
      <tr id={Math.random()}>
        {cells}
      </tr>
    );
  }
}

export default BoardCell;
