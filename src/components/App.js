import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import OutfitPage from './OutfitPage.js';
import NewOutfitPage from './NewOutfitPage.js';

const App = () => (
	<div>
	  <Router basename={ process.env.PUBLIC_URL }>
	    <main>
	      <Route exact path="/" component={ Home } />
	      <Route path="/about" component={ About } />
	      <Route exact path='/new-outfit' component={ NewOutfitPage }/>
	      <Route path='/outfits/:id' component={ OutfitPage }/>
	    </main>
	  </Router>
  </div>
)

export default App;
