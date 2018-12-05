import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import TopNav from './TopNav.js';

import '../scss/NewOutfitPage.scss';

class NewOutfitPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			image: '',
			featured: false,
			features: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleFeaturedChange = this.handleFeaturedChange.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleFeaturedChange(e) {
		this.setState({ featured: e.target.checked })
	}

	render() {
		return (
			<div className="new-outfit-page">
				<TopNav />
				<div className="form-container">
					<h1>Add New Outfit</h1>
					<form 
						method="POST" 
						action="http://localhost:8080/outfits"
						// action="http://ssui-fs.herokuapp.com/outfits"
					>
						<img src={ this.state.image } />
						<input onChange={ this.handleChange } name='image' value={ this.state.image } placeholder="Image URL"/>
						<input onChange={ this.handleChange } name='title' value={ this.state.title } placeholder="Title"/>
						<input onChange={ this.handleChange } name='tags' value={ this.state.tags } placeholder="Tags (comma-separated)"/>
						<textarea name='description' onChange={ this.handleChange } value={ this.state.description } placeholder="Description"/>
						<label>Feature in homepage slider?</label>
						<input onChange={ this.handleFeaturedChange } name='featured' value={ this.state.featured } type="checkbox"/>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		);
	}

}

export default NewOutfitPage;
