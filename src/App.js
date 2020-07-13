import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import PlayersList from './PlayersList';
import Points from './Points';
import EndOfGamePopup from './EndOfGamePopup';
import './App.css';

let players = [
    {
      name: 'Laurent Gina',
      color: 'green',
      score: '0',
      history: '',
      rank: 1
    },
    {
      name: 'Sarah Fraichi',
      color: 'green',
      score: '0',
      history: '',
      rank: 2
    },
    {
      name: 'Homer Dalor',
      color: 'green',
      score: '0',
      history: '',
      rank: 3
    },
    {
      name: 'Sarah Croche',
      color: 'green',
      score: '0',
      history: '',
      rank: 4
    },
    {
      name: 'James Patagueule',
      color: 'green',
      score: '0',
      history: '',
      rank: 5
    },
    {
      name: 'Pacome Toutlemonde',
      color: 'green',
      score: '0',
      history: '',
      rank: 6
    },
    {
      name: 'Jean Chit',
      color: 'green',
      score: '0',
      history: '',
      rank: 7
    },
  ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: players,
      currentPlayer: players[0],
      nbOfAlivePlayers: players.length,
      showEogPopup: false
    };
    /*console.log(this.state.players);*/
  }

  togglePopup = () => {
   this.setState({
     showEogPopup: !this.state.showEogPopup
   });
  }

  resetPlayersInfo = () => {
    this.setState({players: [], currentPlayer: {}, nbOfAlivePlayers: 0});
  }

  closeEogPopup = () => {
    this.togglePopup();
    this.resetPlayersInfo();
  }

  updatePlayerScoreAndColor(currentScore, currentColor, newPoints) {
    let newScore = 0;
    let newColor = 'green';
    let isDisqualified = false;

    if (Number(newPoints) === 0) {
      switch (currentColor) {
        case 'green':
          newColor = 'yellow';
          break;
        case 'yellow':
          newColor = 'orange';
          break;
        case 'orange':
          newColor = 'red';
          isDisqualified = true;
          break;
        default:
          break;
      }
    }

    newScore = Number(currentScore) + Number(newPoints);
      
    if ((!isDisqualified) && (newScore > 50)) {
        newScore = 50 / 2;
      }
    
    return {score: newScore, color: newColor};
  }

  managePlayers = (players, currentPlayer, nbOfAlivePlayers) => {
    let indexCurrentPlayer = currentPlayer.rank - 1;

    if (currentPlayer.color === 'red') {
      nbOfAlivePlayers--;

      if (nbOfAlivePlayers > 1) {
        let i = indexCurrentPlayer;
        let isRearrangementDone = false;
        while (!isRearrangementDone) {
          console.log(i, nbOfAlivePlayers);
          if (i + 1 <= nbOfAlivePlayers) {
            if (players[i + 1].color !== 'red') {
              players[i] = players[i + 1];
              players[i].rank--;
              currentPlayer.rank++;
              i++;
            } else {
              isRearrangementDone = true;
            }
          } else {
            isRearrangementDone = true;
          }
        }

        players[i] = currentPlayer;
        players[i].rank = i + 1;

        // Determine who is the next player (new "current player")
        indexCurrentPlayer = indexCurrentPlayer !==  currentPlayer.rank - 1 ? indexCurrentPlayer : 0;
      } else {
        players[indexCurrentPlayer] = players[indexCurrentPlayer + 1];
        players[indexCurrentPlayer + 1] = currentPlayer;
        this.togglePopup();
      }
    } else {
      // Determine who is the next player (new "current player")
      indexCurrentPlayer = indexCurrentPlayer + 1 >= nbOfAlivePlayers ? 0 : indexCurrentPlayer + 1;
    }
    
    currentPlayer = players[indexCurrentPlayer];

    this.setState({'players': players, 'currentPlayer': currentPlayer, 'nbOfAlivePlayers': nbOfAlivePlayers});
  }

  onChange = (event) => {
    /*console.log(event.target.value);*/
    
    // Update current player score, color and history
    let players = this.state.players;
    let currentPlayer = this.state.currentPlayer;
    let nbOfAlivePlayers = this.state.nbOfAlivePlayers;
    
    const {score, color} = this.updatePlayerScoreAndColor(currentPlayer.score, currentPlayer.color, event.target.value);
    /*console.log(score, color);*/
    currentPlayer.score = score;
    currentPlayer.color = color;
    currentPlayer.history += ' ' + event.target.value;

    if (currentPlayer.score === 50) {
      this.togglePopup();
    } else {
      this.managePlayers(players, currentPlayer, nbOfAlivePlayers);
    }
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <header className='bg-blue'>
            <NavBar />
          </header>
          <section>
            {this.state.players.length === 0 ? null : <PlayersList players={this.state.players} currentPlayer={this.state.currentPlayer}/>}
          </section>
          <footer className='bg-blue'>
            <Points scoreChange={this.onChange}/>
          </footer>
        </div>
        <div>
          {this.state.showEogPopup ? <EndOfGamePopup winner={this.state.players[0].name} close={this.closeEogPopup}/> : null}
        </div>
      </Fragment>
    );
  }
}


export default App;