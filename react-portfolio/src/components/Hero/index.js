import React, { Component } from 'react'
import './style.css';

export default class Hero extends Component {
    render() {
        return (
        
          <div className="container-fluid" id="hero" title="Geometric" style={{ backgroundImage: "url(./assets/images/geometric-background.jpg)" }} >
            <div className="row justify-content-start">
                <img className="three col-md-3 col-sm-8"  id="me" src= "./assets/images/img_1827.jpg" alt= "me" title= "Me" ></img>
              <h1 className="col-md-5 col-sm-10 text-center" id="greeting">Hello, I'm KJ,{<br/>} a full-stack web developer.</h1>
            </div>  
          </div>
       
        )
    }
  }