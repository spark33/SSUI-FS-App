import React, { Component } from 'react';

class SearchTag extends Component {

    constructor() {
        super();
        this.remove = this.remove.bind(this);
    }

    remove() {
        this.props.removeSearchTag(this.props.text);
    }

    render() {
        return (
        	<div className="search-tag">
        		{ this.props.text }
                <a onClick={ this.remove }>
                    x
                </a>
    		</div>
        );
  }
}

export default SearchTag;