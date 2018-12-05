import React, { Component } from 'react';
import '../scss/App.scss';

import TopNav from './TopNav.js';
import OutfitSlider from './OutfitSlider.js';
import SearchBar from './SearchBar.js';
import SearchTags from './SearchTags.js';
import SearchResults from './SearchResults.js';

class Home extends Component {

  constructor() {
    super();
    this.endpoint = "http://ssui-fs.herokuapp.com/outfits";
    this.state = {
      searchTags: [],
      featuredOutfits: [],
      searchResults: [],
      isLoaded: false
    }

    this.addSearchTag = this.addSearchTag.bind(this);
    this.removeSearchTag = this.removeSearchTag.bind(this);
  }

  componentDidMount() {
    fetch(this.endpoint)
      .then(res => res.json())
      .then(
        (result) => {
          let featuredOutfits = result.filter((o) => o.featured);
          this.setState({
            isLoaded: true,
            searchResults: result,
            featuredOutfits: featuredOutfits
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

  addSearchTag(tag) {
    let newTagList = [...this.state.searchTags, tag];
    let tagListStr = "?tags=" + newTagList.join(',');
    fetch(this.endpoint + tagListStr)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            searchResults: result,
            searchTags: newTagList
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

  removeSearchTag(tag) {
    var newTagList = [...this.state.searchTags]; // make a separate copy of the array
    var index = newTagList.indexOf(tag)
    if (index !== -1) newTagList.splice(index, 1);

    let tagListStr = "?tags=" + newTagList.join(',');
    fetch(this.endpoint + tagListStr) 
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            searchResults: result,
            searchTags: newTagList
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
    if(this.state.error) {
      return <p>Error: { this.state.error.message }</p>;
    } else if (!this.state.isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="Home">
          <header>
            <TopNav />
            <OutfitSlider
              outfits={ this.state.featuredOutfits }
            />
          </header>
          <div className="search">
            <SearchBar 
              addSearchTag={ this.addSearchTag }
            />
            <SearchTags
              tags={ this.state.searchTags }
              removeSearchTag={ this.removeSearchTag }
            />
          </div>
          <SearchResults 
            results={ this.state.searchResults }
          />
        </div>
      );
    }
  }
}

export default Home;
