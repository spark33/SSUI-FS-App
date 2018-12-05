import React, { Component } from 'react';

import FeatureTags from './FeatureTags.js';

class FeatureList extends Component {

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
      	<div className="feature-list">
      		{
            this.props.features.map(function(feature, index) {
              return (
                <div key={ index } className="feature">
                  <h1>{ feature.title }</h1>
                  <FeatureTags 
                    tags={ feature.tags }
                  />
                  <p>{ feature.description }</p>
                </div>
              );
            })
          }
    		</div>
      );
    }
  }
}

export default FeatureList;