import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchTag extends Component {

    render() {
        return (
            <Link to={`/outfits/${this.props.result._id}`}>
            	<div className="search-result">
            		<img src={ this.props.result.image } alt="Outfit" />
        		</div>
            </Link>
        );
  }
}

export default SearchTag;