import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/TopNav.scss';

class TopNav extends Component {
  render() {
    return (
      <nav>
        <Link to={`/`} className="logo">
        	fs
        </Link>
        <div>
          <Link to={`/`}>
            browse
          </Link>
          <Link to={`/new-outfit`}>
            new outfit
          </Link>
        </div>

      </nav>
    );
  }
}

export default TopNav;
