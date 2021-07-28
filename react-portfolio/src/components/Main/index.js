import React, { Component } from 'react'
import { Assignment, Project } from '../Project';
import './style.css';

export default class Main extends Component {
    render() {
        return (
            <main>
    
              <div className="pb-3" id="about-me">
                <h2 className=" text-center">About Me</h2>
                  <p> My name is Kelly Johnson and I am a full stack web developer from Grand Rapids, MI. I have recently completed the full stack web development certificate program through Michigan State University.</p>
                  <p> I have a firm grasp of HTML5, CSS3, Javascript, jQuery, and Bootstrap, but am particularly excited to continue working with Node.js., Express.js, MongoDB,
                      MySQL, and most of all, React.js. I have built up a portfolio of class projects that I am proud of and look forward to adding personal projects.</p>
                  <p> I am actively applying and am eager to find my place on the right development team!    </p>
              </div>

              <div className="pb-4" id="projects" >
                <h2 className=" text-center">Projects</h2>
                <div id="container" className="container-fluid p-0 col-12">
                  <div className="row justify-content-center">
                    <Project
                      id="project1"
                      img="image1"
                      src="./assets/images/brews-n-loos.png"
                      alt="brews-loos"
                      title="brews-loos"
                      btn="btn1"
                      project="Good Brews and Neutral Loos"
                      site= "https://kellyjohnson364.github.io/brews-and-loos/"
                      repo= "https://github.com/KellyJohnson364/brews-and-loos"
                      />
                      
                    <Project
                      id="project2"
                      img="image2"
                      src="./assets/images/bashful-diner.png"
                      alt="bashful-diner"
                      title="bashful-diner"
                      btn="btn2"
                      project="The Bashful Diner"
                      site= "http://www.thebashfuldiner.com/"
                      repo= "https://github.com/KellyJohnson364/the-bashful-diner"
                      />
                    <Project
                      id="project3"
                      img="image3"
                      src="./assets/images/inspecto.png"
                      alt="inspecto-gadget"
                      title="inspecto-gadget"
                      btn="btn3"
                      project="Inspecto-Gadget"
                      site= "https://arcane-taiga-84005.herokuapp.com/"
                      repo= "https://github.com/KellyJohnson364/inspecto-gadget"
                      />
                      </div>
                      <div className="row justify-content-center">
                    <Assignment
                      id="assgn1"
                      img="image4"
                      src="./assets/images/weather.png"
                      alt="weather-dashboard"
                      title="weather-dashboard"
                      btn="btn4"
                      project="Weather Dashboard"
                      site= "https://kellyjohnson364.github.io/weather-dashboard/"
                      repo= "https://github.com/KellyJohnson364/weather-dashboard"
                      />
                     <Assignment
                      id="assgn2"
                      img="image5"
                      src="./assets/images/employee-directory.png"
                      alt="employee-directory"
                      title="employee-directory"
                      btn="btn5"
                      project="Employee Directory"
                      site= "https://kellyjohnson364.github.io/employee-directory/"
                      repo= "https://github.com/KellyJohnson364/employee-directory"
                      />    
                          </div>
                          </div>
              </div>
              <div id="contact-info" >
              <h2>Contact Information</h2>
                  <div id="contacts">
                    <p>Kelly Johnson</p>
                    <p>(616) 485-0827</p>  
                    <p>Resume: <a target="_blank" href="./images/resume.pdf">Resume.pdf</a></p>  
                    <p>Email:  <a target="_blank" href= "mailto:kj3641402@gmail.com">KJ3641402@gmail.com</a></p>  
                    <p>GitHub Profile: <a target="_blank" href= "https://github.com/KellyJohnson364">KellyJohnson364</a></p>  
                    <p>Linkedin: <a target="_blank" href= "https://www.linkedin.com/in/kelly-johnson-473227202">linkedin.com/in/KellyJohnson364</a></p>  
                  </div>

              </div>
            </main>
        )
    }
}