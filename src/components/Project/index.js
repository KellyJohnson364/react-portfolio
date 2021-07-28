import React, { Component } from 'react'
import './style.css';

export function Project(props) {
  
  return (

              
                <div id= {props.id} className=" project col-md-8 col-sm-10">
                    <div className="dropdown col-12">
                      <button onClick={props.onClick} id ={props.btn} className="projectTitle col-12">{props.project}</button>
                        <div className="dropdown-content p-0 col-12">
                            <a target="blank" className="select p-1" href={props.site}>Deployed Site</a>
                            <a target="blank" className="select p-1" href={props.repo}>Repository</a>
                        </div>
                       
                    </div>  
                  
                    <img className=" projectImg col-12" id= {props.img} src= {props.src} alt={props.alt} title={props.title}/>      
                </div>
        
                )
    }
 
    export function Assignment(props) {
  
      return (
    
                  
                    <div id= {props.id} className=" project col-md-4 col-sm-10">
                        <div className="dropdown  col-12">
                          <button onClick={props.onClick} id ={props.btn} className="assgnTitle col-12">{props.project}</button>
                          <div className="dropdown-content p-0 col-12">
                            <a target="blank" className="select p-1" href={props.site}>Deployed Site</a>
                            <a target="blank" className="select p-1" href={props.repo}>Repository</a>
                        </div>
                        </div>  
                            <img className=" assgnImg col-12" id= {props.img} src= {props.src} alt={props.alt} title={props.title}/>
                               
                    </div>
            
                    )
        }   