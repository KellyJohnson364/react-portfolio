import React, { Component } from 'react'
import {Link} from 'react-scroll'

import './style.css';

export default class header extends Component {
    render() {
        return (

        <header className="container col-12">
          <div className="row">
          <h1><span className="col-6">Kelly Johnson</span></h1>
            <nav className="col-6">
              <ul>
                  <li><Link  to="about-me" spy={true} smooth={true}>About Me</Link></li>
                  <li><Link  to="projects" spy={true} smooth={true}>Projects</Link></li>
                  <li><Link  to="contact-info" spy={true} smooth={true}>Contact Info</Link></li>
                </ul>
            </nav>
            </div>
        </header>
        )
    }
}