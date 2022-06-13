import React, { Component } from 'react';
import './Keyboard.css';


interface IProps {
}

interface IState {
}


export default class Keyboard extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log(e.target.id);
  }

  render() {
    return (
      <div className="keyboard">
        <div className="line">
          <div className="letter" id="letterQ">Q</div>
          <div className="letter" id="letterW">W</div>
          <div className="letter" id="letterE">E</div>
          <div className="letter" id="letterR">R</div>
          <div className="letter" id="letterT">T</div>
          <div className="letter" id="letterY">Y</div>
          <div className="letter" id="letterU">U</div>
          <div className="letter" id="letterI">I</div>
          <div className="letter" id="letterO">O</div>
          <div className="letter" id="letterP">P</div>
        </div>
        <div className="line">
          <div className="letter" id="letterA">A</div>
          <div className="letter" id="letterS">S</div>
          <div className="lettre" id="letterD">D</div>
          <div className="lettre" id="letterF">F</div>
          <div className="lettre" id="letterG">G</div>
          <div className="lettre" id="letterH">H</div>
          <div className="lettre" id="letterJ">J</div>
          <div className="lettre" id="letterK">K</div>
          <div className="lettre" id="letterL">L</div>
        </div>
        <div className="line">
          <div className="deviner doubleSpace">Jouer</div>
          <div className="letter" id="letterZ">Z</div>
          <div className="letter" id="letterX">X</div>
          <div className="letter" id="letterC">C</div>
          <div className="letter" id="letterV">V</div>
          <div className="letter" id="letterB">B</div>
          <div className="letter" id="letterN">N</div>
          <div className="lettre" id="letterM">M</div>
          <div className="suprm doubleSpace">Del.</div>
        </div>
      </div>
    );
  }
}

