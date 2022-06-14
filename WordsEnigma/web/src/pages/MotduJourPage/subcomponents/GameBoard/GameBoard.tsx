import React, { Component } from 'react';
import './GameBoard.css';


interface IProps {
  cols: number | 5;
  rows: number | 6;
}

interface IState {
  isCurrent: boolean;
}

class GameBoard extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isCurrent: false,
    };

  }

  renderGrid() {
    const { cols, rows } = this.props;
    const grid = [];
    for (let i = 0; i < rows; i++) {
      grid.push(
        <div className="row" key={i}>
          {this.renderRow(i, cols)}
        </div>
      );
    }
    return grid;
  }

  renderRow(row, cols) {
    const rowGrid = [];
    for (let i = 0; i < cols; i++) {
      rowGrid.push(
        <div className="col" key={i}>
          {this.renderCell(row, i)}
        </div>
      );
    }
    return rowGrid;
  }

  renderCell(row, col) {
    return <div className="cell"></div>;
  }


    render() {
      return (
        <div className="gameBoard">
          <div className="gameBoard__grid">
            {this.renderGrid()}
          </div>
        </div>
      );
    }
  }

export default GameBoard;
