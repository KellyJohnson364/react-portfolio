import React, { Component } from 'react'
import { Project } from '../Project';
import './style.css';

export default class Main extends Component {
    render() {
        return (
            <main>
    
              <div className="container-fluid col-12" id="about-me">
                <h2>About Me</h2>
                  <p> My name is Kelly Johnson and I am a full stack web developer from Grand Rapids, MI. I have recently completed the full stack web development certificate program through Michigan State University.</p>
                  <p> I have a firm grasp of HTML5, CSS3, Javascript, jQuery, and Bootstrap, but am particularly excited to continue working with Node.js., Express.js, MongoDB,
                      MySQL, and most of all, React.js. I have built up a portfolio of class projects that I am proud of and look forward to adding personal projects.</p>
                  <p> I am actively applying and am eager to find my place on the right development team!    </p>
              </div>

              <div id="projects" >
                <h2 className="mb-5">Projects</h2>
                <div id="container" className="container-fluid col-12">
                  <div className="column">
                    <Project
                      id="project1"
                      img="image1"
                      src="./assets/images/screenshot-6.png"
                      alt="brews-loos"
                      title="brews-loos"
                      btn="btn1"
                      project="Good Brews and Neutral Loos"/>
                    <Project
                      id="project2"
                      img="image2"
                      src="./assets/images/screenshot-12.png"
                      alt="bashful-diner"
                      title="bashful-diner"
                      btn="btn2"
                      project="The Bashful Diner"/>
                    <Project
                      id="project3"
                      img="image3"
                      src="./assets/images/inspecto-gadget.png"
                      alt="inspecto-gadget"
                      title="inspecto-gadget"
                      btn="btn3"
                      project="Inspecto-Gadget"/>
                  </div>    
                </div>  
              </div>

              <div id="contact-info" >
                <h2>Contact Info</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
              </div>
            </main>
        )
    }
}