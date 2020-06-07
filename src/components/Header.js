import React from 'react';

export default function Header(prop) {
	return (
		<div id="header">
			<h1>Song Search</h1>
			<form className="search-form" onSubmit={prop.handleSubmit}>
				<input 
					type="text"
					className="input-text"
					maxLength="200"
					value={prop.query} 
					onChange={(e) => 
						prop.updateQuery(e)
					} />
				<input
					type="submit"
					className="submit-search"
					value="Search"
				/>
			</form>
			{
				(prop.query) 
				? <div>
				  	<p>You are searching for:</p>
				  	<p className="search-query">"{prop.query}"</p>
				  </div>
				: <p className="seach-query">Please enter your search</p>
			}
		</div>
	);
}
