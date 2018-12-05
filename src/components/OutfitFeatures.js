import React, { Component } from 'react';
import '../scss/OutfitFeatures.scss';

import OutfitFeature from './OutfitFeature.js';

class OutfitFeatures extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isLoaded: false,
          features: props.features
      };
  }

  render() {
    if(!this.props.features) {
        return <p> Loading...</p>;
    } else {
      return (
      	<div className="outfit-features">
  	      {
            this.props.features.map(function(feature, index) {
              return <OutfitFeature 
                        key = { index }
                        index = { index }
                        feature = { feature }
                     />;
            }, this)
          }
  			</div>
    )};
  }
}

export default OutfitFeatures;