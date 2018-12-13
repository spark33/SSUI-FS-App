import React, { Component } from 'react';

class OutfitFeature extends Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: {
        top: this.props.feature.y + '%',
        left: this.props.feature.x + '%',
      },
      hover: false
    };
    this.openTooltip = this.openTooltip.bind(this);
    this.closeTooltip = this.closeTooltip.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      styles: {
        top: nextProps.feature.y + '%',
        left: nextProps.feature.x + '%',
      }
    });
  }

  toggleTooltip() {
    this.setState({ hover: !this.state.hover });
  }

  openTooltip() {
    this.setState({ hover: true });
  }

  closeTooltip() {
    this.setState({ hover: false });
  }

  render() {
    return (
    	<div 
        className={ this.state.hover ? "outfit-feature open" : "outfit-feature closed" }
        style={ this.state.styles }
        onClick={ this.handleClick }
        onMouseEnter={ this.openTooltip }
      >
	      { this.props.index + 1 }
        <div 
          className="tooltip"
          onMouseEnter={ this.openTooltip }
          onMouseLeave={ this.closeTooltip }
        >
          <h4>{ this.props.feature.title }</h4>
          <p>{ this.props.feature.description }</p>
          <a href={ this.props.feature.link } target="_blank">View Details →</a>
        </div>
			</div>
    );
  }
}

export default OutfitFeature;