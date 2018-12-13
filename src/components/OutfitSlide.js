import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../scss/OutfitSlider.scss';

import OutfitFeatures from './OutfitFeatures.js';
import FeatureTags from './FeatureTags.js';
import NewFeatureModule from './NewFeatureModule.js';

class OutfitSlide extends Component {

  render() {
    return (
    	<div className="outfit-slide">
    		<div className="outfit-info">
    			<h2>{ this.props.title }</h2>
    			<FeatureTags 
            tags={ this.props.tags }
          />
    			<p>{ this.props.description }</p>
          <Link to={`/outfits/${this.props.id}`} className="details-link">
            View
          </Link>
    		</div>
	      <div className="image-container">
					<img src={ this.props.image } alt="Outfit" />
					<OutfitFeatures features={ this.props.features } />
					<NewFeatureModule 
						outfitId = { this.props.outfitId }
					/>
				</div>
			</div>
    );
  }
}

export default OutfitSlide;