import React, { Component } from 'react';

import TopNav from './TopNav.js';
import OutfitSlide from './OutfitSlide.js';
import FeatureList from './FeatureList.js';

import '../scss/OutfitPage.scss';

class OutfitPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false
		}
		this.endpoint = process.env.CORS_API + "http://ssui-fs.herokuapp.com/outfits/"
	}

	componentDidMount() {
		let id = this.props.match.params.id
		let outfit = 
			fetch(this.endpoint + id)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            outfit: result
	          });
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      );
	}

	render() {
		let outfit = this.state.outfit;
		if(this.state.isLoaded && this.state.outfit) {
			return (
				<div className="OutfitPage">
					<header>
						<TopNav />
						<OutfitSlide 
							outfitId = { outfit._id }
							title = { outfit.title }
              description = { outfit.description}
              tags = { outfit.tags }
		          image = { outfit.image }
		          features = { outfit.features }
						/>
					</header>
					<FeatureList 
						features = { outfit.features }
					/>
				</div>
			);
		} else {
			return <p>Loading...</p>;
		}
	}

}

export default OutfitPage;
