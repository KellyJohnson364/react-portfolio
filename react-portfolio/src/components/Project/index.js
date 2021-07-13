import React, { Component } from 'react'
import './style.css';

export function Project(props) {
  
  return (

              
                <div id= {props.id} className="dropdown project col-4">
                        <img className=" projectImg col-12" id= {props.img} src= {props.src} alt={props.alt} title={props.title}/>
                            <div className="dropdown-content col-12">
                              <button onClick={props.onClick} id ={props.btn} className="projectTitle select col-12">{props.project}</button>
                            </div>  
                </div>
        
                )
    }
 