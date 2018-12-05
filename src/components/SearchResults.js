import React, { Component } from 'react';

import SearchResult from './SearchResult.js';

class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            results: props.results
        };
    }
	
    render() {
        if(!this.props.results) {
            return <p> Loading...</p>;
        } else {
            return (
            	<div className="search-results">
            		{
            			this.props.results.map(function(result, index) {
            				return <SearchResult
            					key={ result._id }
            					result= { result }
            				/>;
            			})
            		}
        			</div>
            );
        }
    }
}

export default SearchResults;