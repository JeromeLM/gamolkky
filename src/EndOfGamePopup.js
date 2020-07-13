import React from 'react';
import './EndOfGamePopup.css';

class EndOfGamePopup extends React.Component {
  render() {
    return (
      <div className='popup bg-blue'>
        <div className='winner'>
          <h1>{`The winner is : ${this.props.winner} !`}</h1>
        </div>
        <div className='eog'>
          <h1>End of game !</h1>
        </div>
        <div className='close_button'>
          <button onClick={this.props.close}>Close</button>
        </div>
      </div>
    );
  }
}

export default EndOfGamePopup;