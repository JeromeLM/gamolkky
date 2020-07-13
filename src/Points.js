import React, { Fragment } from 'react';
import './Points.css';

const Points = (props) => {
	return (
		<Fragment>
			<div className='buttons-container'>
				<button type='button' className='button' value='1' onClick={props.scoreChange}>1</button>
				<button type='button' className='button' value='2' onClick={props.scoreChange}>2</button>
				<button type='button' className='button' value='3' onClick={props.scoreChange}>3</button>
				<button type='button' className='button' value='4' onClick={props.scoreChange}>4</button>
				<button type='button' className='button' value='5' onClick={props.scoreChange}>5</button>
				<button type='button' className='button' value='6' onClick={props.scoreChange}>6</button>
				<button type='button' className='button' value='7' onClick={props.scoreChange}>7</button>
				<button type='button' className='button' value='8' onClick={props.scoreChange}>8</button>
				<button type='button' className='button' value='9' onClick={props.scoreChange}>9</button>
				<button type='button' className='button' value='10' onClick={props.scoreChange}>10</button>
				<button type='button' className='button' value='11' onClick={props.scoreChange}>11</button>
				<button type='button' className='button' value='12' onClick={props.scoreChange}>12</button>
				<button type='button' className='button' value='0' onClick={props.scoreChange}>MISS</button>
				
			</div>
		</Fragment>
	);
}

export default Points;