import React, { Component } from 'react';

class NewFeatureModule extends Component {

	constructor() {
		super();
		this.state = {
			addMode: false,
			infoMode: false,
			feature: {}
		}
		this.endpoint = "http://ssui-fs.herokuapp.com/features";
		this.handleFeatureChange = this.handleFeatureChange.bind(this);
	}

	handleFeatureChange(e) {
		this.setState({ 
			feature: {
				[e.target.name]: e.target.value 
			}
		})
	}

	setAddMode(e) {
		this.setState({ addMode: true, infoMode: false });
	}

	addFeature(e) {
		let clickArea = e.target.getBoundingClientRect();
		let x_percent = (e.clientX - clickArea.left) / clickArea.width * 100;
		let y_percent = (e.clientY - clickArea.top) / clickArea.height * 100;
		this.setState({ 
			feature: {
				x: x_percent,
				y: y_percent
			},
			addMode: false, 
			infoMode: true 
		});
	}

  render() {
  	if(this.state.addMode) {
  		return (
  			<div className="new-feature new-feature-canvas" onClick={ this.addFeature.bind(this) }>
  			</div>
  		);
  	} else if(this.state.infoMode) {
  		return (
  			<div className="new-feature new-feature-form-container">
  				<form 
  					className="new-feature-form" 
  					method="POST" 
  					action={ this.endpoint } 
  				>
  					<input name="x" type="hidden" value={ this.state.feature.x }/> 
  					<input name="y" type="hidden" value={ this.state.feature.y }/> 
  					<input name="outfitId" type="hidden" value={ this.props.outfitId }/> 
  					<input name="title" type="text" onChange={ this.handleFeatureChange } placeholder="Title"/>
  					<input name="tags" onChange={ this.handleFeatureChange } placeholder="Tags (comma-separated)" />
  					<textarea name="description" onChange={ this.handleFeatureChange } placeholder="Description" />
  					<input name="link" type="text" onChange={ this.handleFeatureChange } placeholder="Link"/>
  					<button type="submit">Submit</button>
  				</form>
  			</div>
  		);
  	} else {
  		return (
	    	<div className="new-feature new-feature-module">
		      <button onClick={ this.setAddMode.bind(this) }>Add Feature</button>
				</div>
	    );
  	}
  }
}

export default NewFeatureModule;