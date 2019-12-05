import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Pdf from '../KOBRES.pdf'

export class Nav extends Component {
  render() {
    return (
      <nav class="white hoverable" >
        <div className="container">
          <Link to="/" class="brand-logo thin black-text">Kevin O'Brien</Link>
          <ul className="right">
            <li><Link to="/about" class="thin black-text">About</Link></li>
            <li><Link to="/projects" class="thin black-text">Projects</Link></li>
            <li><a href = {Pdf} class="thin black-text">Resume</a></li>
            <li><a href = "https://kpobrien4.github.io/" class="thin black-text">Blog</a></li>
            <li><Link to="/music" class="thin black-text">Music</Link></li>
            <li><Link to="/contact" class="thin black-text">Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav