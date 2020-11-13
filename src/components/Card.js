import React from 'react';



const Card = ({ name,email,id }) => {
	return (
	<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img src={`https://robohash.org/${id}`} alt='robots' width="150" height="150" />
		<div>
		  <h2> {name} </h2>
		  <p> {email}</p>
		</div>
	</div>
    );
}


export default Card;