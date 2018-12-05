import React, { Component } from 'react';

class SearchBar extends Component {

	constructor() {
		super();
		this.state = {
			currentSearchTerm: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
    this.setState({currentSearchTerm: e.target.value});
  }

	handleSubmit(e) {
		e.preventDefault();
		this.props.addSearchTag(this.state.currentSearchTerm);
		this.setState({ currentSearchTerm: "" })
	}

  render() {
    return (
    	<div className="search-bar">
    		<form onSubmit={ this.handleSubmit }>
    			<input 
    				placeholder="What are you looking for?" 
    				value={ this.state.currentSearchTerm } 
    				onChange={ this.handleChange }
    			/>
    		</form>
			</div>
    );
  }
}

export default SearchBar;