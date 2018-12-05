import React, { Component } from 'react';

class FeatureTags extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      tags: props.tags
    };
  }

  render() {
    if(!this.props.tags) {
        return <p> Loading...</p>;
    } else {
      return (
        <div className="feature-tag-list">
          {
            this.state.tags.map(function(tag, index) {
              return (
                <div className="tag">
                  { tag }
                </div>
              );
            }, this)
          }
        </div>
      );
    }
  }
}

export default FeatureTags;