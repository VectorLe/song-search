import React from 'react';
import SearchCard from './SearchCard';

export default function SearchResultsList(prop) {
	const result = prop.searchResults.result;

	return (
		<SearchCard 
			title={result.full_title}
			img={result.header_image_thumbnail_url}
			lyrics={result.url}
		/>
	);
}
