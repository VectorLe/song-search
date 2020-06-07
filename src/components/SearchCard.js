import React from 'react';

export default function SearchCard(prop) {
	return (
		<div className="search-card">
			<div className="song-img">
				<img src={prop.img} alt={prop.title} />
			</div>
			<div className="song-details">
				<h4> {prop.title}</h4>
				<a href={prop.lyrics} 
				   target="_blank" 
				   rel="noopener noreferrer">
				Full Lyrics
				</a>
			</div>
		</div>
	);
}
