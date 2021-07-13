import React, { Component } from 'react'
import './style.css';

export default class Hero extends Component {
    render() {
        return (
        
          <div className="container-fluid col-12" id="hero" title="Geometric" style={{ backgroundImage: "url(./assets/images/geometric-background.jpg)" }} >
            <div className="row">
                <img className="three col-s-12 col-m-6" id="me" src= "./assets/images/img_1827.jpg" alt= "picture of me" title= "Picture_of_Me" ></img>
              <h2 className="align-items-center" id="greeting">Hello, I'm KJ,{<br/>} a full-stack web developer.</h2>
            </div>  
          </div>
       
        )
    }
  }