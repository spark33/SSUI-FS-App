import React, { Component } from 'react';

import SearchTag from './SearchTag.js';

class SearchTags extends Component {
	
  render() {
    return (
    	<div className="search-tags">
    		{
    			this.props.tags.map(function(tag, index) {
    				return <SearchTag
    					key={ index }
    					index={ index }
    					text= { tag }
    					removeSearchTag={ this.props.removeSearchTag }
    				/>;
    			}, this)
    		}
			</div>
    );
  }
}

export default SearchTags;