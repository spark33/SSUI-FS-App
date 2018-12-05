// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

import data from './data.json';

const OutfitAPI = {
  outfits: data,
  all: function() { return this.outfits},
  get: function(id) {
    const isOutfit = o => o.id === id
    return this.outfits.find(isOutfit)
  },
  search: function(tagList) {
    if(tagList.length === 0) return this.outfits;
    let results = [];
    let outfits = this.outfits;
    tagList.forEach(function(tag) {
      results = results.concat(outfits.filter(o => o.tags.indexOf(tag) >= 0));
      console.log(results)
    });
    return [...new Set(results)];
  }
}

export default OutfitAPI;
