import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchResultsList from './components/SearchResultsList';
import loaderImg from './assets/loading.gif';
import './style.css';

const token = 'HttWanLiez5LzioxW7qV33R_5ux5NgvvVJ8rCScWj-FHdljOLWOJp4sQyCmHtsda';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://api.genius.com';

export default function App() {
	const [query, setQuery] = useState("");
	const [finalQuery, setFinalQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setLoading] = useState(false);

	function replaceSpaces(str) {
		return str.replace(/ /g,"%20");
	}

	function updateQuery(event) {
		event.preventDefault();
		setQuery(event.target.value);
	}

	function handleSubmit(event) {
		setFinalQuery(replaceSpaces(event.target[0].value));
		event.preventDefault();
	}

	// each time finalQuery changes, pull new API data
	useEffect(() => {
		if(!isLoading && finalQuery !== "") setLoading(true);
		axios({
			method: 'GET',
			url: CORS_PROXY + BASE_URL + `/search?per_page=15&q=${finalQuery}`,
			headers: {
				Authorization: 'Bearer ' + token
			}})
			.then(res => {
				setSearchResults(res.data.response.hits);
				setLoading(false);
				// console.log(res.data.response.hits);
			})
			.catch(err => {
				console.log(err);
			}
		);
	}, [finalQuery])

	return (
		<div id="page-wrapper">
			<Header 
				query={query}
				handleSubmit={handleSubmit}
				replaceSpaces={replaceSpaces}
				updateQuery={updateQuery}
			/>
			{
				(isLoading)
				? <div id="load-screen">
				  	<img src={loaderImg} id="loader-img" alt="Loading..."/>
				  </div>
				: <div id="search-container">
					{
						searchResults.map((search) => {
							return <SearchResultsList key={search.result.id} searchResults={search} />
						})
					}
				  </div>
			}
		</div>
	);
}
