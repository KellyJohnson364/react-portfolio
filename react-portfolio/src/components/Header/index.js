import React, { Component } from 'react'
import {Link} from 'react-scroll'

import './style.css';

export default class header extends Component {
    render() {
        return (

        <header className="container-fluid">
        
              <ul className="row" >
                  <li className="col-sm-12 col-md-4 "><h1>Kelly Johnson</h1></li>
                  <li className="col-sm-12 col-md-2"><Link  to="about-me" spy={true} smooth={true}>About Me</Link></li>
                  <li className="col-sm-12 col-md-2"><Link  to="projects" spy={true} smooth={true}>Projects</Link></li>
                  <li className="col-sm-12 col-md-2"><Link  to="contact-info" spy={true} smooth={true}>Contact Info</Link></li>
                </ul>
      
        </header>
        )
    }
}