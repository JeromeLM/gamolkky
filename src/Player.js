import React, { Fragment } from 'react';

import './Player.css';

const Player = (props) => {
	let bgColor = '';
	switch (props.color) {
		case 'red':
			bgColor = 'bg-red';
			break;
		case 'yellow':
			bgColor = 'bg-yellow';
			break;
		case 'orange':
			bgColor = 'bg-orange';
			break;
		case 'blue':
			bgColor = 'bg-blue';
			break;
		case 'green':
		default:
			bgColor = 'bg-green';
			break;
	}
	
	if (props.type === 'complete') {
		return (
			<Fragment>
				<div className={bgColor + " tc dib br3 pa3 ma2 grow bw2 shadow-5 player"}>
					<div className='profile'>
						<img alt='robots' src={`https://robohash.org/${props.name}`}/>
					</div>
					<div className='name'>
		    			{props.name}
		    		</div>
		    		<div className='score'>
						{props.score} ({50 - props.score} left)
					</div>
					<div className='history'>
						{props.history}
					</div>
					<div className='rank'>
						{props.rank}
					</div>
		  		</div>
			</Fragment>
		);
	} else {
	return (
		<Fragment>
			<div className={bgColor + " br3 grow bw2 shadow-5 player-simple"}>
				<div className='rank'>
					{props.rank}
				</div>
				<div className='profile-simple'>
					<img alt='robots' src={`https://robohash.org/${props.name}`}/>
				</div>
				<div className='name'>
		    		{props.name}
		    	</div>
		    	<div className='score'>
					{props.score} ({50 - props.score} left)
				</div>
			</div>
		</Fragment>
		);
	}
}

export default Player;