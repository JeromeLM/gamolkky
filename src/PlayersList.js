import React, { Fragment } from 'react';

import Player from './Player';
import './PlayersList.css'

const PlayersList = (props) => {
	
	/*console.log(props.players, props.currentPlayer);*/
	
	const filteredPlayersArray = props.players.filter((player) => {
		return player.name !== props.currentPlayer.name
	})

	const rankingArray = filteredPlayersArray.map((player, i) => {
		return <Player key={i} type='simple' rank={player.rank} color={player.color} name={player.name} score={player.score}/>
	})

	return (
		<Fragment>
			<div className='current-player'>
				<Player type='complete' color={props.currentPlayer.color} name={props.currentPlayer.name} score={props.currentPlayer.score} history={props.currentPlayer.history} rank={props.currentPlayer.rank}/>
			</div>
			<div className='ranking'>
				{rankingArray}
			</div>
		</Fragment>
	);
}

export default PlayersList;