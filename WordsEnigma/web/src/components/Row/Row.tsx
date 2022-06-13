import React, { Component } from 'react';
import './Row.css';


interface IProps {
  numberofLetter: number | 5;
}

interface IState {
  isCurrent: boolean;
}

export default class Row extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isCurrent: false,
    };

  }
  render() {
    return (
      <div className="row">
        {
          Array.from({ length: this.props.numberofLetter }, (_, i) => (
            <div className="letterBox" key={i}>
            </div>
          ))
        }
      </div>
    );
  }
}
