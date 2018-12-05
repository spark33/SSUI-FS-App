import React, { Component } from 'react';
import '../scss/OutfitSlider.scss';

import OutfitSlide from './OutfitSlide.js';

class OutfitSlider extends Component {

	constructor(props) {
		super(props);
		this.state = {
			slide: 0
		};
	}

	mod(n, m) {
	  return ((n % m) + m) % m;
	}

  render() {
    return (
      <div className="outfit-slider">
      	<a className="slide-left-link" onClick={ () => this.setState({ slide: this.mod(this.state.slide - 1, this.props.outfits.length) }) }>
        	←
        </a>
        <a className="slide-right-link" onClick={ () => this.setState({ slide: this.mod(this.state.slide + 1, this.props.outfits.length) }) }>
        	→
        </a>
        <div 
          className="outfit-slides"
          style={
            {
              transform: 'translate(' + (this.state.slide * -100) + 'vw)',
              width: this.props.outfits.length * 100 + 'vw'
            }
          }
        >
        	{
            this.props.outfits.map(function(outfit, index) {
              return <OutfitSlide 
                        key = { index }
                        index = { index }
                        title = { outfit.title }
                        description = { outfit.description}
                        tags = { outfit.tags }
                        image = { outfit.image }
                        features = { outfit.features }
                     />;
            }, this)
          }
        </div>
      </div>
    );
  }
}

export default OutfitSlider;
